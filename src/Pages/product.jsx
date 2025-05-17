import "../css/product.css";
import { CardProducts } from "../Components/Fragments/CardProduct";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { idID } from "@mui/material/locale";
import { data } from "react-router";
import { useState } from "react";

export const Product = () => {
  const [cart, setCart] = useState([
    // useState digunakan untuk menyimpan data, biasanya digunakan untuk data api / data komponen
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id == id)) {  // pengkondisian tersebtu digunakan untuk mencara id yang sama dengan state cart
      setCart( 
        cart.map((cartItem, i) =>
          cartItem.id == id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem  // jika cartItem. id sama dengan param id, maka data lama tetap diset dan  qty akan + 1
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]); // ...cart digunakan untuk menambahkan data yang sebelumnya, jadi data lama tidak ditumpuk oleh data baru
    }
  };

  const dataProduk = [
    {
      id: 1,
      title: "Latte",
      owner: "Recof",
      price: 70000,
    },
    {
      id: 2,
      title: "Expresso",
      owner: "Recof",
      price: 30000,
    },
    {
      id: 3,
      title: "Machiato",
      owner: "Recof",
      price: 50000,
    },
  ];

  return (
    <Navbar>
      <div className="grid grid-cols-2 mt-[8em] gap-5 px-5">
        <div className="grid gap-5 fragment-product-container">
          {dataProduk.map((item, i) => (
            <CardProducts key={i}>
              <CardProducts.Header />
              <CardProducts.Body
                title={item.title}
                owner={item.title}
                price={item.price}
                handleAddToCart={handleAddToCart}
                id={item.id}
              />
            </CardProducts>
          ))}
        </div>
        <div>
          {" "}
          <h1 className="text-3xl text-blue-600 font-bold">card</h1>
          <ul className="mt-5">
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
                  const product = dataProduk.find(
                    (product) => product.id == item.id
                  );
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
              </tbody>
            </table>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};
