const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let verticalMatrix = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalMatrix.push([]);
  }
  for (let x = 0; x < letters.length; x++) {
    for (let j = 0; j < letters[j].length; j++) {
      verticalMatrix[j][x] = letters[x][j];
    }
  }
  const verticalJoin = verticalMatrix.map((ls) => ls.join(""));
  for (let h of verticalJoin) {
    if (h.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
