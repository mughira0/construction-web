import StarRatings from "react-star-ratings";

function StarRating({
  rating = 4.5,
  starDimension = "40px",
  starSpacing = "15px",
  color = "#FFD700",
}) {
  return (
    <StarRatings
      color={color}
      starDimension={starDimension}
      starSpacing={starSpacing}
      rating={rating}
    />
  );
}

export default StarRating;
