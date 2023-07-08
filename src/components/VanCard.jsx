import { Link } from "react-router-dom";

const VanCard = ({ van, searchParams, typeFilter }) => {
  return (
    <Link
      to={`${van?.id}`}
      state={{ search: searchParams.toString(), type: typeFilter }}
    >
      <div className="font-medium">
        <img className="rounded-md" src={van?.imageUrl} alt="Image of van" />
        <div className="flex justify-between my-4">
          <h2 className="text-base md:text-xl">{van?.name}</h2>
          <p>${van?.price}/day</p>
        </div>
        <span
          className={`bg-${van?.color} p-2 rounded-md text-primary font-medium`}
        >
          {van?.type}
        </span>
      </div>
    </Link>
  );
};

export default VanCard;
