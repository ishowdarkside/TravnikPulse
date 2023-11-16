import Navbar from "../../../components/Navbar/Navbar";
import Form from "../Form/Form";
import MobileNav from "../../../components/MobileNav/MobileNav";
import styles from "./Register.module.scss";
import DesktopNav from "../../../components/DesktopNav/DesktopNav";

export default function Register() {
  return (
    <div className={styles.formWrapper}>
      <DesktopNav />
      <Navbar />

      <section className={styles.registerSection}>
        <div className={styles.container}>
          <h2>Create New Account</h2>
          <p>
            If you don’t have one, feel free to create new account by filling
            simple form
          </p>
          <Form styles={styles} />
        </div>
      </section>
      <MobileNav />
    </div>
  );
}
