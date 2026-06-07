"use client";

import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OrderSteps from "@/components/OrderSteps";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import PreOrder from "@/components/PreOrder";
import Footer from "@/components/Footer";

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <OrderSteps />
      <WhyUs />
      <Reviews />
      <PreOrder />
      <Footer />
    </>
  );
}