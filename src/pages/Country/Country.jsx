import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./Country.module.css";

const Country = () => {
  const { id } = useParams();


  console.log(id);

  return (
    <div>
      Country
      {id}
    </div>
  );
};

export default Country;
