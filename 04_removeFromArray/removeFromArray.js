const removeFromArray = function (passedArray, unwantedNum) {
  const newArray = [];

  for (let i = 0; i < passedArray.length; i++) {
    if (passedArray[i] === unwantedNum) {
      continue;
    }

    newArray.push(passedArray[i]);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
