import React from "react";

const CityItem = ({ city }) => {
  return (
    <section className="mt-5">
      <div className="flex flex-row">
        <label className="w-20">City: </label>
        <div>{city.name}</div>
      </div>
      <div className="flex flex-row">
        <label className="w-20">Weather: </label>
        <div>{city.temp}</div>
      </div>
    </section>
  );
};

export default CityItem;
