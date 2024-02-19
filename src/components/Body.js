import swiggyResList from "../utils/mockData2";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const Body = () => {
  let swiggyList = {};
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    // console.log('use effect called')
    fetchData();
  },[]);

  fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0076578&lng=75.5626039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.zomato.com/webroutes/getPage?page_url=/mumbai/restaurants?place_name=Veermata+Jijabai+Technological+Institute%2C+Matunga%2C+Mumbai&dishv2_id=35798&location=&isMobile=0"
    );
    const json = await data.json();
    // console.log(json)
    swiggyList = json.page_data.sections.SECTION_SEARCH_RESULT
    setRestroList(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    setFilteredRestro(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
  };

  const onlineStatus = useNetworkStatus();
  // console.log("here: ", onlineStatus)
  if(onlineStatus === "false"){
    return(
      <h2>Oppps....Seems your network is disconneted. Please check your internet connection once....</h2>
    )
  }

  return restroList.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filer-container flex m-2 p-2">
        <div className="">
          <input
            type="text"
            className="form-control border-black  border-solid border-2 rounded-sm mr-2 focus:outline-none placeholder:text-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="p-1 mx-2 rounded-md font-medium bg-gray-400"
            onClick={() => {
              // console.log(searchText);
              const searchRes = restroList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestro(searchRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="above-4-stars"
          onClick={() => {
            // fetchData();
            setRestroList(
              restroList.filter((x) => x.info.rating.rating_text > 4)
            );
          }}
        >
          Above 4 stars
        </button>

        {/* <button className="above-3.5-stars" onClick={()=>{
          setRestroList(restroList.filter(x => x.info.rating.rating_text > 3.5))
        }}>Above 3.5 stars</button>

        <button className="above-3-stars" onClick={()=>{
          setRestroList(restroList.filter(x => x.info.rating.rating_text > 3))
        }}>Above 3 stars</button>

        <button className="Reset" onClick={()=>{
          // setRestroList(swiggyList)
          fetchData();
        }}>Reset Data</button> */}
      </div>
      <div className="flex flex-wrap">
        {filteredRestro.map((restro) => (
          
          (restro.info?.resId)?<Link to={"/restaurant/" + restro.cardAction.clickUrl.split('/')} key={restro.info?.resId}><ResCard  resData={restro} /></Link>:<></>
          
        ))}
        {/* {swiggyResList.page_data.sections.SECTION_SEARCH_RESULT.map((restro) => (
          <ResCard key={restro.info.resId} resData={restro} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
