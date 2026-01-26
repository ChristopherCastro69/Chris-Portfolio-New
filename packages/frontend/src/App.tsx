import React from "react";
import "./App.css";
import { ErrorBoundary } from "./components/common";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Project from "./components/project/Project";

// Feature flag for testimonials
const ENABLE_TESTIMONIALS = process.env.REACT_APP_ENABLE_TESTIMONIALS === 'true';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Project />
        <Qualification />
        {ENABLE_TESTIMONIALS && <Testimonials />}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </ErrorBoundary>
  );
};

export default App;
