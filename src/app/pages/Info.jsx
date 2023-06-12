import styles from "../styles/info.module.css";

export default function Info() {
  return (
    <div>
      <div>
        <img src="bounding.svg" />
      </div>
      <div className={styles.container}>
        <div className="flex-1"></div>
        <div>
          <h3 className="text-3xl">Co umí naše weby?</h3>
        </div>
      </div>
      <div>
        <img src="bounding.svg" className="rotate-180" />
      </div>
    </div>
  );
}
