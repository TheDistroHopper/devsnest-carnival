const Card = ({ food, calorie }) => {
  return (
    <div className="Card">
      <h1>{food}</h1>
      <h2>You have consumed {calorie} calories today</h2>
    </div>
  );
};

export default Card;
