import { useState, useEffect } from "react";
import VanCard from "../../components/VanCard";

const Vans = () => {
  const [vans, setVans] = useState(null);

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

  return (
    <div className="bg-primary px-4 py-10 md:py-16">
      <div className="sm:w-4/5 md:w-3/5 mx-auto p-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore our van options
        </h1>
        <div className="flex flex-wrap justify-between items-center my-10 gap-2">
          <ul className="flex gap-3 md:gap-10 text-base md:text-lg text-primary font-medium">
            <li className="bg-orange p-2 rounded-md cursor-pointer">Simple</li>
            <li className="bg-black p-2 rounded-md cursor-pointer">Luxury</li>
            <li className="bg-green p-2 rounded-md cursor-pointer">Rugged</li>
          </ul>
          <p className="text-sm md:text-lg cursor-pointer text-center">
            Clear filters
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14">
          {vans ? (
            vans.map((van) => <VanCard key={van.id} van={van} />)
          ) : (
            <h1 className="min-h-screen">Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vans;
