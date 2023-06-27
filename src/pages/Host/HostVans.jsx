import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    const getHostVans = async () => {
      try {
        const response = await fetch("/api/host/vans");
        const json = await response.json();
        setHostVans(json.vans);
      } catch (error) {
        console.log(error);
      }
    };
    getHostVans();
  }, []);

  const hostVansEls =
    hostVans &&
    hostVans.map((van) => (
      <Link to={`${van.id}`} key={van.id} className="">
        <div className="flex items-center bg-white p-2 rounded-md mt-4 gap-6">
          <img
            className="w-32 rounded-md"
            src={van.imageUrl}
            alt={`Photo of ${van.name}`}
          />
          <div className="text-lg">
            <h3 className="font-semibold">{van.name}</h3>
            <p className="font-medium">${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));

  return (
    <section className="bg-primary min-h-screen">
      <div className="sm:w-4/5 md:w-3/5 mx-auto p-4">
        <h1 className="text-base md:text-lg font-medium my-6">
          Your listed vans
        </h1>
        {hostVans ? <section>{hostVansEls}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
};

export default HostVans;
