import { useState, useEffect } from "react";
import VanCard from "../../components/VanCard";
import { useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const getAllVans = async () => {
    try {
      const response = await fetch("/api/vans");
      const json = await response.json();
      setVans(json.vans);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className="bg-primary px-4 py-10 md:py-16">
      <div className="sm:w-4/5 md:w-3/5 mx-auto p-4 min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore our van options
        </h1>
        <div className="flex flex-wrap justify-between items-center my-10 gap-2">
          <div className="flex gap-3 md:gap-10 text-base md:text-lg text-primary font-medium">
            <button
              className={`${
                typeFilter === "simple"
                  ? "bg-orange"
                  : "bg-secondary text-black"
              } p-2 rounded-md cursor-pointer hover:bg-orange hover:text-white`}
              onClick={() => setSearchParams({ type: "simple" })}
            >
              Simple
            </button>
            <button
              className={`${
                typeFilter === "luxury" ? "bg-black" : "bg-secondary text-black"
              } p-2 rounded-md cursor-pointer hover:bg-black hover:text-white`}
              onClick={() => setSearchParams({ type: "luxury" })}
            >
              Luxury
            </button>
            <button
              className={`${
                typeFilter === "rugged" ? "bg-green" : "bg-secondary text-black"
              } p-2 rounded-md cursor-pointer hover:bg-green hover:text-white`}
              onClick={() => setSearchParams({ type: "rugged" })}
            >
              Rugged
            </button>
          </div>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="text-sm md:text-lg cursor-pointer text-center"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14">
          {vans.length > 0 ? (
            displayedVans.length > 0 ? (
              displayedVans.map((van) => <VanCard key={van.id} van={van} />)
            ) : (
              <p className="text-lg font-medium">No vans to show</p>
            )
          ) : (
            <p className="min-h-screen">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vans;
