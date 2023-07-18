import  { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div>  <a className="navbar-brand " href="/">
            <img style={{marginRight:'0px'}} src="https://freeskout.com/img/freeskout.png" alt="" />
            </a></div>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div
                className="nav-links"
                onClick={handleClick}
              >
                Brands
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-links"
                onClick={handleClick}
              >
                Influencer
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-links"
                onClick={handleClick}
              >
                Pricing
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;