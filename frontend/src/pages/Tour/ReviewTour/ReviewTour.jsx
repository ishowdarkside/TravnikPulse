import { useRef, useState } from "react";
// React icons
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineCloudUpload, AiFillStar } from "react-icons/ai";
// SCSS
import styles from "./ReviewTour.module.scss";
import { useCreateReview } from "../../../hooks/useReview";

export default function ReviewTour() {
  const [filesLength, setFilesLength] = useState(0);
  const [images, setImages] = useState(null);
  const [rating, setRating] = useState(0);
  const messageRef = useRef();

  const { mutate, isLoading } = useCreateReview();

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <div className={styles.reviewTour}>
      <h2>Your review is incredibly helpful, thank you</h2>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('review', messageRef.current.value);
        Array.from(images).forEach((image) => {
          formData.append('images', image)
        });
        mutate(formData)
        // Reset value
        setImages(null)
        setRating(0)
        setFilesLength(0)
        messageRef.current.value = ''
      }}>
        <div className={styles.inputContainer}>
          <label htmlFor="review">Message</label>
          <textarea rows="5" id="review" ref={messageRef} placeholder="Your message"></textarea>
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
              setFilesLength(e.target.files.length)
              // Images
              setImages(e.target.files)
            }}
          />
        </div>
        <div className={styles.stars}>
          <AiFillStar
            className={
              rating > 0 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => setRating(1)}
          />
          <AiFillStar
            className={
              rating > 1 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => setRating(2)}
          />
          <AiFillStar
            className={
              rating > 2 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => setRating(3)}
          />
          <AiFillStar
            className={
              rating > 3 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => setRating(4)}
          />
          <AiFillStar
            className={
              rating > 4 ? `${styles.star} ${styles.active}` : styles.star
            }
            onClick={() => setRating(5)}
          />
        </div>
        <button>
          <MdOutlineDone />
          Submit review
        </button>
      </form>
    </div>
  );
}
