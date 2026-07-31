import axios from "axios";

const loginUser = async (userData) => {
    // postman route: http://localhost:5000/api/user/login
    const response = await axios.post("http://localhost:5000/api/user/login", {
        email: userData.email,
        password: userData.password,
    },{
        withCredentials: true, 
    });
    return response.data;
}

export default loginUser;