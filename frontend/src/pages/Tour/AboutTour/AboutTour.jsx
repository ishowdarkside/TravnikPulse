/* eslint-disable react/prop-types */
import { TbMessage2Minus } from "react-icons/tb";
// SCSS
import styles from "./AboutTour.module.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { TbTimeDuration45 } from "react-icons/tb";

import { CiLocationOn } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import ReviewComponent from "../ReviewComponent/ReviewComponent";

export default function AboutTour({ data, setShowReview, user }) {
  const navigate = useNavigate();

  const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const avgRating =
    data.ratings.map((e) => e.value).reduce((prev, curr) => prev + curr, 0) /
    data.ratings.length;

  const isExpired = new Date(data.date).getTime() < new Date().getTime();

  return (
    <>
      <div className={styles.details}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className={styles.filters}>
          <p className={styles.flex}>
            <AiOutlineCalendar /> {formattedDate}{" "}
            {isExpired && <span>EXPIRED</span>}
          </p>
          <p className={styles.flex}>
            <AiOutlineClockCircle /> {data.time}
          </p>
          <p className={styles.flex}>
            <TbTimeDuration45 /> {data.duration} min
          </p>
          <Link className={styles.flex}>
            <CiLocationOn /> View location on map
          </Link>
          <p className={styles.flex}>
            <PiMoneyLight /> {data.price}
            {data.price !== "FREE" && "KM"}
          </p>
          {data.ratings.length > 0 && (
            <span className={styles.flex}>
              <AiOutlineStar />
              {avgRating}
            </span>
          )}
        </div>
        {data.reviews.length > 0 && (
          <div className={styles.reviewsWrapper}>
            {data.reviews.map((review) => (
              <ReviewComponent review={review} key={review._id} tour={data} />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => {
          // If user is not logged
          if (user === "Unauthorized") return navigate("/app/login");
          // When user is logged in
          setShowReview((prevState) => !prevState);
        }}
      >
        <TbMessage2Minus />
        Leave a review
      </button>
    </>
  );
}
