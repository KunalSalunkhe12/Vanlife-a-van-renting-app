import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <div className="pt-20 px-6 md:px-16 font-medium text-base md:text-lg bg-primary flex gap-6">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-black" : null
          }
          to="."
          end
        >
          Your vans
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
