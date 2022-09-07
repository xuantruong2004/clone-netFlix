import "./App.css";
import Home from "./components/Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/Pages/NotFound";
import Search from "./components/Pages/Search";
import Footer from "./components/Footer/Footer";
import MovieId from "./components/Pages/MovieId";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/movies" element={<MovieId />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
