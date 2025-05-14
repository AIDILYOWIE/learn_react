import '../css/product.css'
import { CardProducts } from "../Components/Fragments/CardProduct"

export const Product = () => {
    return (
        <div className="grid gap-5 fragment-product-container p-5">
            <CardProducts title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
            <CardProducts title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
            <CardProducts title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
            <CardProducts title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
        </div>
    )
}


