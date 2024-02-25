import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantItems = ({ data }) => {

  const dispatch = useDispatch()

  // console.log(data.title)
  return (
    <div className="bg-gray-200 hover:bg-gray-400 w-6/12 mx-auto shadow-lg my-4 p-4 flex justify-between items-center">
      <span className="text-lg font-medium">{data.title}</span>
      <div>
        <button className="p-2 border border-solid border-black rounded-lg hover:bg-gray-800 hover:text-white text-xs " onClick={()=>{
          dispatch(addItem(data))
        }}>
          Add
        </button>
        <button className="p-2 m-2 border border-solid border-black rounded-lg hover:bg-gray-800 hover:text-white text-xs" onClick={()=>{
          dispatch(removeItem())
        }}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default RestaurantItems;
