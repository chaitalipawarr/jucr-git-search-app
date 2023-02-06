import { useState } from "react";
import { Tabs } from "../Dashboard/Dashboard";
import "./TabMenu.scss";

const TabMenu = ({ onTabChange }: { onTabChange: Function }) => {
  const [activeTab, setActiveTab] = useState(Tabs.Users);

  const handleTabClick = (tabName: Tabs) => {
    setActiveTab(tabName);
    onTabChange(tabName);
  };

  return (
    <ul className="tab-menu" data-testid="tab-menu">
      <li
        className={`tab-menu__list ${activeTab === Tabs.Users ? "active" : ""}
        `}
        onClick={() => handleTabClick(Tabs.Users)}
        data-testid="users-tab"
      >
        Users
      </li>
      <li
        className={`tab-menu__list ${
          activeTab === Tabs.Repositories ? "active" : ""
        }`}
        onClick={() => handleTabClick(Tabs.Repositories)}
        data-testid="repository-tab"
      >
        Repositories
      </li>
    </ul>
  );
};

export default TabMenu;
