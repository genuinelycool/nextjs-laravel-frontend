import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import AboutSection from "@/components/Section/AboutSection";
import Breadcrumb from "@/components/Section/Breadcrumb";
import React from "react";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Breadcrumb
          link="About Us"
          img="/images/header.webp"
          title="About Us"
          desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
        />

        <AboutSection />
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
