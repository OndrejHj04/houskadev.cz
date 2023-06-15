import styles from "../styles/contact.module.css";
export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl flex md:flex-row flex-col mb-16">
      <div className="flex-1 mx-auto flex flex-col max-w-2xl w-full">
        <div>
          <div className={`${styles.zig_zag_bot} rotate-180`} />
          <div className={`${styles.puzzleTop} p-2`}>
            <h1 className="md:text-4xl text-xl">A toto ještě není všechno!</h1>
          </div>
          <div className={styles.zig_zag_bot} />
        </div>
        <div
          className={`flex-1 border-black py-2 flex flex-col sm:text-base text-sm  ${styles.bill}`}
        >
          <div className="flex justify-between">
            <p className="font-semibold">Účtenka 011</p>
            <p className="font-semibold">Datum: 31. 08. 2004</p>
          </div>
          <div className="w-full border-2 border-dashed border-black mb-1" />
          <div className="flex justify-between">
            <p>Luxusní animace</p>
            <p>...k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p>Sexy galerie</p>
            <p>...k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p>Vyhodnocení návštěvnosti</p>
            <p>...k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p>Kontaktní formulář</p>
            <p>...k nezaplacení!</p>
          </div>
          <div className="flex justify-between">
            <p className="line-through">Taxi služba z letiště</p>
            <p className="line-through">...basa piv</p>
          </div>
          <div className="w-full border-2 border-dotted border-black mb-1" />
          <div className="flex justify-between">
            <p>Cena celkem</p>
            <p>...k nezaplacení!</p>
          </div>
        </div>
      </div>
      <div className="mx-auto  border-2 shadow-2xl p-2 rounded-2xl max-w-xl">
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
