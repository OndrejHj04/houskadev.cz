"use client";
import Select from "react-select";

export default function AnimText() {
  const text =
    "Naše weby jsou || sexy, k sežrání, boží, nejrychlejší || a budou takové i v roce || picker ||.";
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <Select options={options} />
    </div>
  );
}
