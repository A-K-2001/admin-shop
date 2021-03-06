import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/"
const BASE_URL = "https://ak-shop-api.herokuapp.com/api/"

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// console.log(JSON.parse(localStorage.getItem("persist:root")).user);

// console.log(TOKEN);
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});