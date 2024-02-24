const ResCard = (props) => {
  // console.log(props)
  const { resData } = props;
  const { name, image, rating, cuisine } = resData?.info;
  const { deliveryTime } = resData?.order;
  const cuisineArr = cuisine.map((data) => data.name);
  return (
    <div className="w-[300px] bg-gray-100 m-3 p-3 h-[400px] rounded-lg hover:bg-gray-300">
      <img
        alt="res-logo"
        className="rounded-lg h-[50%] w-[100%]"
        src={image.url}
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4>{cuisineArr.join(", ")}</h4>
      <div className="flex justify-between">
        <span className="font-semibold">{rating.rating_text} stars</span>
        <span className="font-semibold"> {rating.rating_subtitle}</span>
        <span className="font-semibold"> {rating.votes} votes</span>
      </div>
      <h6>{deliveryTime} ETA</h6>
    </div>
  );
};

export const withPromoteLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black
        -500 text-white m-2 p-2 rounded-lg">Promoted</label>
        <ResCard {...props}/>
      </div>
    );
  };
};

export default ResCard;
