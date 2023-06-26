import { Link } from "react-router-dom";

const VanCard = ({ van }) => {
  let buttonColor = "";

  if (van.type === "simple") {
    buttonColor = "bg-orange";
  } else if (van.type === "luxury") {
    buttonColor = "bg-black";
  } else {
    buttonColor = "bg-green";
  }

  return (
    <Link to={`/van/${van.id}`}>
      <div className="font-medium">
        <img className="rounded-md" src={van.imageUrl} alt="Image of van" />
        <div className="flex justify-between my-4">
          <h2 className="text-base md:text-xl">{van.name}</h2>
          <p>${van.price}/day</p>
        </div>
        <span
          className={`${buttonColor} p-2 rounded-md text-primary font-medium`}
        >
          {van.type}
        </span>
      </div>
    </Link>
  );
};

export default VanCard;
