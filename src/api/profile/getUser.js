import axios from "axios";

const getUser = async (userData) => {
    // postman route: http://localhost:5000/api/user/userProfile
    // ! do not pass in empty payload (er/userProfile",{}, {with) when using get method, otherwise it will throw an error saying unauthorized
    const response = await axios.get("http://localhost:5000/api/user/userProfile",{
        withCredentials: true, 
    });
    return response.data;
}

export default getUser;