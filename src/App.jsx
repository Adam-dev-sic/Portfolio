import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/views/Navbar";
import Body from "./assets/views/Body";
import Footer from "./assets/views/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-y-hidden">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
