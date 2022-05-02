import React from "react";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

const App = () => {
  return (
    <main className="font-montserrat">
      <Navbar />
      <Home />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
