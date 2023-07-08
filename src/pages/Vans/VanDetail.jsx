import { getVans } from "../../api";
import { Link, useLocation, useLoaderData } from "react-router-dom";

export const loader = ({ params }) => {
  return getVans(params.id);
};
const VanDetail = () => {
  const location = useLocation();
  const vanDetails = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="bg-primary px-4 py-10 md:py-16">
      <div className="w-full sm:w-1/2 md:w-1/3 mx-auto p-4">
        <Link to={`..?${search}`} relative="path">
          <p className="">← Back to {type} vans</p>
        </Link>

        <img
          className="my-6 mx-auto rounded-lg"
          src={vanDetails.imageUrl}
          alt=""
        />
        <span
          className={`bg-${vanDetails?.color} p-2 rounded-md text-primary font-medium`}
        >
          {vanDetails.type}
        </span>
        <div className="flex flex-col gap-4 my-4">
          <h2 className="text-xl md:text-2xl font-bold">{vanDetails.name}</h2>
          <p className="text-lg md:text-xl font-semibold">
            ${vanDetails.price}/day
          </p>
          <p className="text-sm md:text-lg">{vanDetails.description}</p>
          <button className="bg-orange text-white font-medium p-2 md:text-lg rounded-sm">
            Rent this Van
          </button>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
