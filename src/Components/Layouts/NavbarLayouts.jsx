import { useEffect, useState } from "react";
import "../../css/navbar.css";
import { getUser } from "../../services/api";
import { useLogin } from "../../hooks/useLogin";

const Navbar = ({ children }) => {
  const username = useLogin()

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token"); //localStorage.removeItem digunakan untuk menghapus item yang ada di local storage
    return (window.location.href = "/login");
  };

  

  return (
    <>
      <div className="navbar bg-blue-600">
        <div className=" cursor-default">
          <h4 className="text-white font-medium">{username}</h4>
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
