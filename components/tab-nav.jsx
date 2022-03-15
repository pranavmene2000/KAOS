import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const TabNav = ({ active, goto }) => {
  return (
    <Nav className="app_navbar"  pills>
      <Navbar className="app_nav" tabs="true">
        <NavItem className="app_navbar_item">
          <NavLink
            className={`app_nav_link ${active === "form" ? "active" : ""}`}
            onClick={() => goto("form")}
          >
            Add Details
          </NavLink>
        </NavItem>
        <NavItem className="app_navbar_item">
          <NavLink
            className={`app_nav_link ${active === "feed" ? "active" : ""}`}
            onClick={() => goto("feed")}
          >
            View Submissions
          </NavLink>
        </NavItem>
      </Navbar>
    </Nav>
  );
};

export default TabNav;
