/* eslint-disable react/prop-types */
import styles from "./BookmarkComponent.module.scss";
import { ImBookmark } from "react-icons/im";
export default function BookmarkComponent({ tour }) {
  return (
    <div className={styles.bookmarkWrapper}>
      <div className={styles.relativeWrapper}>
        <img src={`http://127.0.1:8000/${tour.coverImg}`} alt="cover image " />
        <ImBookmark />
      </div>
      <span>{tour.name}</span>
    </div>
  );
}
