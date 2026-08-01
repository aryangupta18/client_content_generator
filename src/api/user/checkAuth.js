import axios from "axios";

const checkAuth = async (userData) => {
    // postman route: http://localhost:5000/api/user/check
    const response = await axios.get("http://localhost:5000/api/user/check",{
        withCredentials: true, 
    });
    return response.data;
}

export default checkAuth;