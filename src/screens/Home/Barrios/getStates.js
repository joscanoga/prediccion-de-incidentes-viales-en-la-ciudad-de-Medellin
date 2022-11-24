const EstadosUSA = [];

const getStates = () => EstadosUSA.map(({ des, code }) => ({
  value: des,
  label: code,
}));

export default getStates;
