import { useNavigate } from 'react-router-dom'
import { loadLocalTranslations } from '../../translations/config'
import { IOrderProduct } from './Orders'
import modules from './Orders.module.scss'

export const ProductList = ({ products } : { products: IOrderProduct[]}) => {
    const t = loadLocalTranslations('Orders')() 
    const navigate = useNavigate()

    const el = (product: IOrderProduct) => {
        return (
            <li key={product._id} onClick={() => navigate('/product/' + product.productId)}>
                <img src={product.image} alt="cover" className={modules.cover}/>
                <h2 className={modules.title}>{t('title')}: {product.title}</h2>
            </li>
        )
    }
    
    return (
        <ul className={modules['order-products']}>
            {products.map(product => el(product))}
        </ul>
    )
}