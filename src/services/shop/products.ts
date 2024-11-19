import axios from 'axios'
import { _fetchProductsInfo, _fetchProductsDetails } from '../endpoints'
import { ICart, IFilters } from '../../interfaces/interfaces';
import { Host } from '../../utils/variables';

export const fetchProductsInfo = async (filters: IFilters, currentPage: number) => {
    try {
        const response = await axios.get(_fetchProductsInfo + `?page=${currentPage}&limit=10`, {
            params: filters
        })
        if (response.status !== 200) {
            return { error: 'Error fetching products' }
        }

        return response.data;
    } catch (error) {
        return { error: 'Error fetching products' }
    }
}

export const fetchProductsDetails = async (ids: string[]) => {
    try {
        const response = await axios.get(_fetchProductsDetails, {
            params: { ids: ids }
        })
        if (response.status !== 200) return { error: 'Error fetching products Info' }
        
        return response.data;
    } catch (error) {
        return { error: 'Error fetching products' }
    }
}

export const _request_addProductToCart = async (items: ICart[]) => {
    try {
        const response = await axios.post(`${Host.CLIENT}/account/add-to-cart`, {
            products: items
        })

        if (response.status !== 200) return { error: 'Error adding product to cart' }

        return response.data;
    } catch (error) {
        console.error(error);
        return { error: 'Error adding product to cart' }
    }
}

export const _request_updateProductInCart = async (id: string, quantity: number) => {
    try {
        const response = await axios.patch(`${Host.CLIENT}/account/update-cart`, {
            id: id,
            quantity: quantity
        })

        if (response.status !== 200) return { error: 'Error updating product in cart' }

        return response.data;
    } catch (error) {
        console.error(error);
        return { error: 'Error updating product in cart' }
    }
}

export const _request_removeProductFromCart = async (id: string) => {
    try {
        const response = await axios.delete(`${Host.CLIENT}/account/remove-from-cart`, {
            params: { id: id }
        })

        if (response.status !== 200) return { error: 'Error removing product from cart' }

        return response.data;
    } catch (error) {
        console.error(error);
        return { error: 'Error removing product from cart' }
    }
}

export const getCartProductsInfo = async (cart: ICart[]) => {
    try {
        const response = await axios.get(`${Host.SHOP}/client/product/cart`, {
            params: { cartItems: cart }
        })

        if (response.status !== 200) return { error: 'Error fetching cart items' }

        return response.data;

    } catch (error) {
        console.log(error);
        return { error: 'Error fetching cart items' }
    }
}