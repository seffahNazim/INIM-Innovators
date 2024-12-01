import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axiosClient from "../../axios-client";

const Tracking = () => {
  const trackingRef = useRef();
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(false);

  const getTracking = async (e) => {
    e.preventDefault();
    const package_number = trackingRef.current.value;
    try {
      const response = await axiosClient.get(`/tracking/${package_number}`);
      if (response.status == 200) {
        setPosition(response.data.success);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setPosition({});
      console.error("Erreur de connexion:", error.response || error.message);
    }
  };

  return (
    <div className="md:w-screen md:h-screen">
      <form method="get" onSubmit={getTracking}>
        <Link
          to={"/Home"}
          className=" mt-10 ml-10 text-white bg-yellow-400 hover:bg-yellow-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center me-2 "
        >
          <IoArrowBack className="w-full h-full " />
        </Link>
        <div className=" px-32">
          <div className="flex flex-col text-center justify-center gap-5 mt-26 bg-gray-100 py-40 rounded-2xl ">
            <div className=" grid justify-center">
              <span className=" font-semibold text-5xl text-center">
                TRAKING
              </span>
              <span className="mt-8 text-2xl text-center">
                Afficher les details des Colis
              </span>
              <input
                type="text"
                ref={trackingRef}
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none focus:ring-1"
                placeholder="Search By TrackCode ..."
              />
              <div className=" items-center">
                <button
                  type="submit"
                  className=" bg-yellow-400 px-16 mt-8 p-2 rounded-2xl text-white "
                >
                  Track
                </button>
              </div>
            </div>
            {position && (error ? (
              <div className="text-red-500 mt-4">numero du colis n'existe pas</div> 
            ) : (
              <div className="flex flex-col mt-4">
                <span>Flag : {position.package}</span>
                <span>Le type de livraison : {position.delivery_type}</span>
                <span>Le code postal actuel : {position.progress_post_id}</span>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Tracking;
