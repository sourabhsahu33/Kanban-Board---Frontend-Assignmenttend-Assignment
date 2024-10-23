import React from "react";
import "../styles/UsersList.css";
import plus from "../icons/add.svg";
import thredot from "../icons/3dot.svg";

const UsersList = ({ users, tickets }) => {
  // Function to count how many tickets are assigned to each user
  const getTicketCountForUser = (userId) => {
    return tickets.filter((ticket) => ticket.userId === userId).length;
  };

  return (
    <div className="users-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-profile">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} // Generates avatar based on user name
              alt={user.name}
              className="user-avatar"
            />
          </div>
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="ticket-count">
              {getTicketCountForUser(user.id)} Tickets
            </div>
          </div>
          <div className="user-actions">
            <img
              src={plus}  
              alt="Add Ticket"
              className="action-icon"
            />
            <img
              src={thredot}  
              alt="Options"
              className="action-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
