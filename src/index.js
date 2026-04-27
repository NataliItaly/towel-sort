module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  return matrix.reduce(
    (acc, item, i) =>
      i % 2 === 0 ? [...acc, ...item] : [...acc, ...item.slice().reverse()],
    []
  );
};
