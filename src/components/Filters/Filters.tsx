// Hooks
import { useContext, useEffect, useRef, useState } from "react"

// Context
import { CatalogContext, IContextValues } from "../../context/CatalogContext"

// Components
import { InputSearch } from "./_InputSearch"
import { Options } from "./_Options"
import { Genres } from "./_Genres"
import { Price } from "./_Price"

// Styles
import styles from './Filters.module.scss'
import { Sort } from "./_Sort/Sort"

export const Filters = () => {
    const { filters, changeFilters, filterCount }: IContextValues = useContext(CatalogContext)!
    const [sort, setSort] = useState<{ type: string; order: string }>(filters.sort ?? { type: '', order: '' });
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [inputQuery, setInputQuery] = useState<string>(filters.inputQuery ?? '');
    const [options, setOptions] = useState<{ available: boolean; discount: boolean }>(filters.options ?? { available: false, discount: false });
    const [genres, setGenres] = useState<string[]>(filters.genres ?? []);
    const [price, setPrice] = useState<{ min: number; max: number }>(filters.price ?? { min: 0, max: 0 });

    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (filterRef.current) {
                if (!filterRef.current.contains(e.target as Node)) {
                    setIsFilterOpen(false);
                }
            } 
        })

        return () => document.removeEventListener('click', () => setIsFilterOpen(false));
    }, [])

    useEffect(() => {
        setIsFilterOpen(false);

    }, [filters])

    const applyFilters = () => changeFilters({ inputQuery, options, genres, price }, 1);
    const switchFilter = () => setIsFilterOpen(!isFilterOpen);

    return (
        <div id='filter-ref' ref={filterRef}>
            <div className={`${styles.filter} ${isFilterOpen ? styles.open : styles.close}`} >
                <InputSearch setInputQuery={setInputQuery} inputQuery={inputQuery} applyFilters={applyFilters}/>
                <Sort setSort={(type: string, order: string) => setSort({ type, order })} sort={sort} />
                <Options options={options} setOptions={setOptions} />
                <Genres setGenres={setGenres} genres={genres} />
                <Price price={price} setPrice={setPrice} />

                <button className={styles['filter-btn']} onClick={applyFilters}>Apply</button>    
                
            </div>
            <button className={`${styles['switch-btn']} ${isFilterOpen && styles['switch-close']} `} onClick={switchFilter}>
                {isFilterOpen ? ' Close' : `Filters ${filterCount ? filterCount : ''}`}
            </button>
        </div>
    )
}