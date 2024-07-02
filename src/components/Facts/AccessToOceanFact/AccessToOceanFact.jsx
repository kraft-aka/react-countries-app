import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AccessToOceanFact = ({ isNotLandlocked, isLandlocked }) => {
  const dataSet = {
    labels: ["not Landlocked", "Landlocked"],
    datasets: [
      {
        label: "Number of countries",
        data: [isNotLandlocked.length, isLandlocked.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div>
      <h2>Countries that are landlocked anf have an access to the Ocean</h2>
      <section style={{ width: "350px" }}>{<Pie data={dataSet} />}</section>
    </div>
  );
};

export default AccessToOceanFact;
