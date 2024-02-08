import axios from "axios";
import { createContext, useState } from "react";


export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const isAuth = localStorage.getItem('authtoken');
    const url = 'http://localhost:5000';
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [file, setFile] = useState('');
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);

    const getUser = async (token) => {
        const response = await axios.get(`${url}/getUser`, {
            headers: {
                'auth-token': token
            }
        });
        return response;
    }

    return (
        <ContextApi.Provider
            value={{ isAuth, getUser, userData, setUserData, file, setFile, login, setLogin, error, setError }}
        >
            {children}
        </ContextApi.Provider>
    )
}