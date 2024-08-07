import { useState } from "react";
import "./App.css";
import Header from "./container/header/header";
import Home from "./pages/home/home";
import Footer from "./container/footer/footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
