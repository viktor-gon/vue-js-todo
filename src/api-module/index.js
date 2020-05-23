// import { setTimeout } from 'core-js';
import { Api } from './api-base';
import { ApiProvider } from '@/api-module/api-constants';

// Here we may select which api client to use:
// fetch / axios / superagent / localStorage
// Any other api client may be also used by implementing
// coresponding provider and adding it's reference into api-constants

const api = new Api(ApiProvider.localStorage);

const getData = async () => {
  // https://www.random.org/strings/?num=10&len=2&digits=on&upperalpha=off&loweralpha=off&unique=on&format=plain&rnd=new
  // Make real request to get random numbers!!!
  // and use as indexes of our hardcoded data:
  const data = await api.getData(
    '/strings/?num=10&len=2&digits=on&upperalpha=off&loweralpha=off&unique=on&format=plain&rnd=new'
  );
  console.log(data);

  if (!data) {
    return data;
  }

  //const result = data.split('\n').map(item => parseInt(item, 10));
  //result.pop();
  return data;
};

const putData = async (id, data) => {
  try {
    const updatedCode = await api.putData(id, data);
    return updatedCode;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const postData = async data => {
  try {
    const createdId = await api.postData(data);
    return createdId;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

export { getData, putData, postData };
