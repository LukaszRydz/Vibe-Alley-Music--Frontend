import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { IoIosCloseCircle } from 'react-icons/io';

import styles from "./Navbar.module.scss";

export const Searcher = ({ toggleSearch }: { toggleSearch: () => void }) => {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    
    const navigate = useNavigate();

    const search = () => {
        if (query.trim()) {
            toggleSearch();
            navigate(`/catalog?inputQuery=${encodeURIComponent(query)}`);
        }
    };

    useEffect(() => {
        inputRef.current?.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                search();
                setQuery("");
            }
        });

        return () => {
            inputRef.current?.removeEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    search();
                    setQuery("");
                }
            });
        }
    }, []);

    return (
        <div className={styles.searcher}>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && search()}
                value={query}

            />
            <button className={styles.searchBtn} onClick={toggleSearch}>
                <IoIosCloseCircle className={styles.icon} />
            </button>
        </div>
    );
};
