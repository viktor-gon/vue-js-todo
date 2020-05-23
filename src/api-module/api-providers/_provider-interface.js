// This class is "like" an inerface, but actually we do not have interfaces in javascript

class IBaseApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.message = 'This method should be implemented in child class';
  }

  async getData(params) {
    console.error(this.message, params);
  }

  async putData(id, data) {
    console.error(this.message, id, data);
  }

  async postData(data) {
    console.error(this.message, data);
  }

  async deleteData(id) {
    console.error(this.message, id);
  }
}

export { IBaseApi };
