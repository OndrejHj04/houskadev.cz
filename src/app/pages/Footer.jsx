"use client";
import Image from "next/image";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className={`footer p-5 flex justify-between text-gray-300`}>
      <div>
        <h2 className="font-bold text-3xl">Houska DEV</h2>
        <p>protože není nic staršího než včerejší weby...</p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-center">Kontakt</h4>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="cursor-pointer">
            <Image
              src="/fb-ico.png"
              height={36}
              width={36}
              alt="facebook icon"
            />
          </div>

          <div className="cursor-pointer">
            <Image
              src="/gmail-ico.png"
              height={36}
              width={36}
              alt="gmail icon"
            />
          </div>

          <div className="cursor-pointer">
            <Image
              src="/disc-ico.png"
              height={36}
              width={36}
              alt="discord icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
