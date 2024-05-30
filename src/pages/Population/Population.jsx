import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import PopulationCard from "../../components/PopulationCard/PopulationCard";

const Population = () => {
  const { countriesData } = useContext(DataContext);
  
  const sortedByPopulation = countriesData.sort(
    (a, b) => b?.population - a?.population
    );
    console.log(sortedByPopulation);
  return (
    <div>
      {sortedByPopulation && sortedByPopulation.map((country,idx) => (
        <PopulationCard
          number={idx}
          key={country?.name?.common}
          name={country?.name.common}
          population={country.population}
          id={country?.name.common}
          flag={country.flags.svg}
        />
      ))}
    </div>
  );
};

export default Population;
