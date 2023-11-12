import { useGetSingleUnapprovedReview } from "../../hooks/useReview";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import styles from "./AdminSingleReview.module.scss";

export default function AdminSingleReview() {
  const { data, isLoading } = useGetSingleUnapprovedReview();

  if (isLoading) return <h1>LOADING...</h1>;

  if (data === "not-found")
    return (
      <>
        <ReturnButton />
        <span>Something went really wrong 😢</span>
      </>
    );
  return (
    <>
      <ReturnButton />
      <section className={styles.sectionBody}>
        <h2>Review</h2>
        <p className={styles.sub}>Approve or decline review request</p>

        <div className={styles.userWrapper}>
          <AiOutlineUser /> <span>{data.user.username}</span>
        </div>

        <div className={styles.eventWrapper}>
          <BsCalendarEvent />
          <span>{data.tour.name}</span>
        </div>

        <div>
          <span className={styles.comment}>
            {" "}
            <MdOutlineSpeakerNotes /> {data.review}
          </span>
        </div>
        {data.images.length > 0 && (
          <div className={styles.imgWrapper}>
            {data.images.map((img) => (
              <img
                src={`http://127.0.1:8000/${img}`}
                alt="review image"
                key={img}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
