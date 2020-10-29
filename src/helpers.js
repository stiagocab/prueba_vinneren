export const doubleNumber = (text) => {
  if (Number(text) <= 9) return `0${text}`;
  return text;
};
