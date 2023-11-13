import { Link, NavLink, useLocation } from "react-router-dom";
import TravnikPulseLogo from "../../assets/simple-logo.png";
import { BiUserCircle } from "react-icons/bi";
import styles from "./Navbar.module.scss";
import { useGetUser } from "../../hooks/useAuth";
import { BiSolidUserCircle, BiLogInCircle } from "react-icons/bi";

export default function Navbar() {
  const { data: user, isLoading } = useGetUser();

  const location = useLocation();
  console.log(location);
  if (isLoading) return <h1>LOADING...</h1>;
  return (
    <>
      <nav className={styles.nav}>
        <img
          src={TravnikPulseLogo}
          alt="TravnikPulse"
          className={styles.text}
        />
        {user.role && (
          <NavLink to="/app/me" className={styles.calendar}>
            {location.pathname === "/app/me" ? (
              <BiSolidUserCircle />
            ) : (
              <BiUserCircle />
            )}
          </NavLink>
        )}

        {user === "Unauthorized" && location.pathname !== "/app/login" && (
          <Link className={styles.loginBtn} to="/app/login">
            Log in <BiLogInCircle />
          </Link>
        )}
      </nav>
    </>
  );
}
