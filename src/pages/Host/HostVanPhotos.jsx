import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { vanDetails } = useOutletContext();
  return <img src={vanDetails.imageUrl} className="w-28" />;
};

export default HostVanPhotos;
