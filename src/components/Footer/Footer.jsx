import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-block bg-[#0f1e33] pt-[60px]">
      <div className="container">
        <div
          className="flex max-lg:flex-col max-lg:items-start 
                    gap-y-10 pb-10"
        >
          <div className="lg:w-1/4">
            <div
              className="footer-company-infor flex flex-col 
                justify-between gap-5"
            >
              <Image
                width={4000}
                height={4000}
                className="footer-logo w-[145px]"
                src="/images/LogoWhite.png"
                alt="logo"
              />

              <div className="text caption1 text-white">
                The jobs report soundly beat expectations, with job gains
                broadly spread across the economy and about 60% higher
              </div>

              <div className="list-social flex items-center gap-2">
                <Link
                  className="item rounded-full w-7 h-7 border-2 
                    border-gray flex items-center justify-center"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <i className="icon-facebook text-sm"></i>
                </Link>

                <Link
                  className="item rounded-full w-7 h-7 border-2 
                    border-gray flex items-center justify-center"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <i className="icon-in text-xs"></i>
                </Link>

                <Link
                  className="item rounded-full w-7 h-7 border-2 
                    border-gray flex items-center justify-center"
                  href="https://twitter.com"
                  target="_blank"
                >
                  <i className="icon-twitter text-xs"></i>
                </Link>

                <Link
                  className="item rounded-full w-7 h-7 border-2 
                    border-gray flex items-center justify-center"
                  href="https://youtube.com"
                  target="_blank"
                >
                  <i className="icon-youtube text-xs"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
