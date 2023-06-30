import { useOutletContext } from "react-router-dom";
const HostVanPricing = () => {
  const { vanDetails } = useOutletContext();
  return (
    <h3 className="text-lg font-medium">
      ${vanDetails.price}
      <span>/day</span>
    </h3>
  );
};

export default HostVanPricing;
