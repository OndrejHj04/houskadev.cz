"use client";
import style from "../styles/activitiesPage.module.css";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import CountUp from "react-countup";

function Activities() {
  const onlyWidth = useWindowWidth();
  const data = [
    { count: 100, label: "spokojených účastníků" },
    { count: 40, label: "míst každý rok" },
    { count: 20, label: "různých aktivit" },
    { count: 5, label: "ročník" },
  ];
  return (
    <div className="">
      <img src="bounding.svg" alt="" />
      <div
        className={`${style.body} px-5 flex justify-between md:flex-row flex-col items-center`}
      >
        {data.map(({ count, label }) => (
          <div
            key={count}
            className={`${
              onlyWidth > 767 ? style.blockDesktop : style.blockMobile
            } md:w-1/5 w-1/2  p-2 rounded-2xl border-2 flex flex-col justify-between my-5`}
          >
            <p className="text-6xl text-center">
              <CountUp end={count} />
            </p>
            <p className="text-center">{label}</p>
          </div>
        ))}
      </div>
      <img
        src="bounding.svg"
        className="rotate-180 relative bottom-3 -z-20"
        alt=""
      />
    </div>
  );
}

export default Activities;
