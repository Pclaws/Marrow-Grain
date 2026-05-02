import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import CraftMaterials from "@/components/CraftMaterials";
import Timeline from "@/components/Timeline";
import SampleRequest from "@/components/SampleRequest";
import Gallery from "@/components/Gallery";
import Press from "@/components/Press";
import Showroom from "@/components/Showroom";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Collection />
        <CraftMaterials />
        <Timeline />
        <SampleRequest />
        <Gallery />
        <Press />
        <Showroom />
      </main>
      <Footer />
    </>
  );
}
