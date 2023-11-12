import { useRef, useState } from "react";
// React icons
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineCloudUpload, AiFillStar } from "react-icons/ai";
// SCSS
import styles from "./ReviewTour.module.scss";
import { useCreateReview } from "../../../hooks/useReview";
import { useRateTour } from "../../../hooks/useTours";

export default function ReviewTour() {
  const [filesLength, setFilesLength] = useState(0);
  const [images, setImages] = useState(null);
  const [rating, setRating] = useState(0);
  const messageRef = useRef();

  const { mutate: reviewMutation, isLoading: reviewIsLoading } = useCreateReview();
  const { mutate: rateMutation, isLoading: rateIsLoading } = useRateTour();

  if (reviewIsLoading || rateIsLoading) return <h1>LOADING...</h1>;

  return (
    <div className={styles.reviewTour}>
      <h2>Your review is incredibly helpful, thank you</h2>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData()
        
        if(rating > 0 && images !== null && messageRef.current.value !== '') {
          formData.append('review', messageRef.current.value);
          Array.from(images).forEach((image) => {
            formData.append('images', image)
          });
          
          reviewMutation(formData)
          rateMutation(rating)
          // Rest
          setImages(null)
          setFilesLength(0)
          messageRef.current.value = ''
          setRating(0)
          return;
        }
        
        if(rating === 0 && images !== null && messageRef.current.value !== '') {
          formData.append('review', messageRef.current.value);
          Array.from(images).forEach((image) => {
            formData.append('images', image)
          });
          reviewMutation(formData)
          // Reset
          setImages(null)
          setFilesLength(0)
          messageRef.current.value = ''
          return;
        }
        
        if(rating > 0) {
          rateMutation(rating)
          setRating(0)
          return;
        }
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
