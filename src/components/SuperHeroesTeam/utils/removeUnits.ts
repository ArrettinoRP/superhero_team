export const removeUnits = (untis: string) => {
  const number = untis.split('');
  number.splice(number.length - 3, 3);
  return number.join('');
};
