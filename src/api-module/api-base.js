import { IBaseApi } from '@/api-module/api-providers/_provider-interface';
import { BASE_API_URL, API_PROVIDERS } from '@/api-module/api-constants';

class Api extends IBaseApi {
  constructor(providerType) {
    const providerApi = API_PROVIDERS[providerType];

    if (!providerApi) {
      throw 'Unknown api provider';
    }

    super();
    this.provider = new providerApi(BASE_API_URL);
  }

  async getData(params) {
    return await this.provider.getData(params);
  }

  async putData(id, data) {
    return await this.provider.putData(id, data);
  }

  async postData(data) {
    return await this.provider.postData(data);
  }
}

export { Api };
