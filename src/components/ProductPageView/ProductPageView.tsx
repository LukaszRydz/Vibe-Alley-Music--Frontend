import { useEffect } from 'react'
import { Landing } from './Landing'

import { IProductDetails } from '../../interfaces/interfaces'

import { SimilarProducts } from './SimilarProducts'
import { TrackList } from './TrackList'
import { GenresList } from './GenresList'

import styles from './ProductPageView.module.scss'

export const ProductPageView = ({productInfo} : {productInfo : IProductDetails}) => {
    const { images, title, price, discount, genres, artists, spotifyAlbumId, _id, quantity, releaseDate } = productInfo
    
    useEffect(() => {
        const body = document.querySelector('body')!

        // background img
        body.style.backgroundImage = `url(${images.large.url})`
        body.style.backgroundSize = 'cover'
        body.style.backgroundPosition = 'center'
        body.style.backgroundAttachment = 'fixed'

        return () => {
            body.style.backgroundImage = ''
            body.style.backgroundSize = ''
            body.style.backgroundPosition = ''
            body.style.backgroundAttachment = ''
        }
    }, [images])

    return (
        <div className={styles['product-page']} style={{backgroundImage: `url(${images.large.url})`}}>
            <Landing url={images.large.url} title={title} price={price} artists={artists} discount={discount} _id={_id} quantity={quantity} releaseDate={releaseDate}/>
            
            <div className={styles['product-details']}>
                <GenresList genres={genres} />
                <TrackList spotifyAlbumId={spotifyAlbumId}/>
                <SimilarProducts genres={genres}/>
            </div>
        </div>
    )
}