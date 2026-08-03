import axios from "axios";

const getContent = async (prompt) => {
    // postman route: http://localhost:5000/api/user/userProfile
    const response = await axios.post("http://localhost:5000/api/content/generate",{
        prompt
    },{
        withCredentials: true, 
    });
    return response.data;
}


export default getContent;