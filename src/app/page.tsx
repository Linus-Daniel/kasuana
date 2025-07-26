// pages/index.js
import About from "@/compoonents/About";
import BecomeVendorSection from "@/compoonents/BecomeVendor";
import ContactSection from "@/compoonents/Contacts";
import Footer from "@/compoonents/Footer";
import Header from "@/compoonents/Header";
import Hero from "@/compoonents/Hero";
import TagLine from "@/compoonents/TagLine";
import TeamSection from "@/compoonents/Team";
import TractionSection from "@/compoonents/Traction";
import Vendors from "@/compoonents/Vendors";
import WhyKasuana from "@/compoonents/Why-Us";
import Head from "next/head";


export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Kasuana Trade Network</title>
        <meta
          name="description"
          content="Building Africa's Grassroots Trade Network"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <TagLine />
        <WhyKasuana />
        <About />
        <TeamSection />
        <TractionSection />
        <BecomeVendorSection />
        <Vendors />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
