import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import UNFact from "../../components/Facts/UNFact/UNFact";
import ContinentFact from "../../components/Facts/ContinentFact/ContinentFact";
import AccessToOceanFact from "../../components/Facts/AccessToOceanFact/AccessToOceanFact";

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

  // data of landlocked and have an access to the ocean or sea countries

  const isNotLandlocked = countriesData.filter(
    (country) => !country.landlocked
  );
  const isLandlocked = countriesData.filter((country) => country.landlocked);


  // array of languages
  const langs = countriesData.flatMap(({ languages }) => languages);

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
      <AccessToOceanFact
        isNotLandlocked={isNotLandlocked}
        isLandlocked={isLandlocked}
      />
    </div>
  );
};

export default FactsData;
