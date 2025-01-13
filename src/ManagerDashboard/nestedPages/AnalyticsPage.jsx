import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";

const AnalyticsPage = () => {
  const [roomData, setRoomData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [occupancyData, setOccupancyData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  
  // Fetch Room Data
  const fetchRoomData = async () => {
    const res = await axios.get("https://hotel-management-backend-ruby.vercel.app/api/room");
    setRoomData(res.data.data);
    generateOccupancyData(res.data.data);
    generateRevenueData(res.data.data);
  };

  // Fetch User Data
  const fetchUserData = async () => {
    const res = await axios.get("https://hotel-management-backend-ruby.vercel.app/api/user");
    setUserData(res.data.data);
  };

  // Generate Occupancy Data
  const generateOccupancyData = (rooms) => {
    const occupancy = rooms.map(room => ({
      roomNumber: room.roomNumber,
      status: room.status === "occupied" ? 1 : 0,
    }));
    setOccupancyData(occupancy);
  };

  // Generate Revenue Data
  const generateRevenueData = (rooms) => {
    const revenue = rooms.map(room => ({
      roomNumber: room.roomNumber,
      revenue: room.status === "occupied" ? room.pricePerNight : 0,
    }));
    setRevenueData(revenue);
  };

  // Fetch Data on Component Mount
  useEffect(() => {
    fetchRoomData();
    fetchUserData();
  }, []);

  // Pie Chart Data for Room Status
  const roomStatusData = [
    { name: "Occupied", value: roomData.filter(room => room.status === "occupied").length },
    { name: "Available", value: roomData.filter(room => room.status === "available").length },
    { name: "Maintenance", value: roomData.filter(room => room.status === "maintenance").length }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Analytics Dashboard</h2>

      {/* Room Occupancy Pie Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={roomStatusData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {roomStatusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? "#ff7300" : index === 1 ? "#00C49F" : "#FF0000"} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Revenue Line Chart */}
      <h3>Revenue per Room</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="roomNumber" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* User Engagement Data */}
      <h3>User Distribution</h3>
      <ul>
        {userData.map(user => (
          <li key={user._id}>{user.name} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsPage;
