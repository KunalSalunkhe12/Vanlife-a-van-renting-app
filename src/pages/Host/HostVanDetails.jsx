import { useState, useEffect } from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    const getHostVanDetails = async () => {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        const json = await response.json();
        setVanDetails(json.vans[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getHostVanDetails();
  }, [id]);

  return (
    <section className="bg-primary p-4 min-h-screen">
      {!vanDetails ? (
        <h1 className="text-center py-10">Loading...</h1>
      ) : (
        <div className="w-full sm:w-1/2 md:w-1/3 mx-auto py-6">
          <Link to=".." relative="path">
            ← Back to all vans
          </Link>
          <div className="bg-white p-4 rounded-md my-6">
            <div className="flex gap-4 items-center">
              <img
                className="w-36 md:w-48 rounded-md"
                src={vanDetails?.imageUrl}
              />
              <div>
                <i
                  className={`bg-${vanDetails?.color} p-1 rounded-md text-primary font-medium`}
                >
                  {vanDetails?.type}
                </i>
                <h3 className="my-2 text-xl md:text-2xl font-bold">
                  {vanDetails?.name}
                </h3>
                <h4 className="text-xl font-medium">
                  ${vanDetails?.price}/day
                </h4>
              </div>
            </div>
            <nav className="flex gap-4 my-6 font-medium md:text-lg">
              <NavLink
                to="."
                end
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : null
                }
              >
                Details
              </NavLink>

              <NavLink
                to="pricing"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : null
                }
              >
                Pricing
              </NavLink>

              <NavLink
                to="photos"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : null
                }
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={{ vanDetails }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HostVanDetails;
