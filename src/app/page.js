import "./styles/index.css";
import IntroPage from "./pages/IntroPage";
import MenuPage from "./pages/Menu";
import Facility from "./pages/Facility";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MenuPage />
      <IntroPage />
      <Facility />
    </div>
  );
}
