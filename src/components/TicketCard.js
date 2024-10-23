import React from "react";
import "../styles/TicketCard.css"; // Assuming you have custom styles for the card
import todo from "../icons/To-do.svg";
const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      {/* Ticket ID */}
      <div className="ticket-id">{ticket.id}</div>

      {/* Ticket Title */}
      <div className="ticket-title">{ticket.title}</div>

      {/* User Avatar */}
      <div className="ticket-user">
        <img
          src={`https://i.ibb.co/fdQhYr9/images-1.png`} // Generates avatar based on user name
          alt=""
          className="user-avatar"
        />
      </div>

      {/* Ticket Tag with Image */}
      <div className="ticket-tag">
        <img
          src={todo} // Update with the correct path for the tag image
          alt="Tag Icon"
          className="tag-icon"
        />
        <span>{ticket.tag[0]}</span>
      </div>
    </div>
  );
};

export default TicketCard;
