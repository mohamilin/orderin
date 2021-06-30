import React, { useState } from "react";
import Button from "components/button";
import IconLogo from "./IconText";

function Header(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  console.log("props header", props);

  const getNavClass = (path) => {
    return props.children.location.pathname === path ? "active" : "";
  };

  return (
    <>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <IconLogo />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                // className="collapse navbar-collapse"
                className={`${
                  isNavCollapsed ? "collapse" : ""
                } navbar-collapse`}
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className={`nav-item${getNavClass("/")}`}>
                    <Button className="nav-link" type="link" href="/">
                      Home
                    </Button>
                  </li>
                  <li className={`nav-item${getNavClass("/product")}`}>
                    <Button className="nav-link" type="link" href="/product">
                      Produk
                    </Button>
                  </li>
                  <li className={`nav-item${getNavClass("/about")}`}>
                    <Button className="nav-link" type="link" href="/about">
                      About
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
