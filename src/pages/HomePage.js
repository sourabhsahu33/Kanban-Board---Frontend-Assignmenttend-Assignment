import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import KanbanBoard from '../components/KanbanBoard';
import { fetchTickets } from '../services/api';

const HomePage = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');  // Default grouping by status
  const [sorting, setSorting] = useState('priority');  // Default sorting by priority

  useEffect(() => {
    fetchTickets().then(data => setTickets(data));
  }, []);

  return (
    <div className="home-page">
      <Header setGrouping={setGrouping} setSorting={setSorting} />
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default HomePage;
