import axios from "axios";

const registerUser = async (userData) => {
    // postman route: http://localhost:5000/api/user/register
    const response = await axios.post("http://localhost:5000/api/user/register", {
        email: userData.email,
        password: userData.password,
        username: userData.username,
    },{
        withCredentials: true, 
    });
    return response.data;
}

export default registerUser;