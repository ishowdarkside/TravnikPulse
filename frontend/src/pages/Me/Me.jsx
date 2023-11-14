import { Link, Navigate } from "react-router-dom";
import { useGetUser } from "../../hooks/useAuth";
import styles from "./Me.module.scss";
import PrevReviewComponent from "./PrevReviewComponent";
import { RiAdminLine } from "react-icons/ri";
import RatedTour from "./RatedTour";
import MobileNav from "../../components/MobileNav/MobileNav";
import Navbar from "../../components/Navbar/Navbar";
import BookmarkComponent from "./BookmarkComponent/BookmarkComponent";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
export default function Me() {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) return <h1>LOADING</h1>;

  if (!user || user === "Unauthorized" || !user.role)
    return <Navigate to="/app/login" />;

  return (
    <>
      <DesktopNav />
      <section className={styles.sectionBody}>
        <div className={styles.container}>
          <Navbar />
          <span className={styles.welcomMessage}>
            Hi <b>{user.username}</b>, welcome back!
          </span>

          {user.role === "admin" && (
            <Link to="/app/admin" className={styles.adminLink}>
              <RiAdminLine />
              Admin Panel
            </Link>
          )}

          {user.bookmarkedTours.length > 0 && (
            <div className={styles.bookmarksWrapper}>
              <span className={styles.spanSub}>Bookmarked activities</span>
              <div className={styles.bookmarksGrid}>
                {user.bookmarkedTours.map((tour) => (
                  <BookmarkComponent tour={tour} key={tour._id} />
                ))}
              </div>
            </div>
          )}

          {user.reviewedTours.length === 0 && user.ratedTours.length > 0 && (
            <span className={styles.spanSub}>
              Once you start giving reviews to activities, they will show up
              here!
            </span>
          )}
          {user.reviewedTours.length > 0 && (
            <div className={styles.ReviewPanel}>
              <span className={styles.spanSub}>
                Please, have a insight on what you’ve reviewed.
              </span>
              <div className={styles.reviewsWrapper}>
                {user.reviewedTours.map((review) => {
                  return (
                    <PrevReviewComponent key={review._id} review={review} />
                  );
                })}
              </div>
            </div>
          )}

          <div className={styles.ratedToursPanel}>
            {user.ratedTours.length > 0 && (
              <span className={styles.spanSub}>
                Take a look at tours you have rated
              </span>
            )}

            {user.reviewedTours.length > 0 && user.ratedTours.length === 0 && (
              <span className={styles.spanSub}>
                Once you start rating activities, they will show up here!
              </span>
            )}

            <div className={styles.ratedToursWrapper}>
              {user.ratedTours.map((ratedTour) => (
                <RatedTour ratedTour={ratedTour} key={ratedTour._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <MobileNav />

      {user.reviewedTours.length === 0 && user.ratedTours.length === 0 && (
        <span className={styles.noReviewsNoRatings}>
          Once you start giving reviews to activities, or rating them, your
          activity will be tracked here!
        </span>
      )}
    </>
  );
}
