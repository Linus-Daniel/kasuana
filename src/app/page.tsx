"use client"
// pages/index.js
import { useEffect, useState } from "react";
import About from "@/components/About";
import BecomeVendorSection from "@/components/BecomeVendor";
import ContactSection from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TagLine from "@/components/TagLine";
import TeamPreview from "@/components/Team";
import TractionSection from "@/components/Traction";
import VendorsPreview from "@/components/Vendors";
import WhyKasuana from "@/components/Why-Us";
import api from "@/lib/axiosInstance";
import Head from "next/head";

export default function Home() {
  const [teamData, setTeamData] = useState([]);
  const [vendorsData, setVendorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teamResponse, vendorsResponse] = await Promise.all([
          api.get("/teams?limit=4"),
          api.get("/vendors?limit=4"),
        ]);

        setTeamData(teamResponse.data);
        setVendorsData(vendorsResponse.data);
        console.log("Team Data:", teamResponse.data);
        console.log("Vendors Data:", vendorsResponse.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="font-poppins flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
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

      <main>
        <Hero />
        <TagLine />
        <WhyKasuana />
        <About />
        <TeamPreview members={teamData} />
        <TractionSection />
        <BecomeVendorSection />
        <VendorsPreview vendors={vendorsData} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
