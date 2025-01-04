import { useContext } from "react";
import { ProductList } from "../ProductList/ProductList";
import { Banner } from "./_Banner/Banner";
import styles from "./Home.module.scss";
import { UserContext } from "../../context/User/User";

export const Home = (): JSX.Element => {
    const { spotifyFavAlbums } = useContext(UserContext)!;
    return (
        <div className={styles.home}>
            <ProductList genre="rap" title="Rap" />
            <ProductList genre="pop" title="Pop" />
            <Banner
                filters={{
                    sort: {
                        type: "release",
                        order: "desc",
                    },
                }}
                elements={6}
                header="Newest Albums"
                sessionPrefix="genre"
            />
            <ProductList genre="rock" title="Rock" />
            <ProductList genre="soul" title="Soul" />
            {spotifyFavAlbums.length > 0 && (
                <Banner
                    filters={{
                        favAlbumsArr: spotifyFavAlbums,
                    }}
                    elements={7}
                    header="You like it!"
                    sessionPrefix="spotify_fav"
                    specialType="spotify"
                />
            )}
            <ProductList genre="dance" title="Dance" />
        </div>
    );
};
