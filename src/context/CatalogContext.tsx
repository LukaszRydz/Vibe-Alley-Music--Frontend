// Hooks
import { createContext, useState, useEffect } from 'react';

// Templates
import { filterTemplate } from '../utils/templates';

// Services
import { fetchProductsInfo } from '../services/shop/products';

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
    filterCount: number;
} | null>(null);

export const CatalogProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<IProductInfo[]>([]);
    const [queryState, setQueryState] = useState<string>('');
    
    const [filters, setFilters] = useState<IFilters>({...filterTemplate, ...getFilterParams()});
    const [filterCount, setFilterCount] = useState<number>(0);
    const [pageInfo, setPageInfo] = useState<IPageInfo>({ current: 1, total: 1 });

    const countFilters = () => {
        let count = 0;
        if (filters.genres) count += filters.genres.length;
        if (filters.inputQuery && filters.inputQuery.length > 0) count++;
        if (filters.options?.available) count++;
        if (filters.options?.discount) count++;
        if (filters.price && filters.price?.min > 0) count++;
        if (filters.price && filters.price?.max > 0) count++;
        if (filters.sort && filters.sort.type.length > 0) count++;

        return count;
    }

    const changeFilters = (newFilters: IFilters | null, currentPage: number) => {
        if (newFilters) {
            setFilters({ ...filters, ...newFilters });
        }
        
        setFilterParams(newFilters, currentPage);
        setPageInfo({ ...pageInfo, current: currentPage });
    }

    useEffect(() => {
        setFilterCount(countFilters());
        setQueryState('fetching');
        fetchProductsInfo(filters, pageInfo.current, 10).then((response) => {
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
        <CatalogContext.Provider value={{ products, filters, pageInfo, setPageInfo, queryState, changeFilters, filterCount }}>
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
    filterCount: number;
}