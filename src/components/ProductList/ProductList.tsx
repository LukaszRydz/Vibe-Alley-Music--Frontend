// Hooks
import { useContext} from "react"

// Components
import { ProductCard } from "../ProductCard/ProductCard";

// Context
import { CatalogContext, IContextValues } from "../../context/CatalogContext"
import { loadLocalTranslations } from "../../translations/config";
import { IProductInfo } from "../../interfaces/interfaces";
import { PaginationButton } from "./PaginationButton";

// Styles
import styles from './ProductList.module.scss'

export const ProductList = () => {
    const { products, queryState, pageInfo }: IContextValues = useContext(CatalogContext)!
    const t = loadLocalTranslations('Catalog.ProductList')();

    if (queryState === 'fetching') {
        return <div className={styles.info}>{t('queryFetching')}</div>
    }

    if (queryState === 'error') {
        return <div className={styles.info}>{t('queryError')}</div>
    }

    if (products.length === 0) {
        return <div className={styles.info}>{t('listEmpty')}</div>
    }

    const renderPagination = () => {
        const pagination = []
        for (let i = 1; i <= pageInfo.total; i++) {
            pagination.push(<PaginationButton page={i} key={i} disabled={i === pageInfo.current} />)
        }

        return pagination;
    }

    return (
        <div className={styles['product-list-wrapper']}>
            <div className={styles['product-list']}>
                {products.map((product: IProductInfo) => {
                    return <ProductCard product={product} key={product._id} />
                })}
            </div>
            <div className={styles.pagination}>
                {pageInfo.total > 1 && renderPagination()}
            </div>
        </div>
    );
}