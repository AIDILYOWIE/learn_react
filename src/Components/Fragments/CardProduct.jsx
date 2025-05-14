import { useState } from "react";
import "../../css/product.css";

export const CardProducts = ({ title, price, owner }) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <div
      className="p-3 flex flex-col gap-3 cursor-pointer"
      id="product-card"
      onMouseEnter={(e) => setIsCardHover(true)}
      onMouseLeave={(e) => setIsCardHover(!isCardHover)}
    >
      <Header />

      <Body title={title} price={price} owner={owner} isCardHover={isCardHover}/>
    </div>
  );
};

const Header = () => {
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

const Body = ({title, price, owner, isCardHover}) => {
  return (
    <>
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
    </>
  );
};


CardProducts.Header = Header
CardProducts.Body = Body


