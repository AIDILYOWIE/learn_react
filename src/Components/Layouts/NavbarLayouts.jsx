import { useEffect, useState } from "react";
import "../../css/navbar.css";
import { useLogin } from "../../hooks/useLogin";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = ({ children }) => {
  const username = useLogin()

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token"); //localStorage.removeItem digunakan untuk menghapus item yang ada di local storage
    return (window.location.href = "/login");
  };

  const cart = useSelector((state) => state.cart.data)
  console.log(cart)
  

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
        <div className=" relative w-max">
          <ShoppingBagIcon sx={{ color: "white", cursor: "pointer", fontSize: "2em" }}/>
          <Box sx={{ fontWeight: "bold", width: "15px", height: "15px", textAlign: "center", lineHeight: "15px", position: "absolute", bottom: "0", right: "4px", borderRadius: "50px", color: "white", fontSize: "10px"}} className="bg-blue-600">
            {cart.length}
          </Box>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
