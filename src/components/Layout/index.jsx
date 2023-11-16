import "./base.scss";
import "./typography.scss";
import "./grid.scss";

import MainNav from "../MainNav";

const Layout = ({ children, home }) => {
  return (
    <div className="page">
      {home ? null : <MainNav />}
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
