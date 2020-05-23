// Including minimum, excluding maximum
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getSequence = (min, max, num) => {
  let result = [];

  for (let i = 0; i < num; i++) {
    let randomNum = getRandomInt(min, max);
    while (result.indexOf(randomNum) !== -1) {
      randomNum = getRandomInt(min, max);
    }
    result.push(randomNum);
  }

  return result;
};
