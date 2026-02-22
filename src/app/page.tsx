'use client';

import Header from '@/components/header/Header';
import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Services from '@/components/services/Services';
import Project from '@/components/project/Project';
import Qualification from '@/components/qualification/Qualification';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import ScrollUp from '@/components/scrollup/ScrollUp';
import ChatBot from '@/components/chatbot/ChatBot';

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Project />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ChatBot />
    </>
  );
}
