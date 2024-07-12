import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/product">Product</NavLink>
          {/* <Link to="/product">Product</Link> */}

          {/* NavLink is used because it will automatically add active class to the links when clicked while Link will not add the active class, it is helpful because in css we can select this class and style this differently */}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
