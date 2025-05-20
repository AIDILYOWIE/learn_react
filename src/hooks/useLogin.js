import { useState, useEffect } from "react";
import { getUser } from "../services/api";

// custom hooks digunakan untuk fungsi yang sering digunakan, jadi tidak perlu mendifiniskan ulang di setiap komponen

export const useLogin = () => {
    const [user, setUser] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("token"); // variable email digunakan untuk mengambil email yang sudah di set di localstorage
    // pengkondisian ini digunakan untuk mengecek email jika false
    if (!token) {
      return (window.location.href = "/login"); // jika tidak ada value pada variable email berisi null / false
    } else {
      setUser(getUser(token));
    }
  }, []);

  return user
};


