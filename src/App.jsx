import Home from "./pages/Home/Home";
import SearchCountries from "./pages/SearchCountries/SearchCountries";
import Game from "./pages/Game/Game";
import DataProvider from "./providers/DataProvider";

function App() {
  return (
    <>
      <h1>Hello Countries App</h1>
      <DataProvider>
        <Home />
        <SearchCountries />
        <Game />
      </DataProvider>
    </>
  );
}

export default App;
