import React from "react";

const UNFact = ({ isUnMember, isNotUnMember }) => {

  
  return (
    <div>
      UNFact
      {isUnMember && isUnMember.map((i) => (
        <button key={i?.name?.common}>{i?.name?.common}</button>
      ))}
      <br />
      {isNotUnMember && isUnMember.map((i) => (
        <button key={i?.name?.common}>{i?.name?.common}</button>
      ))}
    </div>
  );
};

export default UNFact;
