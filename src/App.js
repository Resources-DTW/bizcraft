import "./App.css";
import About from "./screens/About";
import ContactUs from "./screens/Contact Us";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
// import Course from "./screens/Course";
// import Gallery from "./screens/Gallery";
// import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      {/* <Route path="/course" element={<Course />} />
      <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
