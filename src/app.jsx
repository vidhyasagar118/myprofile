import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Navbar from "./components/Navbar";
import "./App.css"
import Footer from "./Pages/Footer";
const App = () => {
  return (
 <>
 <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
 