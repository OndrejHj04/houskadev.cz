import styles from "../styles/contact.module.css";
export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl flex mb-16">
      <div className="flex-1 mx-2 flex flex-col ">
        <div>
          <div className={`${styles.zig_zag_bot} rotate-180`} />
          <div className={`${styles.puzzleTop} p-2`}>
            <h1 className="text-4xl">A toto ještě není všechno!</h1>
          </div>
          <div className={styles.zig_zag_bot} />
        </div>
        <div className={`flex-1 border-black p-2 flex flex-col ${styles.bill}`}>
          <div className="flex justify-between">
            <p className="font-semibold">Účtenka 011</p>
            <p className="font-semibold">Datum: 31. 08. 2004</p>
          </div>
          <div className="w-full border-2 border-dashed border-black mb-1" />
          <div className="flex justify-between">
            <p>Luxusní animace 🥇</p>
            <p>Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p>Sexy galerie 🤤</p>
            <p>Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p>Vyhodnocení nejlepší návštěvnosti 🔭</p>
            <p>Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p>Nejúžasnější kontaktní formulář 📇</p>
            <p>Cena: k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p className="line-through">Taxi služba z letiště ✈️</p>
            <p className="line-through">Cena: basa piv</p>
          </div>
          <div className="w-full border-2 border-dotted border-black mb-1" />
          <div className="flex justify-between">
            <p>Cena celkem...</p>
            <p>Cena: k nezaplacení!</p>
          </div>
        </div>
      </div>
      <div className="mx-2 border-2 shadow-2xl p-2 rounded-2xl">
        <h2 className="text-3xl text-center font-semibold">Napište nám!</h2>
        <h3>...a určitě se na něčem domluvíme.</h3>
        <div className="flex flex-col">
          <input className="outline-none" placeholder="Předmět" />
          <div className="h-0.5 w-full bg-gray-200"></div>
          <textarea
            rows="8"
            className="outline-none resize-none"
            placeholder="Text zprávy..."
          />
        </div>
      </div>
    </div>
  );
}
