import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vanDetails } = useOutletContext();
  return (
    <section className="font-medium md:text-lg flex flex-col gap-4 mt-6">
      <h4>
        Name: <span className="font-normal">{vanDetails.name}</span>
      </h4>
      <h4>
        Category: <span className="font-normal">{vanDetails.type}</span>
      </h4>
      <h4>
        Description:{" "}
        <span className="font-normal">{vanDetails.description}</span>
      </h4>
      <h4>
        Visibility: <span className="font-normal">Public</span>
      </h4>
    </section>
  );
};

export default HostVanInfo;
