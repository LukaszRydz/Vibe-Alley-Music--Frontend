import axios from 'axios';

import { ICartProductInfo } from '../../interfaces/interfaces';
import {loadStripe} from '@stripe/stripe-js';
import { ICheckoutData } from '../../components/Cart/_Finalize/Finalize';
import { Host } from '../../utils/variables';
import { stripeKey } from '../../private';

//! If u don't have it yet, create a file called private.ts in the src folder and add the following line:
//! export const stripeKey = 'YOUR_STRIPE_KEY';
const stripe = await loadStripe(stripeKey);

axios.defaults.withCredentials = true;

export const payment = async (products: ICartProductInfo[], checkoutData: ICheckoutData) => {
    if (!stripe) {
        return;
    }

    const parsedProducts = products.map(product => {
        return {
            _id: product._id,
            quantity: product.quantityInCart,
        }
    })

    const headers = { 'Content-Type': 'application/json' };
    
    const res = await axios.post(`${Host.SHOP}/payment/create-checkout-session`,
        JSON.stringify({
            productsToBuy: parsedProducts,
            deliveryData: checkoutData,
        }),
        {
            withCredentials: true,
            headers: headers,
        }
    )

    const session = await res.data;
    const results = await stripe.redirectToCheckout({ sessionId: session.id });
    
    if (results.error) {
        console.log(results.error.message);
        alert('We are sorry, but there was an error processing your payment. Please try again later.');
    }
}