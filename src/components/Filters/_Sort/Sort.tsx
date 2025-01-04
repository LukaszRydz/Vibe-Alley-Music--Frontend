import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

import styles from './Sort.module.scss';

export const Sort = ({ setSort, sort }: { setSort: (type: string, order: string) => void, sort: { type: string, order: string } }) => {
    const [order, setOrder] = useState('asc');
    
    const sortOptions = [
        "title",
        "release",
        "discount",
        "price",
        "duration",
    ]

    useEffect(() => {
        setSort(sort.type, order);
    }, [order])

    const toggleOption = (option: string) => {
        if (sort.type == option.toLowerCase()) {
            setSort('', order);
            return;
        }
        
        setSort(option.toLowerCase(), order);
    }

    const changeOrder = () => {
        order == 'asc' ? setOrder('desc') : setOrder('asc');
    }
    
    return (
        <div className={styles["sort-wrapper"]}>
            <h1 className={styles["sort-header"]}>Sort By:</h1>
            <div className={styles.options}>
                {sortOptions.map((option, index) => (
                    <button key={index} className={styles.option + ` ${sort.type == option.toLowerCase() ? styles.active : ''}`} onClick={() => toggleOption(option)} title='Sort by'>
                        <span>{option}</span>
                    </button>
                ))}
            </div>

            <button className={styles["order-btn"]} onClick={changeOrder} title='Change order'>
                <FaArrowAltCircleUp className={`${styles["order-icon"]} ${order == 'asc' ? styles.desc : ''}`}/>
            </button>
        </div>
    )
}