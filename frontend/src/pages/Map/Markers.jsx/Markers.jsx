/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import styles from "./Markers.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidChevronDown } from "react-icons/bi";
import { MdDirections } from "react-icons/md";

import { GiSandsOfTime } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { TfiMoney } from "react-icons/tfi";
import { FaWalking } from "react-icons/fa";
import { useMapContext } from "../../../context/MapContext";

export default function Markers({ tour, setTourLocation }) {
  const [showModal, setShowModal] = useState(false);
  const { travelTime } = useMapContext();
  const map = useMap();

  const customIcon = new L.Icon({
    iconUrl: `/${tour.coverImg}`,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });

  const hotelIcon = new L.Icon({
    iconUrl: tour.pictures ? tour.pictures[0] : `/${tour.coverImg}`,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });

  const handleMarkerClick = () => {
    setShowModal((prevState) => !prevState);
  };

  // Disable map dragging when the modal is open
  useEffect(() => {
    if (showModal) {
      map.dragging.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
    } else {
      map.dragging.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
    }
  }, [showModal, map]);

  const tourConvertedToSeconds = tour.duration * 60;
  const travelConvertedToSeconds = travelTime * 60;
  const getTourAndTravelTime =
    Math.floor(tourConvertedToSeconds) + Math.floor(travelConvertedToSeconds);
  const hours = Math.floor(getTourAndTravelTime / 3600);
  const remainingSeconds = getTourAndTravelTime % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let totalTime = `${formattedHours}:${formattedMinutes} h`;

  return (
    <>
      {tour.coverImg && (
        <Marker
          id={styles.marker}
          eventHandlers={{ click: () => handleMarkerClick() }}
          position={[
            tour.location.coordinates[0],
            tour.location.coordinates[1],
          ]}
          icon={customIcon}
        ></Marker>
      )}
      {tour.pictures && (
        <Marker
          id={styles.marker}
          eventHandlers={{ click: () => handleMarkerClick() }}
          position={[
            tour.location.coordinates[0],
            tour.location.coordinates[1],
          ]}
          icon={hotelIcon}
        ></Marker>
      )}

      {showModal &&
        ReactDOM.createPortal(
          <div className={styles.customModal}>
            <div className={styles.mainSection}>
              <span
                className={styles.closeModal}
                onClick={() => setShowModal(false)}
              >
                <BiSolidChevronDown />
              </span>
              <div className={styles.content}>
                <h3>{tour.name}</h3>
              </div>
              <div className={styles.btns}>
                <button
                  onClick={() => {
                    // Hide modal
                    setShowModal(false);
                    // Set coordinates
                    setTourLocation(tour.location.coordinates);
                  }}
                >
                  <MdDirections />
                  Directions
                </button>
                {tour?.type !== "hotels" && !tour.shopName && (
                  <Link to={`/app/tour/${tour._id}`}>See more</Link>
                )}
              </div>
              <img
                src={
                  tour?.type !== "hotels"
                    ? `http://127.0.1:8000/${tour.coverImg}`
                    : tour.pictures[0]
                }
                className={styles.img}
                alt=""
              />
              <div className={styles.navigation}>
                <ul>
                  <li>Overview</li>
                </ul>
              </div>
            </div>
            <div className={styles.navContent}>
              <ul>
                <li>
                  <FaWalking />
                  {travelTime
                    ? tour.duration === undefined
                      ? travelTime > 60
                        ? Math.floor(travelTime / 60) + " h"
                        : travelTime + " min"
                      : totalTime
                    : "Start route to calculate"}
                </li>
                {tour.type !== "hotels" && !tour.shopName && (
                  <>
                    <li>
                      <IoMdTime />
                      {tour.time}
                    </li>
                    <li>
                      <GiSandsOfTime />
                      {Math.floor(tour.duration / 60)} hours
                    </li>
                    <li>
                      <TfiMoney />
                      {tour.price === "FREE" ? tour.price : tour.price + " KM"}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
