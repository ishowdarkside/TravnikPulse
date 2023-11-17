/* eslint-disable react/prop-types */
import { useState } from "react";
// React icons
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
// SCSS
import styles from "./ReviewTour.module.scss";
import { useCreateReview } from "../../../hooks/useReview";
import Spinner from "../../../components/Spinner/Spinner";

export default function ReviewTour({ setShowReview }) {
  const [filesLength, setFilesLength] = useState(0);
  const [images, setImages] = useState(null);

  const [message, setMessage] = useState("");

  const { mutate: reviewMutation, isLoading: reviewIsLoading } =
    useCreateReview();

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

  if (reviewIsLoading) return <Spinner />;

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

        <button type="submit" className={styles.submitBtn}>
          <MdOutlineDone />
          Submit review
        </button>
      </form>
    </div>
  );
}
