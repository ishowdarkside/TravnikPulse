/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// React icons
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineCloudUpload, AiFillStar } from "react-icons/ai";
// SCSS
import styles from "./ReviewTour.module.scss";
import { useCreateReview } from "../../../hooks/useReview";
import { useGetSingleTour, useRateTour } from "../../../hooks/useTours";
import { useGetUser } from "../../../hooks/useAuth";
import Spinner from "../../../components/Spinner/Spinner";

export default function ReviewTour({ setShowReview }) {
  const { data: user, isLoading: isLoadingUser } = useGetUser();
  const { data: tour, isLoading: isLoadingTour } = useGetSingleTour();

  const [filesLength, setFilesLength] = useState(0);
  const [images, setImages] = useState(null);
  const [rating, setRating] = useState(() => {
    const myRating = tour.ratings.find((rating) => rating.user === user._id);
    return myRating ? +myRating.value : 0;
  });
  const hasAlreadyRated = tour.ratings.find(
    (rating) => rating.user === user._id
  )
    ? true
    : false;

  const [message, setMessage] = useState("");

  const { mutate: reviewMutation, isLoading: reviewIsLoading } =
    useCreateReview();
  const { mutate: rateMutation, isLoading: rateIsLoading } = useRateTour();

  useEffect(() => {
    if (rating === 0 || hasAlreadyRated) return;
    rateMutation(rating);
  }, [rating]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if (!message) return;
    formData.append("review", message);

    if (images)
      Array.from(images).forEach((image) => {
        formData.append("images", image);
      });

    reviewMutation(formData);
  }

  if (reviewIsLoading || rateIsLoading || isLoadingUser || isLoadingTour)
    return <Spinner />;

  return (
    <div className={styles.reviewTour}>
      <button
        className={styles.cancelReview}
        onClick={() => setShowReview(false)}
      >
        x
      </button>
      <h2>Your review is incredibly helpful, thank you</h2>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <label htmlFor="review">Message</label>
          <textarea
            rows="5"
            id="review"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="file">Attach images</label>
          <label htmlFor="file" className={styles.fileInput}>
            {filesLength === 0
              ? "Max 30mb (jpg, png)"
              : `${filesLength} images added`}{" "}
            <AiOutlineCloudUpload />
          </label>
          <input
            type="file"
            id="file"
            className={styles.defaultFileInput}
            multiple
            onChange={(e) => {
              // Images length
              setFilesLength(e.target.files.length);
              // Images
              setImages(e.target.files);
            }}
          />
        </div>
        <div className={styles.stars}>
          <AiFillStar
            className={
              rating > 0 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => {
              if (hasAlreadyRated) return;
              setRating(1);
            }}
          />
          <AiFillStar
            className={
              rating > 1 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => {
              if (hasAlreadyRated) return;
              setRating(2);
            }}
          />
          <AiFillStar
            className={
              rating > 2 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => {
              if (hasAlreadyRated) return;
              setRating(3);
            }}
          />
          <AiFillStar
            className={
              rating > 3 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => {
              if (hasAlreadyRated) return;
              setRating(4);
            }}
          />
          <AiFillStar
            className={
              rating > 4 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => {
              if (hasAlreadyRated) return;
              setRating(5);
            }}
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          <MdOutlineDone />
          Submit review
        </button>
      </form>
    </div>
  );
}
