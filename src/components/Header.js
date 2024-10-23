import React, { useState } from "react";
import "../styles/Header.css"; // Import the custom CSS
import displayIcon from "../icons/Display.svg"; // Assuming you have the image in an assets folder
import arrowDownIcon from "../icons/down.svg"; // Another icon for dropdown

const Header = ({ onGroupingChange, onSortingChange }) => {
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
    onGroupingChange(e.target.value);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
    onSortingChange(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      <div className="display">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          <img src={displayIcon} alt="Display Icon" className="icon-left" />{" "}
          {/* Image on left */}
          Display
          <img
            src={arrowDownIcon}
            alt="Arrow Down"
            className="icon-right"
          />{" "}
          {/* Image on right */}
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <div className="dropdown-group">
              <label>Grouping:</label>
              <select value={grouping} onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-group">
              <label>Ordering:</label>
              <select value={sorting} onChange={handleSortingChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
