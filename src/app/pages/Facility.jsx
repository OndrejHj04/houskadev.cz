import Image from "next/image";
import styles from "../styles/facility.module.css";
function Facility() {
  return (
    <div className="md:grid md:grid-rows-2 md:grid-cols-2 p-2">
      <div className="text-4xl my-auto">
        <h3>
          Děláme weby pro rok 2023
        </h3>
      </div>
      <div className="row-span-2 relative flex">
        <div className="h-full mx-auto flex relative md:mb-0 mb-10">
          <img src="screen.png" className="m-auto" />
          <img src="mobile.png" className="absolute md:w-36 w-28 -bottom-3 left-5" />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cum
          facilis facere provident in dolore perspiciatis optio sunt nulla rem,
          illum soluta nisi, earum, debitis obcaecati numquam? Ipsa, cumque
          molestiae.
        </p>
      </div>
    </div>
  );
}

export default Facility;
