import axios from "axios";

const logoutUser = async (userData) => {
    // postman route: http://localhost:5000/api/user/logout
    const response = await axios.post("http://localhost:5000/api/user/logout",{},{
        withCredentials: true, 
    });
    return response.data;
}

export default logoutUser;