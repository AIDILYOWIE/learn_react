import { Table } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../Context/TotalPriceContext";

const TableCart = ({ dataProduk }) => {
  const cart = useSelector((state) => state.cart.data);
  const totalPriceRef = useRef(null);
  const dispatch = useTotalPriceDispatch();
  const { totalPrice } = useTotalPrice();

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = dataProduk.find((product) => product.id == item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          totalPrice: sum,
        },
      });
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
