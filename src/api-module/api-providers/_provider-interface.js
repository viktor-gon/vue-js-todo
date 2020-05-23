// This class is "like" an inerface, but actually we do not have interfaces in javascript

class IBaseApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getData(params) {
    console.error('This method should be implemented in child class', params);
  }

  async putData(data) {
    console.error('This method should be implemented in child class', data);
  }
}

export { IBaseApi };
