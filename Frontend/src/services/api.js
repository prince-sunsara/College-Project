import axios from 'axios';

const url = 'http://localhost:5000'

/// create a new user
export const createUser = async (data) => {
    try {
        const response = await axios.post(`${url}/createUser`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    } catch (error) {
        console.log("Frontend Error: while creating user", error);
    }
};


/// login with existing user
export const loginUser = async (data) => {
    // console.log(data)
    try {
        const response = await axios.post(`${url}/loginUser`, data);
        return response;
    }
    catch (err) {
        console.log("Frontend Error: while login to existing user", err);
    }
};