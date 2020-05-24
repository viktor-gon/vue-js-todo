import { IBaseApi } from '@/api-module/api-providers/_provider-interface';
// We do not import localStorage!

class LocalStorageProvider extends IBaseApi {
  constructor(params) {
    super(params);
    this.key = `${this.baseUrl}todo-items`;
    console.log('localStorage api provider created');
  }

  async getData() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  async putData(id, data) {
    const items = this.decodeData();
    if (!items) {
      return;
    }

    const index = items.findIndex(item => item.id == id);

    if (index === -1) {
      return;
    }

    const modified = Object.assign(items[index], data);
    items[index] = modified;

    localStorage.setItem(this.key, this.encodeData(items));
    return modified;
  }

  async postData(data) {
    // add small delay
    await new Promise(resolve => {
      setTimeout(() => resolve(), 1000);
    });

    const createdId = Date.now();

    const newData = this.prepareDataForSave({ ...data, id: createdId });
    localStorage.setItem(this.key, newData);
    return createdId;
  }

  async deleteData(id) {
    const items = this.decodeData();
    if (!items) {
      return false;
    }

    const newItems = items.filter(item => item.id !== id);
    localStorage.setItem(this.key, this.encodeData(newItems));
    return true;
  }

  // Helper methods for this class
  decodeData() {
    const items = localStorage.getItem(this.key);
    if (!items) {
      return;
    }

    return JSON.parse(items);
  }

  encodeData(data) {
    return JSON.stringify(data);
  }

  prepareDataForSave(data) {
    const items = localStorage.getItem(this.key);
    if (!items) {
      return JSON.stringify([data]);
    }

    const existingItems = JSON.parse(items);
    existingItems.push(data);

    return JSON.stringify(existingItems);
  }
}

export { LocalStorageProvider };
