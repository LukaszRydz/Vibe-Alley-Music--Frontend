import { ICart } from "../../interfaces/interfaces";
import { _request_addProductToCart, _request_removeProductFromCart, _request_updateProductInCart } from "../../services/shop/products";


export const CartOperations = {
    async addInDatabase(items: ICart[]) {
        try {
            const data = await _request_addProductToCart(items);
            if (data.error) {
                console.error(data.error);
                return;
            } else {
                return data;
            }
        } catch (error) {
            console.error('Error updating database:', error);
        }
    },

    async updateInDatabase(item: ICart) {
        const data = await _request_updateProductInCart(item.id, item.quantity);
        if (data.error) {
            console.error(data.error);
        }
        return data;
    },

    async removeInDatabase(id: string) {
        const data = await _request_removeProductFromCart(id);
        if (data.error) {
            console.error(data.error);
        }
        return data;
    },
    
    updateLocally(cart: ICart[], item: ICart) {
        const newCart = [...cart];
        const itemIndex = newCart.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            newCart[itemIndex].quantity = item.quantity;
            return newCart;
        } else {
            return cart;
        }
    },

    deleteLocally(cart: ICart[], id: string) {
        const newCart = cart.filter((cartItem) => cartItem.id !== id);
        return newCart;
    },

    addLocally(cart: ICart[], item: ICart) {
        const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart[itemIndex].quantity += item.quantity;
            return newCart;
        } else {
            return [...cart, item];
        }
    },

    async mergeCarts(localCart: ICart[], databaseCart: ICart[]) {
        if (localCart && localCart.length < 1) return databaseCart        
        
        const cart = await CartOperations.addInDatabase(localCart)
        
        localStorage.removeItem('cart');
        return cart as ICart[]
    },

    setLocalStorage(cart: ICart[]) { cart && cart.length > 0 && localStorage.setItem('cart', JSON.stringify(cart)); },
    getLocalStorage() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
}