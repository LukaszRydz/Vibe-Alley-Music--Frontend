import { useContext, useEffect } from "react";
import { Auth } from "../components/Auth";
import { UserContext } from "../context/User/User";
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
    const { user } = useContext(UserContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        user?._id && navigate("/"); 
    }, [user])

    return (
        <Auth />
    );
}

export default AuthPage;