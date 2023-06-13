"use client";
import styles from "../styles/info.module.css";

export default function Info() {
  const data = [
    {
      title: "Žádné šablony.",
      text: "Každý web je originál. Nepoužíváme šablony ani služby jako wordpress, ale každá web programujeme od základů. Sice to trvá déle, než práce se šablonami, ale zato je každá stránka úplně jiná. Navíc nejsme těmito nástroji limitováni a můžeme všechno udělat podle vašich představ.",
    },
    {
      title: "Luxusní design.",
      text: "Důležitější než texty na webu je jeho vzhled. A zejmnéna jeho zobrazení na zařízeních s různou velikostí displeje. To všechno máme v malíku a naučíme to každé stránky, které nám projdou pod rukama.",
    },
    {
      title: "Nejmodernější technologie.",
      text: "Naše weby nejsou z minulého století. Používáme opravdu ty nejmodernější technologie, které dohromady fungují tak jak mají. Úplně nejdůležitější ale je, že si ale tykají s google vyhledávačem a je zajištěno, že se stránky budou zobrazovat na prnvích příčkách ve vyhledávání",
    },
  ];

  return (
    <div className="mb-20">
      <div>
        <img src="bounding.svg" />
      </div>
      <div className={styles.container}>
        <h3 className="text-4xl text-center">
          Naše weby jsou prostě jednička!
        </h3>
        <div className="md:grid grid-rows-3 grid-cols-2 mt-5 max-w-7xl mx-auto">
          {data.map((item, i) => {
            const gridVariants = [
              "col-start-1 row-start-1",
              "col-start-2 row-start-2",
              "col-start-1 row-start-3",
            ];
            return (
              <div
                className={`${gridVariants[i]} bg-white p-2 rounded-2xl max-w-xl w-11/12 mx-auto md:mb-0 mb-3`}
                key={i}
              >
                <h4 className="text-2xl font-semibold">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative bottom-1">
        <img src="bounding.svg" className="rotate-180" />
      </div>
    </div>
  );
}

/* kódujeme sami, používáme next, hledají na googlu */
