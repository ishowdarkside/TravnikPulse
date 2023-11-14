import { useRef, useState } from "react";
import { useMapContext } from "../../../context/MapContext";
import { FaTimes } from "react-icons/fa";
import styles from "./MapFilter.module.scss";
import { useQueryClient } from "@tanstack/react-query";

export default function MapFilter() {
  const [radiusModal, setRadiusModal] = useState(false);
  const { setActiveFilter, activeFilter, tourLocation, setRadius } =
    useMapContext();
  const radiusInputRef = useRef(null);
  const queryClient = useQueryClient();
  return (
    tourLocation === null && (
      <>
        <section className={styles.mapFilter}>
          <div
            className={
              activeFilter === "all"
                ? `${styles.filter} : ${styles.active}`
                : styles.filter
            }
            onClick={() => {
              setRadiusModal(false);
              setActiveFilter("all")
            }}
          >
            All
          </div>
          <div
            className={
              activeFilter === "radius"
                ? `${styles.filter} : ${styles.active}`
                : styles.filter
            }
            onClick={() => {
              setActiveFilter("radius");
              setRadiusModal(true);
            }}
          >
            Radius
          </div>
          <div
            className={
              activeFilter === "tours"
                ? `${styles.filter} : ${styles.active}`
                : styles.filter
            }
            onClick={() => {
              setRadiusModal(false)
              setActiveFilter("tours")
            }}
          >
            Events
          </div>
          <div
            className={
              activeFilter === "hotels"
                ? `${styles.filter} : ${styles.active}`
                : styles.filter
            }
            onClick={() => {
              setRadiusModal(false);
              setActiveFilter("hotels")
            }}
          >
            Hotels
          </div>
          <div
            className={
              activeFilter === "shops"
                ? `${styles.filter} : ${styles.active}`
                : styles.filter
            }
            onClick={() => {
              setRadiusModal(false)
              setActiveFilter("shops")
            }}
          >
            Shops
          </div>
        </section>
        {radiusModal && (
          <div className={styles.radiusModal}>
            <input
              type="number"
              ref={radiusInputRef}
              placeholder="Enter radius in km"
            />
            <FaTimes
              onClick={() => {
                setActiveFilter("all");
                setRadiusModal(false);
              }}
            />
            <button
              onClick={() => {
                setRadius(radiusInputRef.current.value);
                setRadiusModal(false);
                // Set radius in localstorage
                localStorage.setItem(
                  "radius",
                  JSON.parse(radiusInputRef.current.value)
                );
                queryClient.invalidateQueries(["RadiusTours", "RadiusShops"]);
              }}
            >
              Set
            </button>
          </div>
        )}
      </>
    )
  );
}
