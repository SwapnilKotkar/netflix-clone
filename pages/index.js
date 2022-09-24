import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";  
import Link from "next/link";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <FAQs/>
      <Footer/>
    </>
  );
}
