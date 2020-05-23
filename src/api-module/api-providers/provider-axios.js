import { IBaseApi } from '@/api-module/api-providers/_provider-interface';
import axios from 'axios';

class AxiosProvider extends IBaseApi {
  constructor(params) {
    super(params);
    console.log('Axios api provider created');
  }

  async getData(params) {
    return (await axios.get(`${this.baseUrl}${params}`)).data;
  }

  async putData(data) {
    // Actually this method is not fully implemented
    // because we do not have server for this example
    return axios.put(this.baseUrl, data);
  }
}

export { AxiosProvider };
