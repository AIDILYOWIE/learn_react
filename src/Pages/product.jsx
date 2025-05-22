import "../css/product.css";
import { CardProducts } from "../Components/Fragments/CardProduct";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { idID } from "@mui/material/locale";
import { data } from "react-router";
import { useEffect, useRef, useState } from "react";
import TableCart from "../Components/Fragments/TableCart";

export const Product = () => {

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
              <CardProducts.Header id={item.id}/>
              <CardProducts.Body
                title={item.title}
                owner={item.title}
                price={item.price}
                id={item.id}
              />
            </CardProducts>
          ))}
        </div>
        <div>
          {" "}
          <h1 className="text-3xl text-blue-600 font-bold">card</h1>
          <ul className="mt-5">
          <TableCart dataProduk={dataProduk}/>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};
