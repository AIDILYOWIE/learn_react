import { useState } from "react";
import "../../css/product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

export const CardProducts = ({ children}) => {

  return (
    <div
      className="p-3 flex flex-col gap-3"
      id="product-card"
    >
      {children}
    </div>
  );
};

const Header = ({ id }) => {
  return (
    <Link to={`/detailProduct/${id}`}>
      <div id="product-header" className="w-full overflow-hidden cursor-pointer">
        <img
          src="https://img.freepik.com/premium-photo/iced-coffee-with-milk-glass-table-cafe_76440-4537.jpg?ga=GA1.1.1787885674.1746078993&semt=ais_hybrid&w=740"
          width="100%"
          height="100%"
        />
      </div>
    </Link>
  );
};

const Body = ({ title, price, owner, isCardHover, id }) => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <h3 id="product-title" className=" font-bold text-stone-900">
          {title}
        </h3>
        <h6 className="font-light text-sm tracking-wider">{owner}</h6>
        <div className="w-full grid grid-cols-3">
          <div className="w-full flex text-[15px] col-span-2">
            {isCardHover ? (
              <button
                id="product-btn"
                className=" px-5 bg-blue-600 text-white font-normal py-1 flex"
              >
                <span className="font-normal">
                  Rp{" "}
                  {price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </span>
              </button>
            ) : (
              <h3 className=" font-bold text-stone-900">
                Rp{" "}
                {price.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}{" "}
              </h3>
            )}
          </div>

          <div className="flex justify-end w-full">
            <button
              className=" cursor-pointer"
              onClick={() =>  dispatch(addToCart({ id: id, qty: 1 }))}
            >
              <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
