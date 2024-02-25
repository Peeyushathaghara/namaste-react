import { useDispatch, useSelector } from "react-redux";
import RestaurantItems from "./RestaurantItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

const selectedItems = useSelector((store)=>store.cart.items)
const dispatch = useDispatch();
// console.log(selectedItems)
    return(
        <div className="text-center">
            <div className="my-4 p-4 w-6/12 mx-auto flex justify-between items-center">
                <span className="font-bold text-xl">My Cart</span>
                <button className="border border-solid border-black p-2 text-sm  hover:bg-gray-800 hover:text-white" onClick={()=>{dispatch(clearCart())}}
                >Clear Cart</button>
            </div>
            {selectedItems.length == 0 && <p className="text-lg">Your cart is empty. Please add some items. </p>}
            {selectedItems.map((list,index)=> <RestaurantItems key={index} data={list} />)}
        </div>
    )
}

export default Cart;