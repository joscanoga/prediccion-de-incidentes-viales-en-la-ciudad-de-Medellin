import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";

import Filters from './Filters';
import floatFormat from '../../../floatFormat';
import GeoMap from '../../../components/GeoMap/GeoMap';
import getComunas from './getComunas';
import Loading from '../../../components/Loading';

const Barrios = ({ open, setOpen }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = (query) => {
    setIsLoading(true);

    const res = getComunas({ isMap: true, query });

    setList(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <GeoMap data={list} />
      <Filters
        open={open}
        setOpen={setOpen}
        getColleges={getData}
      />
      <Loading open={isLoading} />
    </div>
  );
}

Barrios.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};


export default Barrios;
