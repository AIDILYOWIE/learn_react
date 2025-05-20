import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  headers: { Accept: "application/json" },
});

// auth
export const loginService = async (data, callback) => {
  try {
    const res = await api.post("https://fakestoreapi.com/auth/login", data);
    callback(true, res.data.token);
  } catch (error) {
    callback(false, error);
  }
};

export const getUser = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};


// product
export const getProducts = async () => {
  try {
    const res = await api.get("https://fakestoreapi.com/products");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getDetailProduct = async (id, callback) => {
    try {
        const res = await api.get(`https://fakestoreapi.com/products/${id}`)
        callback(true, res.data)
    } catch(error) {
        callback(false, error)
    }
}
