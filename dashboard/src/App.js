import React, { useState } from "react";
import { Pie } from "react-chartjs-2"; // Assuming you are using react-chartjs-2
import { fetchChartData } from "./api"; // Adjust the import path as necessary

export default function App() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const refreshChartData = async () => {
    try {
      const data = await fetchChartData();
      setChartData(data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  return (
    <div className="App">
      <Pie data={chartData} />
      <button onClick={refreshChartData}>Refresh Chart</button>
    </div>
  );
}
