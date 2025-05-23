import { Table } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";


const TableCart = ({ dataProduk }) => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = dataProduk.find((product) => product.id == item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, dataProduk]);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className="table-auto border-separate border-spacing-x-5">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {cart.map((item, i) => {
          const product = dataProduk.find((product) => product.id == item.id);
          return (
            <tr key={i}>
              <td>{product.title}</td>
              <td>
                Rp{" "}
                {product.price.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </td>
              <td>{item.qty}</td>
              <td>
                Rp{" "}
                {(item.qty * product.price).toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </td>
            </tr>
          );
        })}
        <tr ref={totalPriceRef}>
          <td className=" font-bold text-start" colSpan={3}>
            Total Price
          </td>
          <td>
            Rp{" "}
            {totalPrice.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
