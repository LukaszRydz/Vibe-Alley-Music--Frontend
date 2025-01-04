import { useEffect, useState } from "react";
import { fetchOrders } from "../../services/shop/orders";

import { OrderElement } from "./OrderElement";
import styles from './Orders.module.scss'

export const Orders = () => {
    const [orders, setOrders] = useState<IOrder[] | []>([]);

    useEffect(() => {
        const orders = sessionStorage.getItem('orders');
        if (orders) {
            setOrders(JSON.parse(orders));
        } else {   
            fetchOrders().then((res) => {
                const { orders } = res.data
                orders.length && sessionStorage.setItem('orders', JSON.stringify(orders));
                setOrders(orders);
            });
        }
    }, []);

    if (!orders.length) {
        return (
            <div className={styles.orders}>
                <h1>No orders</h1>
            </div>
        );
    }

    return (
        <div className={styles.orders}>
            <ul className={styles['order-list']}>
                {orders.map(order => <OrderElement key={order._id} order={order} />)}
            </ul>
        </div>
    );
}

export interface IOrderProduct {
    discount: number;
    price: number;
    productId: string;
    quantity: number;
    _id: string;
    title: string;
    image: string;
}

export interface IOrder {
    _id: string;
    deliveryMethod: string;
    paymentMethod: string;
    status: string;
    totalAmount: number;
    products: IOrderProduct[];
    createdAt: string;
}