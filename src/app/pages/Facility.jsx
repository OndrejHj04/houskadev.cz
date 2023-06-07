function Facility() {
  return (
    <div className="md:grid md:grid-rows-2 md:grid-cols-2 p-2 mb-10">
      <div className="text-4xl">
        <h3>Náš</h3>
        <h3>areál</h3>
      </div>
      <div className="row-span-2 relative md:mb-0 mb-10">
        <img src="forrest.jpg" className="w-3/4 max-w-2xl" alt="" />
        <img
          src="tree.jpg"
          className="absolute w-2/4 left-1/2 top-1/2 max-w-2xl"
          alt=""
        />
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae
          repellat voluptate, accusamus, fugiat ad rerum ipsum necessitatibus
          impedit nesciunt iusto ea sed, aliquam autem ipsam placeat doloribus
          voluptas? Doloribus?
        </p>
      </div>
    </div>
  );
}

export default Facility;
