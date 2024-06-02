import React, { useState, useEffect, createContext, useMemo } from "react";

const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
        console.error(err);
        setErrorMsg(err.message);
        setIsLoading(false);
      }
    };

    fetchCountriesData();
  }, []);

  const memoizedCountriesData = useMemo(() => countriesData, [countriesData]);

  return (
    <DataContext.Provider
      value={{
        countriesData: memoizedCountriesData,
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
