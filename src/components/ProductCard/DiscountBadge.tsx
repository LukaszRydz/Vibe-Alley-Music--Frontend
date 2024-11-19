import styles from './ProductCard.module.scss'

export const DiscountBadge = ({ discount }: { discount: number }) => { 
    if (discount === 0) return null

    return <div className={`${styles['discount-badge']} badges_anim`}><span>{`-${discount}%`}</span></div>
}