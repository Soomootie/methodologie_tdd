const join = (list, separator) => {
  if (!Array.isArray(list)) {
    throw new Error("List is not an array");
  }

  if (typeof separator !== 'string') {
    throw new Error("The separator should be a string");
  }

  let result = "";

  list.forEach(element => {
    if (typeof element !== 'string') {
      throw new Error("An element of the list is not a string");
    }
    result = result.concat(element, separator);
  });

  return result.slice(0, -1);
};

const mean = (list) => {
  if (!Array.isArray(list)) {
    throw new Error("List is not an array");
  }

  let sum = 0;

  list.forEach(element => {
    if (element % 1 !== 0){
      throw new Error("An element of the list is not an integer")
    }
    sum += element;
  })

  if (list.length === 0)
    return 0;

  return sum / list.length;
};


module.exports = {join, mean};
