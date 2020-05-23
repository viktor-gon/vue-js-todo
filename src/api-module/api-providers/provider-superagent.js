import { IBaseApi } from '@/api-module/api-providers/_provider-interface';
import superagent from 'superagent';

class SuperagentProvider extends IBaseApi {
  constructor(params) {
    super(params);
    console.log('Superagent api provider created');
  }

  async getData(params) {
    return (await superagent.get(`${this.baseUrl}${params}`)).text;
  }

  async putData(data) {
    // Actually this method is not fully implemented
    // because we do not have server for this example
    return superagent.put(this.baseUrl).send(data);
  }
}

export { SuperagentProvider };
