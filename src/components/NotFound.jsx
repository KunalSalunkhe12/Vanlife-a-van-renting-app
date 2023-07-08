import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center flex-col gap-4 p-2">
      <h1 className="text-2xl md:text-4xl font-bold  text-center">
        Sorry, the page you were looking for was not found.
      </h1>
      <span className="bg-black text-primary p-3 rounded-md font-medium">
        <Link to="/">Return to Home</Link>
      </span>
    </div>
  );
};

export default NotFound;
