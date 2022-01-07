import React from "react";
import CityItem from "./CityItem";
import { connect } from 'react-redux';

const CityList = ({ cities }) => {
  return (
    <div>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </div>
  );
};

const mapState = ({ cities }) => {
  return { cities };
};

export default  connect(mapState)(CityList);
