import React from "react";
import { withChange } from "../helpers";
import { partial } from "lodash";
import { connect } from "react-redux";
import { changeCityName } from "../state/weather";
import { fetchCity } from "../api";

const CitySearch = ({ cityName, changeCityName, fetchCity }) => {
  return (
    <div className="my-5">
      <input
        type="text"
        value={cityName}
        onChange={withChange(changeCityName)}
        className="form-input mr-4"
      />
      <button
        className="bg-blue-800 text-white cursor-pointer  rounded-xl px-3 py-2.5 hover:text-orange-300
          transition ease-in-out hover:-translate-y-1"
        type="button"
        onClick={partial(fetchCity, cityName)}
      >
        Add City
      </button>
    </div>
  );
};

const mapState = ({ cityName }) => {
  return { cityName };
};

export default connect(mapState, { changeCityName, fetchCity })(CitySearch);
