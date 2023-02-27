import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// console.log("user", user);

const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;
console.log("TOKEN", TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
