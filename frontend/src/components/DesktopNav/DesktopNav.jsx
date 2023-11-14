import styles from "./DesktopNav.module.scss";
import Logo from "../../assets/simple-logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useGetUser } from "../../hooks/useAuth";
import Spinner from "../../components/Spinner/Spinner";
export default function DesktopNav() {
  const { data: user, isLoading } = useGetUser();

  const location = useLocation();

  if (isLoading) return <Spinner />;
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/app/dashboard">
          <img src={Logo} alt="logo" />
        </Link>

        <ul>
          <li>
            <NavLink to="/app/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/app/map">Map</NavLink>
          </li>
          <li>
            <NavLink to="/app/shop">Shops</NavLink>
          </li>
          <li>
            <NavLink to="/app/settings">Settings</NavLink>
          </li>
          <li
            className={`${styles.operation} ${
              location.pathname === "/app/me" ? styles.whiteBG : ""
            }`}
          >
            <NavLink to="/app/me">
              {user === "Unauthorized" ? "Login " : user.username}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
