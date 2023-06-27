import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  if (!vanDetails) {
    return <h1>Loading...</h1>;
  }

  console.log(vanDetails);
  return (
    <section className="bg-primary">
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={vanDetails?.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${vanDetails?.type}`}>
              {vanDetails?.type}
            </i>
            <h3>{vanDetails?.name}</h3>
            <h4>${vanDetails?.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostVanDetails;
