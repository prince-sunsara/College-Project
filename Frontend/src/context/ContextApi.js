import { createContext, useState } from "react";


export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const isAuth = localStorage.getItem('token');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        birthdate: '',
        gender: '',
        nationality: '',
        address: '',
        prn: '',
    });
    const [file, setFile] = useState('');
    const [login, setLogin] = useState({
        prn: '',
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