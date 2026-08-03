import {createContext, useState, useEffect, useContext} from 'react';
import checkAuth from '../api/user/checkAuth.js';
import {useQuery} from '@tanstack/react-query'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//   make request to check if user is authenticated
    const {isSuccess, data, isLoading, isError} = useQuery({
        queryKey: ['checkAuth'],
        queryFn: checkAuth,
    })
    // update isAuthenticated state based on the response from the server
    useEffect(()=>{
        if(isSuccess)
            setIsAuthenticated(data?.isAuthenticated);
        if(isError)
            setIsAuthenticated(false);
    },[data, isSuccess, isError])

    const login = () => {
        setIsAuthenticated(true);
    }

    const logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, isLoading, isError, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

// custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
}