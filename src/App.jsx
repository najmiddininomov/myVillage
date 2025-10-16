import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Nature from "./pages/Nature/Nature";
import Gallery from "./pages/Gallary/Gallery";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/nature" element={<Nature/>}/>
         <Route path="/gallery" element = {<Gallery/>}/>
         <Route path="/contact" element = {<Contact/>}/>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
