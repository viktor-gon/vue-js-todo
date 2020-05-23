// import { setTimeout } from 'core-js';
import { Api } from './api-base';
import { ApiProvider } from '@/api-module/api-constants';

// Here we may select which api client to use:
// fetch / axios / superagent / localStorage
// Any other api client may be also used by implementing
// coresponding provider and adding it's reference into api-constants

const api = new Api(ApiProvider.fetch);

const getData = async () => {
  const data = await api.getData('/todos');

  if (!data) {
    return data;
  }

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
