"use client";

import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import AboutSection from "@/components/Section/AboutSection";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import React, { useEffect, useState } from "react";
import serviceData from "@/data/service.json";
import Loader from "@/components/Loader/Loader";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        {loading ? (
          <div className="flex justify-center items-center h-[500px]">
            <Loader />
          </div>
        ) : (
          <>
            <Breadcrumb
              link="About Us"
              img="/images/header.webp"
              title="About Us"
              desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
            />

            <AboutSection />
            <Counter className="lg:pb-[50] sm:pb-16 pb-10" />
            <Service data={serviceData} />
          </>
        )}
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
