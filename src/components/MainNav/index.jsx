import { NavLink } from "react-router-dom";
import "../Layout/base.scss";

const MainNav = ({ hasBackground, linkTo }) => {
  // {styles.productPageNav}
  return (
    <div
      className="main-nav"    >
      <NavLink
        
        style={{ color: "white", textTransform: "uppercase" }}
        to={linkTo}
      >
        <h7>← back</h7>
      </NavLink>
    </div>
  );
};

export default MainNav;
