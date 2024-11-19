import { ICartProductInfo } from '../../../interfaces/interfaces';
import { DataInput } from './DataInput';

import { useContext, useEffect, useState } from 'react';

import { Checkout } from './Checkout';
import { PaymentMethods } from './PaymentMethods';
import { DeliveryMethods } from './DeliveryMethods';

import { UserContext } from '../../../context/User/User';
import { useNavigate } from 'react-router-dom';
import { cityValidator, emailValidator_withError, nameValidator, phoneValidator, postalCodeValidator, streetValidator } from '../../Auth/validators';

import styles from './Finalize.module.scss';
import '../../../styles/global/buttons.scss';

export const Finalize = ({ products } : {products: ICartProductInfo[]}) => {
    const { user } = useContext(UserContext)!;
    const navigate = useNavigate();
    const [payMethod, setPayMethod] = useState('card');
    const [deliveryMethod, setDeliveryMethod] = useState('inpost');
    const [deliveryCost, setDeliveryCost] = useState(9.99);

    const [name, setName] = useState(data);
    const [city, setCity] = useState(data);
    const [street, setStreet] = useState(data);
    const [postalCode, setPostalCode] = useState(data);
    const [phone, setPhone] = useState(data);
    const [email, setEmail] = useState(data);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (name.err === '' && city.err === '' && street.err === '' && postalCode.err === '' && phone.err === '' && email.err === '') {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [name, city, street, postalCode, phone, email]);

    if (!user) {
        return (
            <div className={styles.finalize}>
                <div className={styles.auth}>
                    <h1 className={styles.title}>Please login to finalize your order</h1>
                    <button className='btn-1' onClick={() => navigate('/auth')}>Login</button>
                </div>
            </div>
        )
    }

    const getCheckoutData = () => {
        return {
            name: name.val,
            city: city.val,
            street: street.val,
            postalCode: postalCode.val,
            phone: phone.val,
            email: email.val,
            payment: payMethod,
            deliveryMethod: deliveryMethod,
        }
    }

    return (
        <div className={styles.finalize}>
            <h1 className={styles.title}>Finalize</h1>

            <div className={styles.form}>
                <PaymentMethods payMethod={payMethod} setPayMethod={setPayMethod} />
                <DeliveryMethods deliveryMethod={deliveryMethod} setDeliveryMethod={setDeliveryMethod} setDeliveryCost={setDeliveryCost} />

                <DataInput label='Imię i nazwisko*:' setValue={setName} validator={nameValidator}/>
                <DataInput label='Miasto*:' setValue={setCity} validator={cityValidator}/>
                <DataInput label='Ulica*:' setValue={setStreet} validator={streetValidator}/>
                <DataInput label='Kod pocztowy*:' setValue={setPostalCode} validator={postalCodeValidator}/>
                <DataInput label='Telefon*:' setValue={setPhone} validator={phoneValidator}/>
                <DataInput label='Email*:' setValue={setEmail} validator={emailValidator_withError}/>
            </div>
            <span className='todo'>Add consent for data processing, etc.</span>
            <Checkout products={products} isValid={isValid} deliveryCost={deliveryCost} getCheckoutData={getCheckoutData()}/>
        </div>
    )
}

const data = {
    val: '',
    err: 'init'
}


export interface ICheckoutData {
    name: string;
    city: string;
    street: string;
    postalCode: string;
    phone: string;
    email: string;
    payment: string;
    deliveryMethod: string;
}