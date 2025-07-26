// pages/index.js
import About from "@/components/About";
import BecomeVendorSection from "@/components/BecomeVendor";
import ContactSection from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TagLine from "@/components/TagLine";
import TeamSection from "@/components/Team";
import TractionSection from "@/components/Traction";
import Vendors from "@/components/Vendors";
import WhyKasuana from "@/components/Why-Us";
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
