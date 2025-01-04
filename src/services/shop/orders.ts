import axios from "axios";

import { Host } from "../../utils/variables";

axios.defaults.withCredentials = true;

export const fetchOrders = async () => {
    const headers = { "Content-Type": "application/json" };

    const res = await axios.get(`${Host.SHOP}/orders`, {
        withCredentials: true,
        headers: headers,
    });

    return res;
};