import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
        {/* <Link to="/product">Product</Link> */}

        {/* NavLink is used because it will automatically add active class to the links when clicked while Link will not add the active class, it is helpful because in css we can select this class and style this differently */}
      </ul>
    </nav>
  );
}

export default PageNav;
