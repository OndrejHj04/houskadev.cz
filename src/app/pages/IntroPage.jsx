"use client";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/introPage.module.css";
import { TypeAnimation } from "react-type-animation";

function IntroPage() {
  const photos = ["flowers", "forrest", "tree"];
  const [photography, setPhotography] = useState(0);
  const [time, setTime] = useState(1);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((c) => c + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (wait) {
      setWait(false);
    } else {
      if (photography === photos.length - 1) {
        setPhotography(0);
      } else {
        setPhotography((c) => c + 1);
      }
    }
  }, [time]);

  const handleClick = (i) => {
    setWait(true);
    setPhotography(i);
  };

  return (
    <div className="md:py-20 py-10 md:px-10 px-2" style={{ backgroundImage: `url(.jpg)` }}>
      <h1 className="font-bold text-4xl text-center">Houska DEV</h1>
      <div className="my-2 flex items-center justify-center">
        <div className="h-1 w-20 bg-slate-600 mr-3"></div>
        <h1 className="md:text-xl text-lg text-center">Programujeme weby a webové aplikace.</h1>
        <div className="h-1 w-20 bg-slate-600 ml-3"></div>
      </div>
    </div>
  );
}
export default IntroPage;
