const isValidInputText = (value, min = 1, max = Infinity) => {
  const inRange = new RegExp(`^(.){${min},${max}}$`);
  const minRange = new RegExp(`^(.){${min},}$`);

  const regex = max === Infinity ? minRange : inRange;
  return regex.test(value);
};

module.exports = {
  isValidInputText
};
