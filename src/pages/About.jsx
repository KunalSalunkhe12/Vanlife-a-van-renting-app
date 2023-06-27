import aboutImage from "../assets/about-image.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-primary">
      <img
        src={aboutImage}
        className="h-96 w-full object-cover"
        alt="about van image"
      />
      <div className="md:w-1/2 mx-auto px-4 py-8 md:py-16 flex flex-col items-center gap-8 md:gap-16">
        <h2 className="text-xl md:text-4xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>{" "}
        <p className="text-sm md:text-xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="bg-secondary w-full p-6 md:p-10 rounded-md">
          <h3 className="text-lg md:text-3xl font-bold">
            Your destination is waiting. Your van is ready.
          </h3>
          <button className="bg-black text-white py-2 px-4 rounded-md mt-6 text-base md:text-lg font-medium">
            <Link to="/vans">Explore our vans</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
