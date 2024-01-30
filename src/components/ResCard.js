const ResCard = (props) => {
  console.log(props)
  const { resData } = props;
  const { name, image, rating, cuisine } = resData?.info;
  const { deliveryTime } = resData?.order;
  const cuisineArr = cuisine.map((data) => data.name);
  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{cuisineArr.join(", ")}</h4>
      <h5 className="ratings">
        <span>{rating.rating_text} stars</span>
        <span> {rating.rating_subtitle}</span>
        <span> {rating.votes} votes</span>
      </h5>
      <h6>{deliveryTime} ETA</h6>
    </div>
  );
};

export default ResCard;
