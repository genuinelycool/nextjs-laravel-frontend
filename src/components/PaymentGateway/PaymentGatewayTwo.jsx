"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PaymentGatewayTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <section
        className="payment-gateway-one style-second lg:mt-[100px] 
            sm:mt-16 mt-10"
        ref={ref}
      >
        <div className="container">
          <div className="content flex items-center gap-8">
            <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
              <h3 className="heading3">Payment Gateway Services</h3>
              <div className="body3 text-secondary">
                Experience the excitement and potential of the cryptocurrency
                market with our expert trading services. Experience the
                excitement and potential of the cryptocurrency market with our
                expert trading services.
              </div>

              <div className="button-block">
                <Link
                  className="button-main bg-black hover:bg-black 
                    text-white bg-blue rounded-full"
                  href="/"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="w-11/12 xl:w-7/12">
                dsfasgdsagag
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGatewayTwo;
