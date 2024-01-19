import resList from "../utils/mockData";
import { useState } from "react";
import ResCard from "./ResCard";




const Body = () => {
  const [restroList, setRestroList] = useState(resList)
  
  return (
    <div className="body">
      <div className="filer-container">
        <button className="above-4-stars" onClick={()=>{
          const fourRatedFilter = resList.filter(x => x.info.rating.rating_text > 4)
          setRestroList(fourRatedFilter)
        }}>Above 4 stars</button>

        <button className="above-3.5-stars" onClick={()=>{
          const aboveThreeRatedFilter = resList.filter(x => x.info.rating.rating_text > 3.5)
          setRestroList(aboveThreeRatedFilter)
        }}>Above 3.5 stars</button>

        <button className="above-3-stars" onClick={()=>{
          const threeRatedFilter = resList.filter(x => x.info.rating.rating_text > 3)
          setRestroList(threeRatedFilter)
        }}>Above 3 stars</button>

        <button className="Reset" onClick={()=>{
          setRestroList(resList)
        }}>Reset Data</button>
      </div>
      <div className="res-container">
        {restroList.map((restro) => (
          <ResCard key={restro.info.resId} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
