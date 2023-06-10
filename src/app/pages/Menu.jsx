import { GrTechnology } from "react-icons/gr";

function MenuPage() {
  return (
    <div className="shadow-xl border-b-2 border-gray-200 flex sticky top-0 z-50 bg-white">
      <GrTechnology size={64} className="relative" />
      <div className="text-2xl flex items-center">
        <h1>
          Houska <br /> DEV
        </h1>
      </div>
    </div>
  );
}
export default MenuPage;
