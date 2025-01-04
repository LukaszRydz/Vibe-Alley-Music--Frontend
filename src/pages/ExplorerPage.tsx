import { Filters } from "../components/Filters/Filters"
import { ProductExplorer } from "../components/ProductExplorer/ProductExplorer"


import { CatalogProvider } from "../context/CatalogContext"

import styles from './Pages.module.scss'

export const ExplorerPage = () => {    
    return (
        <div className={styles.page}>
            <CatalogProvider>
                <Filters />
                <ProductExplorer />
            </CatalogProvider>
        </div>
    )
}

export default ExplorerPage