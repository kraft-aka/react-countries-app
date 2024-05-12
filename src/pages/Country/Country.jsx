import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";
import styles from "./Country.module.css";

const Country = () => {
  const { countriesData } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // find one country match id with country name
  const findOneCountry = countriesData.find(
    (country) => country.name?.common === id
  );

  const navigateBack = () => navigate(-1)

  console.log(findOneCountry);

  return (
    <div>
      {id}
      {findOneCountry?.area}m2
      {findOneCountry?.population}
      <button onClick={navigateBack}>Back</button>
    </div>
  );
};

export default Country;
