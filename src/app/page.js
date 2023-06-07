import Image from "next/image";
import "./styles/index.css";
import IntroPage from "./pages/IntroPage";
import MenuPage from "./pages/Menu";
import Activities from "./pages/Activities";
import Facility from "./pages/Facility";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moje stránka</title>
        <meta
          name="google-site-verification"
          content="sA_Y9uRtjtkf9Zq8tEQhNuJI5Qy94RCzROdc8oJUUoE"
        />
      </Head>
      <div className="flex flex-col">
        <MenuPage />
        <div className="overflow-y-scroll overflow-x-hidden flex-1">
          <IntroPage />
          <Facility />
          <Activities />
          <Gallery />
          <ContactPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}
