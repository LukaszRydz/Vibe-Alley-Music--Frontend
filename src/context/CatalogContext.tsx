// Hooks
import { createContext, useState, useEffect } from 'react';

// Templates
import { filterTemplate } from '../utils/templates';

// Services
import { fetchProductsInfo } from '../services/shop/products';

// Interfaces

// utils
import { getFilterParams, setFilterParams } from '../utils/filterParams';
import { IFilters, IPageInfo, IProductInfo } from '../interfaces/interfaces';

export const CatalogContext = createContext<{
    products: IProductInfo[];
    filters: IFilters;
    pageInfo: IPageInfo;
    setPageInfo: (pageInfo: IPageInfo) => void;
    queryState: string;
    changeFilters: (newFilters: IFilters | null, currentPage: number) => void;
} | null>(null);

export const CatalogProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<IProductInfo[]>([]);
    const [queryState, setQueryState] = useState<string>('');
    
    const [filters, setFilters] = useState<IFilters>({...filterTemplate, ...getFilterParams()});
    const [pageInfo, setPageInfo] = useState<IPageInfo>({ current: 1, total: 1 });
    

    const changeFilters = (newFilters: IFilters | null, currentPage: number) => {
        if (newFilters) {
            setFilters({ ...filters, ...newFilters });
        }
        
        setFilterParams(newFilters, currentPage);
        setPageInfo({ ...pageInfo, current: currentPage });
    }

    useEffect(() => {
        setQueryState('fetching');
        fetchProductsInfo(filters, pageInfo.current).then((response) => {
            if (response.error) {
                setQueryState('error');
                return;
            }
            
            setQueryState('fetched');
            setProducts(response.products);
            setPageInfo(prevPage => ({ ...prevPage, total: response.totalPages }));
        });
    }, [filters, pageInfo.current]);
    
    return (
        <CatalogContext.Provider value={{ products, filters, pageInfo, setPageInfo, queryState, changeFilters }}>
            {children}
        </CatalogContext.Provider>
    )
}

export interface IContextValues {
    products: IProductInfo[];
    filters: IFilters;
    pageInfo: IPageInfo;
    queryState: string;
    changeFilters: (newFilters: IFilters | null, currentPage: number) => void;
}