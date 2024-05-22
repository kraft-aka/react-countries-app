import Home from "./pages/Home/Home";
import SearchCountries from "./pages/SearchCountries/SearchCountries";
import Game from "./pages/Game/Game";
import DataProvider from "./providers/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./pages/Country/Country";
import NavbarComponent from "./components/Navbar/NavbarComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <h1 className="title">Countries App</h1>
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
