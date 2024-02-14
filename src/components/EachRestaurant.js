import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
// import { EACH_RESTRO_URL } from "../utils/constants";
import useZomatoRestro from "../utils/useZomatoRestro";

const EachRestaurant = () =>{
    // const [resDetails, setResDetails] = useState(null);
    const {resId} = useParams();
    

    const getUrl = () =>{
        let text = resId.split(',')
        const url = '/'+ text[1] + '/' + text[2] + '/'
        return url;
    }
    
    const resDetails = useZomatoRestro(getUrl())

    // useEffect (()=>{
    //     fetchData();
    // },[])

    
    // const fetchData = async() =>{
    //     const data = await fetch( EACH_RESTRO_URL + getUrl())

    //     const json = await data.json();
    //     console.log(json);
    //     setResDetails(json)
    // }
    
    if (resDetails === null){
        return <Shimer />
    }
    
    const {name, res_id, cuisine_string} = resDetails?.page_data?.sections?.SECTION_BASIC_INFO
    const { TOP_DISHES } = resDetails?.page_data?.sections?.SECTION_RES_DETAILS


    return (
        <div>
            <h1>{name}</h1>
            <h5>{resDetails.page_data.sections.SECTION_RES_CONTACT.address}</h5>
            <h4>Cuisines Available : {cuisine_string}</h4>
            <h3>Most Awaited Dishes</h3>
            <p>{TOP_DISHES.description}</p>
        </div>
    )
}

export default EachRestaurant;