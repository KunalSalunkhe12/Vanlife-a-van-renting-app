import { Link } from "react-router-dom";
import IntroPage from "../assets/intro-page.jpg";

const Home = () => {
  return (
    <main>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${IntroPage})` }}
      >
        <div className="sm:w-2/3 md:w-1/2 p-6 flex flex-col gap-12 backdrop-blur-sm">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            You got the travel plans, we got the travel vans.
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-white">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </h2>
          <button className="bg-orange text-white font-medium p-2 md:text-lg rounded-sm">
            <Link to="/vans">Find your van</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
