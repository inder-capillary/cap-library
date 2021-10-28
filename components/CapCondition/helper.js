export const validateNonEmptyNumberHelper = (num) => {
  const numPattern = /^-?\d+\.?\d*$/;
  return numPattern.test(num);
};
