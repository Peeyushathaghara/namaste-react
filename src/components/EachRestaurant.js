import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
// import { EACH_RESTRO_URL } from "../utils/constants";
import useZomatoRestro from "../utils/useZomatoRestro";
import RestaurantItems from "./RestaurantItems";

const EachRestaurant = () => {
  // const [resDetails, setResDetails] = useState(null);
  const { resId } = useParams();

  const getUrl = () => {
    let text = resId.split(",");
    const url = "/" + text[1] + "/" + text[2] + "/";
    return url;
  };

  const resDetails = useZomatoRestro(getUrl());
  // console.log(resDetails?.page_data?.sections?.SECTION_TOP_TAGS)
  // useEffect (()=>{
  //     fetchData();
  // },[])

  // const fetchData = async() =>{
  //     const data = await fetch( EACH_RESTRO_URL + getUrl())

  //     const json = await data.json();
  //     console.log(json);
  //     setResDetails(json)
  // }

  if (resDetails === null) {
    return <Shimer />;
  }

  const { name, res_id, cuisine_string } =
    resDetails?.page_data?.sections?.SECTION_BASIC_INFO;
  const { TOP_DISHES } = resDetails?.page_data?.sections?.SECTION_RES_DETAILS;
  const SECTION_TOP_TAGS = resDetails?.page_data?.sections?.SECTION_TOP_TAGS;

  return (
    <div className="text-center">
      {/* <h1>{name}</h1>
            <h5>{resDetails.page_data.sections.SECTION_RES_CONTACT.address}</h5>
            
            <h3>Most Awaited Dishes</h3>
            <p>{TOP_DISHES.description}</p> */}
      <p className="my-6 text-2xl font-bold">{name}</p>
      <h4 className="my-4 text-xl font-semibold">{cuisine_string}</h4>
      {SECTION_TOP_TAGS.map((list,index)=> <RestaurantItems key={index} data={list} />)}
      
    </div>
  );
};

export default EachRestaurant;
