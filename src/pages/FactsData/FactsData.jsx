import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import UNFact from "../../components/Facts/UNFact/UNFact";
import ContinentFact from "../../components/Facts/ContinentFact/ContinentFact";

const FactsData = () => {
  const { countriesData } = useContext(DataContext);

  // data of UN Member countries and those which are not members
  const isUnMember = countriesData.filter((country) => country.unMember);
  const isNotUnMember = countriesData.filter(
    (country) => country.unMember !== true
  );

  // data for continent
  const countriesInAsia = countriesData.filter(
    (country) => country.continents == "Asia"
  );
  const countriesInEurope = countriesData.filter(
    (country) => country.continents == "Europe"
  );
  const countriesInNorthAmerica = countriesData.filter(
    (country) => country.continents == "North America"
  );
  const countriesInSouthAmerica = countriesData.filter(
    (country) => country.continents == "South America"
  );
  const countriesInAfrica = countriesData.filter(
    (country) => country.continents == "Africa"
  );
  const countriesInOceania = countriesData.filter(
    (country) => country.continents == "Oceania"
  );
  const countriesInAntarctica = countriesData.filter(
    (country) => country.continents == "Antarctica"
  );

  console.log(countriesData);
  return (
    <div>
      <h1>Some numeric data about countries</h1>
      <UNFact isUnMember={isUnMember} isNotUnMember={isNotUnMember} />
      <ContinentFact
        countriesInAsia={countriesInAsia}
        countriesInEurope={countriesInEurope}
        countriesInNorthAmerica={countriesInNorthAmerica}
        countriesInSouthAmerica={countriesInSouthAmerica}
        countriesInOceania={countriesInOceania}
        countriesInAfrica={countriesInAfrica}
        countriesInAntarctica={countriesInAntarctica}
      />
    </div>
  );
};

export default FactsData;
