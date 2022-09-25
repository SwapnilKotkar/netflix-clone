import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

import { useEffect } from "react";
import { useLoginContext } from "../context/LoginContext";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { user, logOut } = useLoginContext();

  useEffect(() => {
    if(user){
      router.push('/userhome')
    }
  }, [user, router])
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
