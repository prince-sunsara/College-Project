import { createContext } from "react";


export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const isAuth = localStorage.getItem('authtoken');
    return (
        <ContextApi.Provider
            value={{ isAuth }}
        >
            {children}
        </ContextApi.Provider>
    )
}