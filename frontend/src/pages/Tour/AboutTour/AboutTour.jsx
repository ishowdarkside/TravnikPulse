/* eslint-disable react/prop-types */
import { TbMessage2Minus } from "react-icons/tb";
// SCSS
import styles from "./AboutTour.module.scss";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { TbTimeDuration45 } from "react-icons/tb";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import ReviewComponent from "../ReviewComponent/ReviewComponent";
import { useBookmarkTour } from "../../../hooks/useTours";
import { useMapContext } from "../../../context/MapContext";

export default function AboutTour({ data, setShowReview, user }) {
  const { setEventLocation } = useMapContext();
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

  const { mutate: bookmark } = useBookmarkTour();

  const isBookmarked = user.bookmarkedTours?.some(
    (bookmark) => bookmark._id === data?._id
  );

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
          <span
            className={`${styles.flex} ${styles.underline}`}
            onClick={() => {
              setEventLocation(data.location.coordinates);
              navigate("/app/map");
            }}
          >
            <CiLocationOn /> View location on map
          </span>
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

        <div className={styles.btnWrapper}>
          {user !== "Unauthorized" && user.role && (
            <button
              className={`${styles.bookmarkActivity} ${
                isBookmarked ? styles.isBookmarked : ""
              }`}
              onClick={bookmark}
            >
              {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
              {isBookmarked ? "Activity bookmarked" : "Bookmark this activity"}
            </button>
          )}
          <button
            className={styles.leaveReviewBtn}
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
        </div>
        {data.reviews.length > 0 && (
          <div className={styles.reviewsWrapper}>
            {data.reviews.map((review) => (
              <ReviewComponent review={review} key={review._id} tour={data} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
