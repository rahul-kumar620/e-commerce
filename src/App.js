import "./App.css";
import Header from "./components/Header";
import HomeSlider from "./Pages/Home/HomeSlider";
import About from "./Pages/About/About";
import Boys from "./Pages/Boys/Boys";
import Girls from "./Pages/Girls/Girls";
import Mens from "./Pages/Mens/Mens";
import Womens from "./Pages/Womens/Womens";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomeSlider />} />
            <Route path="about" element={<About />} />
            <Route path="boys" element={<Boys />} />
            <Route path="girls" element={<Girls />} />
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
