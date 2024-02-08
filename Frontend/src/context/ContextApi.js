import axios from "axios";
import { createContext, useState } from "react";


export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const isAuth = localStorage.getItem('token');
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



    return (
        <ContextApi.Provider
            value={{ isAuth, userData, setUserData, file, setFile, login, setLogin, error, setError }}
        >
            {children}
        </ContextApi.Provider>
    )
}