import "../css/product.css";
import { CardProducts } from "../Components/Fragments/CardProduct";
import Navbar from "../Components/Layouts/NavbarLayouts";

export const Product = () => {
  const email = localStorage.getItem("email"); // variable email digunakan untuk mengambil email yang sudah di set di localstorage

  // pengkondisian ini digunakan untuk mengecek email jika false
  if (!email) {
    return (window.location.href = "/login"); // jika tidak ada value pada variable email berisi null / false
  }

  return (
    <Navbar>
      <div className="grid gap-5 fragment-product-container p-5">
        <CardProducts
          title={"Mecanical Keyboard Exclusive"}
          owner={"Meca Tech"}
          price={"Rp 500.0000"}
        />
        <CardProducts
          title={"Mecanical Keyboard Exclusive"}
          owner={"Meca Tech"}
          price={"Rp 500.0000"}
        />
        <CardProducts
          title={"Mecanical Keyboard Exclusive"}
          owner={"Meca Tech"}
          price={"Rp 500.0000"}
        />
        <CardProducts
          title={"Mecanical Keyboard Exclusive"}
          owner={"Meca Tech"}
          price={"Rp 500.0000"}
        />
      </div>
    </Navbar>
  );
};
