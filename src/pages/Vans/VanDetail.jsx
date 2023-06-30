import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    const getVanDetails = async () => {
      try {
        const response = await fetch(`/api/vans/${id}`);
        const json = await response.json();
        setVanDetails(json.vans);
      } catch (error) {
        console.log(error);
      }
    };
    getVanDetails();
  }, [id]);

  return (
    <div className="bg-primary px-4 py-10 md:py-16">
      {vanDetails ? (
        <div className="w-full sm:w-1/2 md:w-1/3 mx-auto p-4">
          <Link to=".." relative="path">
            <p className="">← Back to all vans</p>
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
      ) : (
        <p className="text-center py-10 min-h-screen">Loading...</p>
      )}
    </div>
  );
};

export default VanDetail;
