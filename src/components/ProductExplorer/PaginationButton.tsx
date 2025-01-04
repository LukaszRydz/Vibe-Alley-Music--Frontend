import { useContext } from 'react';
import { CatalogContext } from '../../context/CatalogContext';

import styles from './ProductExplorer.module.scss'

export const PaginationButton = ({ page, disabled }: {page: number, disabled: boolean}) => {
    const { pageInfo, setPageInfo } = useContext(CatalogContext)!;
    
    const changePage = () => setPageInfo({ ...pageInfo, current: page });
    
    return <button className={styles['pagination-btn']} onClick={changePage} disabled={disabled}>{page}</button>
}