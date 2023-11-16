import Navbar from "../../../components/Navbar/Navbar";
import Form from "../Form/Form";
import MobileNav from "../../../components/MobileNav/MobileNav";
import styles from "./Login.module.scss";
import { useGetUser } from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import DesktopNav from "../../../components/DesktopNav/DesktopNav";

export default function Login() {
  const { data: user, isLoading } = useGetUser();
  if (isLoading) return <Spinner />;

  if (user !== "Unauthorized" && user.role) return <Navigate to="/app/me" />;
  return (
    <div className={styles.formWrapper}>
      <Navbar />
      <DesktopNav />
      <section className={styles.loginSection}>
        <div className={styles.container}>
          <h2>Welcome back!</h2>
          <p>Log in to post a review, and rate the place where you’ve been</p>
          <Form styles={styles} />
        </div>
      </section>
      <MobileNav />
    </div>
  );
}
