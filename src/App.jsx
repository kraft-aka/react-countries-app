import { lazy, Suspense } from "react";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
const Population = lazy(()=> import('./pages/Population/Population'))
const Game = lazy(() => import("./pages/Game/Game"));
const FactsData = lazy(()=> import('./pages/FactsData/FactsData') )
import DataProvider from "./providers/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <h1 className="title">Countries App</h1>
        <DataProvider>
          <Suspense
            fallback={
              <Spinner variant="success" animation="border" size="lg" />
            }
          >
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
              <Route path="/population" element={<Population />}>
                Population 
              </Route>
              <Route path="/facts" element={<FactsData />}>
                Some Facts 
              </Route>
            </Routes>
          </Suspense>
          <Toaster position="top-right" />
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
