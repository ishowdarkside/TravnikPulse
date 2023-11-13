import Navbar from "../../../components/Navbar/Navbar";
import Form from "../Form/Form";
import MobileNav from "../../../components/MobileNav/MobileNav";
import styles from "./Login.module.scss";
import { useGetUser } from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { data: user, isLoading } = useGetUser();
  if (isLoading) return <h1>LOADING...</h1>;

  if (user !== "Unauthorized" && user.role) return <Navigate to="/app/me" />;
  return (
    <div className={styles.formWrapper}>
      <Navbar />
      <section className={styles.loginSection}>
        <h2>Welcome back!</h2>
        <p>Log in to post a review, and rate the place where you’ve been</p>
        <Form styles={styles} />
      </section>
      <MobileNav />
    </div>
  );
}
