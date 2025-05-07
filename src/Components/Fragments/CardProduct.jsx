import { Products } from "../../Pages/product"
import '../../css/product.css'

export const CardProduct = () => {
    return (
        <div className="grid gap-5 fragment-product-container p-5">
            <Products title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
            <Products title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
            <Products title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
            <Products title={"Mecanical Keyboard Exclusive"} owner={"Meca Tech"} price={"Rp 500.0000"}/>
        </div>
    )
}