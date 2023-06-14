import "./index.css";
import IntroPage from "./pages/IntroPage";
import MenuPage from "./pages/Menu";
import Facility from "./pages/Facility";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MenuPage />
      <IntroPage />
      <Facility />
      <Info />
      <Contact />
    </div>
  );
}
