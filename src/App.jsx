import React from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
    </main>
  );
};

export default App;
