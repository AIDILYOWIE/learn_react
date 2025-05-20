import { useState } from "react";
import "../../css/product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router";

export const CardProducts = ({ children, id }) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <Link to={`/detailProduct/${id}`}>
      <div
        className="p-3 flex flex-col gap-3 cursor-pointer"
        id="product-card"
        onMouseEnter={(e) => setIsCardHover(true)}
        onMouseLeave={(e) => setIsCardHover(!isCardHover)}
      >
        {children}
      </div>
    </Link>
  );
};

const Header = ({ img }) => {
  return (
    <div id="product-header" className="w-full overflow-hidden">
      <img
        src="https://img.freepik.com/premium-photo/iced-coffee-with-milk-glass-table-cafe_76440-4537.jpg?ga=GA1.1.1787885674.1746078993&semt=ais_hybrid&w=740"
        width="100%"
        height="100%"
      />
      <div className="img-lens" style={{ display: "none" }} />
    </div>
  );
};

const Body = ({ title, price, owner, isCardHover, handleAddToCart, id }) => {
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
              onClick={() => handleAddToCart(id)}
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
