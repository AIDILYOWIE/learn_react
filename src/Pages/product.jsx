import { useState } from "react";
import { Button } from "../Components/Elements/Button/Index";
import "../css/product.css";
import { LensLogic } from "../features/Lens";

export const Products = ({ title, price, owner }) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <div
      className="p-3 flex flex-col gap-3 cursor-pointer"
      id="product-card"
      onMouseEnter={(e) => setIsCardHover(true)}
      onMouseLeave={(e) => setIsCardHover(!isCardHover)}
    >
      <LensLogic
        src={
          "https://img.freepik.com/free-photo/keyboard-transparent-case-white-background-3d-illustration_1057-46062.jpg?ga=GA1.1.1437750118.1746275002&semt=ais_hybrid&w=740"
        }
        width={100}
        height={100}
        
      />
      <div className="w-full flex flex-col">
        <h3 id="product-title" className=" font-bold text-stone-900">
          {title}
        </h3>
        <h6 className="font-light text-sm tracking-wider">{owner}</h6>
        <div className="w-full flex mt-1">
          {isCardHover ? (
            <button
              id="product-btn"
              className="px-5 bg-blue-600 text-white font-normal py-1"
            >
              Buy <span className=" ml-1 font-normal">{price}</span>
            </button>
          ) : (
            <h3 className=" font-bold text-stone-900">{price}</h3>
          )}
        </div>
      </div>
    </div>
  );
};


