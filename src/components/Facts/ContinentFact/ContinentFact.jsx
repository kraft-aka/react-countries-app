import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContinentFact = ({
  countriesInAsia,
  countriesInEurope,
  countriesInNorthAmerica,
  countriesInSouthAmerica,
  countriesInOceania,
  countriesInAfrica,
  countriesInAntarctica,
}) => {
  const dataSet = {
    labels: [
      "Asia",
      "Europe",
      "North America",
      "South America",
      "Africa",
      "Oceania",
      "Antarctica",
    ],
    datasets: [
      {
        label: "Number of countries",
        data: [
          countriesInAsia.length,
          countriesInEurope.length,
          countriesInNorthAmerica.length,
          countriesInSouthAmerica.length,
          countriesInAfrica.length,
          countriesInOceania.length,
          countriesInAntarctica.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255,215,0, 0.2)",
          "rgba(152,251,152, 0.2)",
          "rgba(127,255,0, 0.2)",
          "rgba(250,235,215, 0.2)",
          "rgba(148,0,211, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255,215,0, 1)",
          "rgba(152,251,152, 1)",
          "rgba(127,255,0, 1)",
          "rgba(250,235,215, 1)",
          "rgba(148,0,211, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Number of Continents per Continent</h2>

      <section style={{ width: "350px" }}>
        {<Pie data={dataSet} options={{ responsive: true }} />}
      </section>
    </div>
  );
};

export default ContinentFact;
