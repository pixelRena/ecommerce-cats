import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => (
  <>
    <div className="nav">
      <div className="nav-brand-container">
        <div>
          <input
            className="nav-searchbar"
            type="search"
            placeholder="Search..."
          />
        </div>
        <Link className="logo-container" to="/">
          <div>
            <img
              className="nav-logo"
              src="https://img.icons8.com/external-mixed-kendis-lasman/80/external-cat-love-family-mixed-mixed-kendis-lasman-2.png"
              alt="E-Cats"
            />
          </div>
        </Link>
        <div className="nav-signin">
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Shop
        </Link>
        <Link className="nav-link" to="/">
          Sale
        </Link>
        <Link className="nav-link" to="/">
          New Arrivals
        </Link>
        <Link className="nav-link" to="/">
          About Us
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
