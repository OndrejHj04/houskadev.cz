import styles from "../styles/menu.module.css";
import "../styles/menu.css";
import { BiLeaf } from "react-icons/bi";

function MenuPage() {
  return (
    <div>
      <div className={`${styles.bar} h-14 flex`}>
        <BiLeaf size={80} className="relative top-2 z-50" />
        <h2 className="text-xl">
          Letní <br /> akce
        </h2>
      </div>
    </div>
  );
}
export default MenuPage;
