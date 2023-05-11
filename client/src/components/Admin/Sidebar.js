import React from "react";
// import "./sidebar.css";
import { Link } from "react-router-dom";

// import { IonIcon } from "@ionic/react";
import "./dashboard.css";
import { navigationItems } from "./data";

const Sidebar = ({ callback }) => {
  return (
    <div className="navigation">
      <ul>
        {navigationItems.map(({ id, link, icon, title }) => (
          <li key={id}>
            <Link to={link} onClick={callback(title)}>
              <span className="icon">
                <span name={icon} />
              </span>
              <span className="title">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
