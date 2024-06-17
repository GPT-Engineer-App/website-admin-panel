import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Treatments from "./pages/Treatments.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contacts from "./pages/Contacts.jsx";
import SEO from "./pages/SEO.jsx";
import About from "./pages/About.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/treatments" element={<Treatments />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/seo" element={<SEO />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;