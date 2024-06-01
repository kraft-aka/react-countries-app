import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setCountriesData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountriesData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        countriesData,
        setCountriesData,
        errorMsg,
        setErrorMsg,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
export default DataProvider;
