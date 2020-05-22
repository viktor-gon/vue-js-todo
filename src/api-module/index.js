import { setTimeout } from 'core-js';

const loadData = async () => {
  // https://www.random.org/strings/?num=10&len=2&digits=on&upperalpha=off&loweralpha=off&unique=on&format=plain&rnd=new
  // make real request to get random numbers!!!
  // and use as indexes of our hardcoded data:
  const data = await fetch(
    'https://www.random.org/strings/?num=10&len=2&digits=on&upperalpha=off&loweralpha=off&unique=on&format=plain&rnd=new'
  );
  const result = (await data.text())
    .split('\n')
    .map(item => parseInt(item, 10));
  result.pop();
  return result;
};

const updateData = async (id, code) => {
  // Update item by id...
  const updatedCode = await new Promise(resolve => {
    setTimeout(() => resolve(code), 2000);
  });

  return updatedCode;
};

export { loadData, updateData };
