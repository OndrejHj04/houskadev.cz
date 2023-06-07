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
    <div className="mb-20 mt-10">
      <div className={styles.d_wrapper}>
        <div className={`${styles.zig_zag_bottom} rotate-180`}></div>
        <div
          className={`${styles.body} flex md:flex-row flex-col`}
          id="introScreen"
        >
          <div className="md:w-3/5 w-full flex flex-col">
            <div className="mx-2 p-2 bg-white rounded-2xl border">
              <div className="mb-3">
                <h2 className="text-4xl">
                  <span className={styles.title}>Nejlepší</span> letní akce
                </h2>
              </div>
              <div>
                <h1>Houska dev je vývojářská skupina.</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis blanditiis unde, eveniet perspiciatis aperiam est
                  alias modi accusamus amet similique asperiores nisi
                  accusantium nihil ad porro eos veniam rerum expedita.
                </p>
              </div>
            </div>
            <div className="flex-1 m-2 flex justify-center items-center">
              <TypeAnimation
                sequence={[
                  "Tábor v 🌲🌲.",
                  1000, // Waits 1s
                  "Nejlepší 🍴🥘.",
                  2000, // Waits 2s
                  "Přihlašování začne v ❄️",
                  () => {
                    console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="md:text-4xl text-3xl"
              />
            </div>
          </div>
          <div className="md:mt-0 mt-10 md:w-2/5 w-full h-full flex items-center justify-center flex-col">
            <div className="w-64 h-64 border-4 border-gray-500 rounded-full shadow-2xl overflow-hidden">
              <img
                src={`${photos[photography]}.jpg`}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex mt-5">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className={`${
                    photography === i ? "bg-gray-500" : "bg-gray-200"
                  } rounded-full ${styles.switcher}`}
                  id="swithcer"
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.zig_zag_bottom}></div>
      </div>
    </div>
  );
}
export default IntroPage;
