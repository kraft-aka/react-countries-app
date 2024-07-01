import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UNFact = ({ isUnMember, isNotUnMember }) => {
  if (!isUnMember || !isNotUnMember) {
    return <h2>Error: Data not available</h2>;
  }

  const dataSet = {
    labels: ["UN Members", "not Members"],
    datasets: [
      {
        label: "Number of countries",
        data: [isUnMember.length, isNotUnMember.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>UN Members and Not Members</h2>
      <section style={{ width: '350px' }}>
      {
        <Pie
        data={dataSet}
        options={{ responsive: true }}
        />
      }
      </section>
      {isUnMember &&
        isUnMember.map((i) => (
          <button key={i?.name?.common}>{i?.name?.common}</button>
        ))}
      <br />
      {isNotUnMember &&
        isNotUnMember.map((i) => (
          <button key={i?.name?.common}>{i?.name?.common}</button>
        ))}
    </div>
  );
};

export default UNFact;
