import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="res-container">
        {resList.map((restro) => (
          <ResCard key={restro.info.resId} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
