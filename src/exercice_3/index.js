const jumpLinesAuto = (chain, length) => {
  if (chain.length <= length) {
    return chain;
  }

  if (chain.lastIndexOf(' ') === -1) {
    throw new Error("Insécable");
  }

  let count = 0;
  chain.split(' ').forEach(element => {
    if (count + element.length > length) {
      return;
    } else {
      count += element.length + 1;
    }
  });
  count -= 1;

  return chain.slice(0,count) + "\n" + jumpLinesAuto(chain.slice(count + 1, chain.length), length);
};

module.exports = {jumpLinesAuto};
