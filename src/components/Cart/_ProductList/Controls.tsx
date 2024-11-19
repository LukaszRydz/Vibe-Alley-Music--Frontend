import { MdDeleteForever } from "@react-icons/all-files/md/MdDeleteForever";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";

import { useContext } from "react";
import { UserContext } from "../../../context/User/User";
import { ICartProductInfo } from "../../../interfaces/interfaces";

import { CartButton } from "./CartButton";

import styles from "./ProductList.module.scss";

export const Controls = ({ product } : { product: ICartProductInfo}) => {
    const { removeAlbumFromCart, updateQuantityInCart } = useContext(UserContext)!;
    const quantityInCart = Number(product.quantityInCart);

    const changeQuantity = (option: string) => {
        if (option === "+") {
            updateQuantityInCart({ id: product._id, quantity: quantityInCart + 1 });
        } else if (option === "-") {
            updateQuantityInCart({ id: product._id, quantity: quantityInCart - 1 });
        }
    }

    return (
        <div className={styles.controls}>
            <h2 className={styles['quantity-label']}>{`Quantity: ${quantityInCart}`}</h2>
            { quantityInCart + 1 <= product.quantity && <CartButton event={() => changeQuantity("+")} child={<FaPlus />} />}
            { quantityInCart - 1 > 0 && <CartButton event={() => changeQuantity("-")} child={<FaMinus />} />}
            <CartButton event={() => removeAlbumFromCart(product._id)} child={<MdDeleteForever />} />
        </div>
    );
};
