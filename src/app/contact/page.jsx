import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import AboutSection from "@/components/Section/AboutSection";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import React from "react";
import serviceData from "@/data/service.json";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Breadcrumb
          link="Contact Us"
          img="/images/header.webp"
          title="Contact Us"
          desc="Get In touch with us"
        />

        <div className="form-contact lg:py-[100px] sm:py-16 py-10">
          <div className="container flex items-center justify-center">
            <div
              className="xm:w-5/6 w-full flex max-lg:flex-col 
                xl:items-center gap-y-8"
            >
              <div className="w-full xl:w-2/5">
                <div className="infor bg-blue-500 rounded-xl p-10">
                  <div className="heading5 text-white">Get in Touch</div>
                  <div className="body3 text-white mt-2">
                    We will get back to you soon...
                  </div>

                  <div
                    className="list-social flex flex-wrap items-center 
                        gap-3 md:mt-10 mt-6"
                  >
                    <a
                      className="item rounded-full w-12 h-12 flex items-center 
                        justify-center bg-slate-200"
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      <i className="icon-facebook text-black"></i>
                    </a>

                    <a
                      className="item rounded-full w-12 h-12 flex items-center 
                        justify-center bg-slate-200"
                      href="https://www.linkedin.com"
                      target="_blank"
                    >
                      <i className="icon-in text-black"></i>
                    </a>

                    <a
                      className="item rounded-full w-12 h-12 flex items-center 
                        justify-center bg-slate-200"
                      href="https://www.twitter.com"
                      target="_blank"
                    >
                      <i className="icon-twitter text-black"></i>
                    </a>

                    <a
                      className="item rounded-full w-12 h-12 flex items-center 
                        justify-center bg-slate-200"
                      href="https://www.youtube.com"
                      target="_blank"
                    >
                      <i className="icon-youtube text-black"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ContactPage;
