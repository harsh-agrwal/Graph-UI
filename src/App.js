// src/App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Graphs from './Components/Graphs';

const App = () => {
  // Sample data (replace with your actual data)
  const graphData = [
    { time: '10:00', internetSpeed: 50 },
    { time: '11:00', internetSpeed: 60 },
    // Add more data points
  ];

  return (
    <div className="app">
      <Sidebar />
      <Graphs data={graphData} />
    </div>
  );
};

export default App;
