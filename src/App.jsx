import Home from "./pages/Home/Home";
import SearchCountries from "./pages/SearchCountries/SearchCountries";
import Game from "./pages/Game/Game";
import DataProvider from "./providers/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./pages/Country/Country";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1>Hello Countries App</h1>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/countries/:id" element={<Country />}>
              Country
            </Route>
            <Route path="/game" element={<Game />}>
              Play Game
            </Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
