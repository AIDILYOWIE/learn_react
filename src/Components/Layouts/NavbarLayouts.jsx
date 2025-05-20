import { useEffect, useState } from "react";
import "../../css/navbar.css";
import { getUser } from "../../services/api";

const Navbar = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token"); //localStorage.removeItem digunakan untuk menghapus item yang ada di local storage
    return (window.location.href = "/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // variable email digunakan untuk mengambil email yang sudah di set di localstorage

    // pengkondisian ini digunakan untuk mengecek email jika false
    if (!token) {
      return (window.location.href = "/login"); // jika tidak ada value pada variable email berisi null / false
    } else {
      setUser(getUser(token));
    }
  }, []);

  return (
    <>
      <div className="navbar bg-blue-600">
        <div className=" cursor-default">
          <h4 className="text-white font-medium">{user}</h4>
        </div>
        <button
          className=" px-3 py-1 text-1xl text-white bg-black rounded-sm font-bold tracking-[0.05em] cursor-pointer"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      {children}
    </>
  );
};

export default Navbar;
