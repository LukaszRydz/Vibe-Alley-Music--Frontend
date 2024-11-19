import { useState, useEffect } from 'react';

import { fetchProductsDetails } from '../services/shop/products';
import { ProductPageView } from '../components/ProductPageView/ProductPageView';
import { IProductDetails } from '../interfaces/interfaces';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
    const [productInfo, setProductInfo] = useState<IProductDetails | null>(null);
    const [status, setStatus] = useState('fetching');
    const location = useLocation();

    useEffect(() => {
        const id = window.location.pathname.split('/').pop();
        const product = sessionStorage.getItem(`product_${id}`);

        if (product) {
            setProductInfo(JSON.parse(product));
            setStatus('fetched');
        } else {
            fetchProductsDetails([id!]).then((response) => {
                if (response.error) {
                    setStatus('error');
                } else {
                    setProductInfo(response[0]);
                    setStatus('fetched');
                }
            })
        }
    }, [location])

    if (status === 'fetching') return <div className='info-div'>Fetching...</div>
    if (status === 'error') return <div className='info-div'>Error fetching product info</div>
    if (!productInfo) return <div className='info-div'>No product info</div>

    return (
        <ProductPageView productInfo={productInfo}/>
    )
}

export default ProductPage;