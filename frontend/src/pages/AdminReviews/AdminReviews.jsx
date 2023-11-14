import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { useGetUnapprovedReviews } from "../../hooks/useReview";
import ReviewComponent from "./ReviewComponent";
import styles from "./AdminReviews.module.scss";
import Spinner from "../../components/Spinner/Spinner";

export default function AdminReviews() {
  const { data: reviews, isLoading } = useGetUnapprovedReviews();

  if (isLoading) return <Spinner />;

  return (
    <>
      <ReturnButton />
      <section className={styles.sectionBody}>
        <h2>Reviews</h2>
        <p className={styles.sectionParagraph}>
          Check how people reviewed the events, and approve their reviews
        </p>

        {reviews.length === 0 && (
          <span className={styles.noReviews}>
            No reviews for now 😢! Comeback later.
          </span>
        )}
        <div className={styles.reviewsWrapper}>
          {reviews.map((review, i) => (
            <ReviewComponent review={review} i={i + 1} key={review._id} />
          ))}
        </div>
      </section>
    </>
  );
}
