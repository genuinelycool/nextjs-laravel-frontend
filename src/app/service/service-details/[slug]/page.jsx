import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import React from "react";
import serviceData from "@/data/service.json";
import Image from "next/image";

const ServiceDetails = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Breadcrumb
          link="Our Services Details"
          img="/images/header.webp"
          title="Our Services Details"
          desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
        />
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ServiceDetails;
