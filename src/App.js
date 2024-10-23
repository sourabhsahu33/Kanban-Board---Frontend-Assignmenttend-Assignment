import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");
  const [groupedTickets, setGroupedTickets] = useState({});

  // Fetch Tickets and Users from API
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch((error) =>
        console.error("Error fetching tickets and users:", error)
      );
  }, []);

  // Group tickets based on the selected grouping and sorting options
  useEffect(() => {
    const groupTickets = () => {
      const grouped = tickets.reduce((acc, ticket) => {
        const groupKey = ticket[grouping] || "Unassigned";
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(ticket);
        return acc;
      }, {});

      // Sort tickets within each group based on sorting criteria
      Object.keys(grouped).forEach((group) => {
        grouped[group].sort((a, b) => {
          if (sorting === "priority") {
            return b.priority - a.priority;
          } else if (sorting === "title") {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
      });

      setGroupedTickets(grouped);
    };

    groupTickets();
  }, [tickets, grouping, sorting]);

  return (
    <div className="App"> 
      <Header onGroupingChange={setGrouping} onSortingChange={setSorting} />
      <UsersList users={users} tickets={tickets} />
      <KanbanBoard groupedTickets={groupedTickets} />{" "}
      {/* Render Kanban Board */}
    </div>
  );
};

export default App;
