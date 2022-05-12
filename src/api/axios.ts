import axios from "axios";

const baseURL = "https://api.academyxpert.la/api/v1";

export const axiosWithAuth = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default axios.create({
    baseURL,
});
