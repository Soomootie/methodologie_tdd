const isLeapYearV1 = (year) => {
  return year % 400 === 0;
};

const isLeapYearV2 = (year) => {
  if (year % 400 === 0)
    return true;
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return false;
}

const isLeapYearV3 = (year) => {
  if (year % 400 === 0)
    return true;
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return year % 4 === 0 && year % 100 !== 0;
}

const isLeapYearV4 = (year) => {
  if (year % 400 === 0)
    return true;
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  if (year % 4 !== 0) {
    return false;
  }
}

module.exports = {isLeapYearV1, isLeapYearV2, isLeapYearV3, isLeapYearV4};
