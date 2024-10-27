import { createContext, useEffect, useState } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();

            if (!token) {
                //logout
                logout();
                setLoading(false);
                return
            }

            if (tokenCtrl.hasExpired(token)) {
                logout();
            } else {
                await login(token);
            }
        })()
    }, [])

    const login = async (token) => {
        try {
            //TODO: Setear el token en el localStorage
            tokenCtrl.setToken(token);
            //TODO: Obtener los datos del usuario
            const response = await userCtrl.getMe();
            //TODO: Setear los datos del usuario en el state user
            setUser(response);
            // //TODO: Setear el token en el estado state token
            setToken(token);
            // //TODO: Setear el estado de loading a false
            setLoading(false);
        } catch (error) {
            // console.log(error);
            setLoading(false);
        }
    }

    const logout = () => {
        tokenCtrl.removeToken();
        setToken(null);
        setUser(null);
    };

    const updateUser = (key, value) => {
        setUser({
            ...user, 
            [key]: value,
        });
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };

    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}