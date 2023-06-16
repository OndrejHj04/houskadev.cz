"use client";
import moment from "moment/moment";
import styles from "../styles/contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_API,
        process.env.NEXT_PUBLIC_TEMPLATE_API,
        form.current,
        process.env.NEXT_PUBLIC_ACC_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mx-auto w-full max-w-7xl flex md:flex-row flex-col mb-16">
      <div className="flex-1 mx-2 flex flex-col ">
        <div>
          <div className={`${styles.zig_zag_bot} rotate-180`} />
          <div className={`${styles.puzzleTop} p-2`}>
            <h1 className="sm:text-4xl text-3xl">Co dalšího umíme?</h1>
          </div>
          <div className={styles.zig_zag_bot} />
        </div>
        <div
          className={`flex-1 border-black py-2 flex flex-col ${styles.bill}`}
        >
          <div className="flex justify-between">
            <p className="font-semibold">Účtenka 011</p>
            <p className="font-semibold">
              Datum: {moment().format("DD. MM. YYYY")}
            </p>
          </div>
          <div className="w-full border-2 border-dashed border-black mb-1" />
          <div className="flex justify-between flex-col sm:flex-row sm:mb-0 mb-2">
            <p>Luxusní animace 🥇</p>
            <p className="md:ml-0 ml-3">Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row sm:mb-0 mb-2">
            <p>Sexy galerie 🤤</p>
            <p className="md:ml-0 ml-3">Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row sm:mb-0 mb-2">
            <p>Vyhodnocení návštěvnosti 🔭</p>
            <p className="md:ml-0 ml-3">Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row sm:mb-0 mb-2">
            <p>Kontaktní formulář 📇</p>
            <p className="md:ml-0 ml-3">Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row sm:mb-0 mb-2">
            <p className="line-through">Taxi služba z letiště ✈️</p>
            <p className="line-through md:ml-0 ml-3">Cena: k nezaplacení!</p>
          </div>
          <div className="w-full border-2 border-dotted border-black mb-1" />
          <div className="flex justify-between text-lg font-semibold">
            <p>Cena celkem</p>
            <p>...k nezaplacení!</p>
          </div>
        </div>
      </div>
      <div className="mx-auto  border-2 shadow-2xl  p-2 rounded-2xl max-w-xl">
        <h2 className="text-3xl text-center font-semibold">Napište nám!</h2>
        <h3>...a určitě se na něčem domluvíme.</h3>
        <form onSubmit={sendEmail} className="flex flex-col" ref={form}>
          <input
            className="outline-none"
            placeholder="Váš email"
            name="from_email"
          />
          <div className="h-0.5 w-full bg-gray-200"></div>
          <textarea
            rows="8"
            className="outline-none resize-none"
            placeholder="Text zprávy..."
            name="message"
          />
          <button
            className={`${styles.btn} text-white font-bold rounded-full `}
          >
            ODESLAT
          </button>
        </form>
      </div>
    </div>
  );
}
