import swiggyResList from "../utils/mockData2";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimer from "./Shimer";

const Body = () => {
  let swiggyList = {};
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log('use effect called')
    fetchData();
  });

  fetchData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/mumbai/restaurants?place_name=Veermata+Jijabai+Technological+Institute%2C+Matunga%2C+Mumbai&dishv2_id=35798&location=&isMobile=0"
    );
    const json = await data.json();
    // swiggyList = json.page_data.sections.SECTION_SEARCH_RESULT
    setRestroList(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    setFilteredRestro(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
  };

  return restroList.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filer-container">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
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
      <div className="res-container">
        {filteredRestro.map((restro) => (
          (restro.info?.resId)?<ResCard key={restro.info?.resId} resData={restro} />:<></>
          
        ))}
        {/* {swiggyResList.page_data.sections.SECTION_SEARCH_RESULT.map((restro) => (
          <ResCard key={restro.info.resId} resData={restro} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
