import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import UNFact from "../../components/Facts/UNFact/UNFact";

const FactsData = () => {

  const { countriesData } = useContext(DataContext);

  // data of UN Member countries and those which are not members
  const isUnMember = countriesData.filter(country=> country.unMember);
  const isNotUnMember = countriesData.filter(country=> country.unMember !== true);

  //console.log(countriesData, isUnMember, isNotUnMember);
  return (
    <div>
      <UNFact isUnMember={isUnMember} isNotUnMember={ isNotUnMember }/>
    </div>
  );
};

export default FactsData;
