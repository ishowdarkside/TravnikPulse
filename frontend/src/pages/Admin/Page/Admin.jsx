import styles from "./Admin.module.scss";
import { Link } from "react-router-dom";
import { useGetTours } from "../../../hooks/useTours";
import { useGetAllShops } from "../../../hooks/useShops";
import { AiOutlineCalendar, AiOutlineStar } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useGetUnapprovedReviews } from "../../../hooks/useReview";
import ReturnButton from "../../../components/ReturnButton/ReturnButton";

export default function Admin() {
  const { data: tours, isLoading } = useGetTours();
  const { data: shops, isLoading: isLoadingShops } = useGetAllShops();
  const { data: unapprovedReviews, isLoading: isLoadingReviews } =
    useGetUnapprovedReviews();

  if (isLoading || isLoadingShops || isLoadingReviews)
    return <h1>LOADING...</h1>;

  return (
    <>
      <ReturnButton app={true} />
      <section className={styles.section}>
        <h2>You’re logged in as administrator</h2>
        <p>
          Select action which you want to use in admin dashboard to add, edit,
          remove events.
        </p>

        <div className={styles.linksWrapper}>
          <Link to="/app/admin/calendar">
            <span>01</span>
            <span className={styles.eventTitle}>Events</span>
            <span className={styles.itemLength}>
              {tours.length} events in total
            </span>
            <AiOutlineCalendar />
          </Link>
          <Link to="/app/admin/reviews">
            <span>02</span>
            <span className={styles.eventTitle}>Reviews</span>
            <span className={styles.itemLength}>
              {unapprovedReviews.length} reviews waiting for approval
            </span>
            <AiOutlineStar />
          </Link>
          <Link to="/app/admin/shops">
            <span>03</span>
            <span className={styles.eventTitle}>Shops</span>
            <span className={styles.itemLength}>
              {shops.length} shops in total
            </span>
            <BsCart2 />
          </Link>
        </div>
      </section>
    </>
  );
}
