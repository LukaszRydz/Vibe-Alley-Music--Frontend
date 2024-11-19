import { createContext, useEffect, useState } from "react";
import { ICart, IUser } from "../../interfaces/interfaces";
import { getAccount, removeCookie } from "../../services/auth/auth";

import { CartOperations } from "./cartOperations";

export const UserContext = createContext<{
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    cart: ICart[];
    setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
    addAlbumToCart: (item: ICart) => void;
    updateQuantityInCart: (item: ICart) => void;
    removeAlbumFromCart: (id: string) => void;
    removeUserInformation: () => void;
    logOut: () => void;
} | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [cart, setCart] = useState<ICart[]>([]);

    useEffect(() => {
        const autoLogin = JSON.parse(localStorage.getItem("auto-login") || "false");

        if (autoLogin) {
            getAccount().then((data) => {
                if (data.error) {
                    localStorage.removeItem("auto-login");
                    console.error(data.error);
                } else {
                    setUser(data);
                    CartOperations.mergeCarts(CartOperations.getLocalStorage(), data.cart).then(merged => setCart(merged))
                }
            });
        } else {
            setCart(CartOperations.getLocalStorage());
        }
    }, []);

    useEffect(() => {
        !user?._id && CartOperations.setLocalStorage(cart);
    }, [cart]);

    const addAlbumToCart = async (item: ICart) => {
        if (!item.id || !item.quantity) return;

        if (user?._id) {
            await CartOperations.addInDatabase([item]).then((data) => setCart(data));
        } else {
            await setCart(CartOperations.addLocally(cart, item));
        }
    };

    const updateQuantityInCart = (item: ICart) => {
        if (!item.id || !item.quantity) return;
        if (user?._id) {
            CartOperations.updateInDatabase(item).then((data) => !data.error && setCart(data));
        } else {
            setCart(CartOperations.updateLocally(cart, item));
        }
    };

    const removeAlbumFromCart = (id: string) => {
        if (!id) return;
        if (user?._id) {
            CartOperations.removeInDatabase(id).then((data) => !data.error && setCart(data));
        } else {
            setCart(CartOperations.deleteLocally(cart, id));
        }
    };

    const removeUserInformation = () => {
        setUser(null);
        setCart([]);
    }

    const logOut = () => {
        localStorage.removeItem("auto-login");    
        removeCookie();
    };

    return (
        <UserContext.Provider value={{ user, setUser, cart, setCart, addAlbumToCart, updateQuantityInCart, removeAlbumFromCart, removeUserInformation, logOut }}>
            {children}
        </UserContext.Provider>
    );
};
