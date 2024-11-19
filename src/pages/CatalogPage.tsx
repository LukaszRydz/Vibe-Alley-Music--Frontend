import { Filters } from "../components/Filters/Filters"
import { ProductList } from "../components/ProductList/ProductList"

import { CatalogProvider } from "../context/CatalogContext"

import styles from './Pages.module.scss'

export const CatalogPage = () => {    
    return (
        <div className={styles.page}>
            <CatalogProvider>
                <Filters />
                <ProductList />
            </CatalogProvider>
        </div>
    )
}

export default CatalogPage