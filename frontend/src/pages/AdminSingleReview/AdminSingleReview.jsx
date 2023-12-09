import {
  useApproveReview,
  useDeclineReview,
  useGetSingleUnapprovedReview,
} from "../../hooks/useReview";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import styles from "./AdminSingleReview.module.scss";
import Spinner from "../../components/Spinner/Spinner";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import MobileNav from "../../components/MobileNav/MobileNav";
import Navbar from "../../components/Navbar/Navbar";

export default function AdminSingleReview() {
  const { data, isLoading } = useGetSingleUnapprovedReview();
  const { mutate: approve, isLoading: isApproving } = useApproveReview();
  const { mutate: decline, isLoading: isDeleting } = useDeclineReview();
  if (isLoading || isApproving || isDeleting) return <Spinner />;

  if (data === "not-found" || !data)
    return (
      <>
        <ReturnButton />
        <span>Something went really wrong 😢</span>
      </>
    );

  return (
    <>
      <ReturnButton />
      <DesktopNav />

      <section className={styles.sectionBody}>
        <div className={styles.allWrapper}>
          <h2>Review</h2>
          <p className={styles.sub}>Approve or decline review request</p>

          <div className={styles.userWrapper}>
            <AiOutlineUser /> <span>{data.user?.username}</span>
          </div>

          <div className={styles.eventWrapper}>
            <BsCalendarEvent />
            <span>{data.tour?.name}</span>
          </div>

          <div>
            <span className={styles.comment}>
              <b>Review: </b>
              {data?.review}
            </span>
          </div>
          {data.images.length > 0 && (
            <div className={styles.imgWrapper}>
              {data.images?.map((img) => (
                <img
                  src={`http://127.0.0.1:8000/${img}`}
                  alt="review image"
                  key={img}
                />
              ))}
            </div>
          )}
          <div className={styles.buttonWrapper}>
            <button onClick={() => approve()}>Approve review</button>
            <button onClick={() => decline()}>Decline review</button>
          </div>
        </div>
      </section>
      <MobileNav />
    </>
  );
}
