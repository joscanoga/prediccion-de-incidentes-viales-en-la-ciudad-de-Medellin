import Comunas from '../../../Assets/comunas.json';

const updatePercentiles = (featureCollection) => {
  const { features = [] } = featureCollection;

  return features.map((f) => {
    return {
      name: f.name,
      type: "Feature",
      properties: {
        name: f.name,
        percentile: 2
      },
      geometry: {
        type: f.type,
        coordinates: f.coordinates,
      },
    };
  });
}

const getComunas = ({ isMap, query = {} }) => {
  const data = updatePercentiles(Comunas);

  if (isMap) {
    return data;
  }

  return data;
}

export default getComunas;