import { IBaseApi } from '@/api-module/api-providers/_provider-interface';
// We do not import fetch!

class FetchProvider extends IBaseApi {
  constructor(params) {
    super(params);
    console.log('Fetch api provider created');
  }

  async getData(params) {
    return (await fetch(`${this.baseUrl}${params}`)).text();
  }

  async putData(data) {
    // Actually this method is not fully implemented
    // because we do not have server for this example
    return fetch(this.baseUrl, { method: 'PUT', body: JSON.stringify(data) });
  }
}

export { FetchProvider };
