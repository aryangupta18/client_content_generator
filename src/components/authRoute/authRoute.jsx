import { Navigate, replace, useLocation } from "react-router-dom"
import { useAuth } from "../../authContext/AuthContext"
import AuthCheck from "../alert/authCheck"


const AuthRoute = ({children})=>{
    const {isAuthenticated, isLoading, isError} = useAuth()
    const loc = useLocation()
    if(isLoading)
        return (<AuthCheck/>)
    if(!isAuthenticated || isError){
        return (<Navigate to='/login' state={{from: loc}} replace/>)
    }
    return children
}

export default AuthRoute