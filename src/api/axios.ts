import axios from "axios";

const baseURL = "https://api.academyxpert.la/api/v1";
const baseURLLocal = "http://localhost:5000/api/v1";

export const axiosWithAuth = axios.create({
    baseURL: baseURLLocal,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default axios.create({
    baseURL: baseURLLocal,
});
