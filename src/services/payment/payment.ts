import axios from 'axios';

import { ICartProductInfo } from '../../interfaces/interfaces';
import {loadStripe} from '@stripe/stripe-js';
import { ICheckoutData } from '../../components/Cart/_Finalize/Finalize';
import { Host } from '../../utils/variables';
import { stripeKey } from '../../private';

axios.defaults.withCredentials = true;

const loadStripeRes = async () => {
    const stripeScript = document.createElement('script');
    stripeScript.src = 'https://js.stripe.com/v3/';
    stripeScript.async = true;
    document.body.appendChild(stripeScript);
}

export const payment = async (products: ICartProductInfo[], checkoutData: ICheckoutData) => {    
    //! If u don't have it yet, create a file called private.ts in the src folder and add the following line:
    //! export const stripeKey = 'YOUR_STRIPE_KEY';
    await loadStripeRes();
    const stripe = await loadStripe(stripeKey);
    if (!stripe) {
        return;
    }

    const parsedProducts = products.map(product => {
        return {
            _id: product._id,
            quantity: product.quantityInCart,
        }
    })

    const headers = { 'Content-Type': 'application/json' , "ngrok-skip-browser-warning": true };
    
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