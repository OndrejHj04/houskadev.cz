import styles from "../styles/intro.module.css";
function IntroPage() {
  return (
    <div
      className="md:py-20 py-10 md:px-10 px-2"
      style={{ backgroundImage: `url(.jpg)` }}
    >
      <h1
        className={`${styles.title} font-bold text-4xl text-center w-fit mx-auto`}
      >
        Houska DEV
      </h1>
      <div className="my-2 flex items-center justify-center">
        <div className="h-1 w-20 bg-slate-600 mr-3"></div>
        <h1 className="md:text-xl text-lg text-center">
          Programujeme weby a webové aplikace.
        </h1>
        <div className="h-1 w-20 bg-slate-600 ml-3"></div>
      </div>
    </div>
  );
}
export default IntroPage;
