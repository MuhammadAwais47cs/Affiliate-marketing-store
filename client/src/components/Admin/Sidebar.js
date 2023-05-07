import React from "react";
// import "./sidebar.css";
import { Link } from "react-router-dom";

// import { IonIcon } from "@ionic/react";
import "./dashboard.css";
import { navigationItems } from "./data";

const Sidebar = () => {
  return (
    <div className="navigation">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a href="#">
              <span className="icon">
                <span name={item.icon} />
              </span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
