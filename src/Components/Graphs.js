// src/components/Graphs.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graphs = ({ data }) => {
  return (
    <div className="graphs">
      <h2>Internet Sensor Graph</h2>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="internetSpeed" stroke="#8884d8" />
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
      </LineChart>
      {/* Repeat for other graphs */}
    </div>
  );
};

export default Graphs;
