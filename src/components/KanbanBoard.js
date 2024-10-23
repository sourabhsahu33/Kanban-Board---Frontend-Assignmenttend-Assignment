import React from 'react';
import TicketCard from '../components/TicketCard';
import '../styles/KanbanBoard.css';
import plusIcon from '../icons/add.svg'; // Adjust the path as necessary
import dotsIcon from '../icons/3dot.svg'; // Adjust the path as necessary
import todoIcon from '../icons/To-do.svg'; // Icon for 'To Do'
import inProgressIcon from '../icons/in-progress.svg'; // Icon for 'In Progress'
import blockedIcon from '../icons/Backlog.svg'; // Icon for 'Blocked'
import doneIcon from '../icons/Done.svg'; // Icon for 'Done'

// Function to map the group status to its relevant icon
const getGroupIcon = (group) => {
  switch (group) {
    case 'To Do':
      return todoIcon;
    case 'In Progress':
      return inProgressIcon;
    case 'Blocked':
      return blockedIcon;
    case 'Done':
      return doneIcon;
    default:
      return null;
  }
};

const KanbanBoard = ({ groupedTickets }) => {
  return (
    <div className="kanban-board">
      {/* Loop through each group of tickets (To Do, In Progress, etc.) */}
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          {/* Group Header */}
          <div className="kanban-header">
            <img 
              src={getGroupIcon(group)}  // Dynamically load the icon for each group
              alt={`${group} icon`} 
              className="group-icon" 
            />
            <h2>
              {group} 
              <span className="ticket-count">({groupedTickets[group].length})</span> {/* Ticket count */}
            </h2>
            {/* Actions: Add ticket and more options */}
            <div className="kanban-actions">
              <img src={plusIcon} alt="Add ticket" className="action-icon" />
              <img src={dotsIcon} alt="More options" className="action-icon" />
            </div>
          </div>

          {/* List of tickets for each group */}
          <div className="kanban-tickets">
            {groupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
