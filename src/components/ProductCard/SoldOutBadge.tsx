import styles from './ProductCard.module.scss'

export const SoldOutBadge = ({ t, quantity }: { t: (key: string) => string, quantity: number }) => { 
    if (quantity) return null

    return <div className={`${styles['sold-out-badge']} badges_anim`}><span>{t('soldOut')}</span></div>
}