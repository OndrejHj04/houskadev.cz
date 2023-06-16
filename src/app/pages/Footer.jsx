import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div
      className={`${styles.footer} border-2 m-2 p-5 rounded-3xl flex justify-between items-center`}
    >
      <div>
        <h2 className="font-bold text-3xl">Houska DEV</h2>
        <p>protože není nic staršího než včerejší weby...</p>
      </div>
      <div className="flex">
        <img src="gmail.png" className="h-16" />
        <img src="facebook.png" className="h-16 mx-2" />
        <img src="disc.png" className="h-16" />
      </div>
    </div>
  );
}
