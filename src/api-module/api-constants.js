export const BASE_API_URL = 'http://jsonplaceholder.typicode.com';

import { FetchProvider } from '@/api-module/api-providers/provider-fetch';
import { AxiosProvider } from '@/api-module/api-providers/provider-axios';
import { SuperagentProvider } from '@/api-module/api-providers/provider-superagent';
import { LocalStorageProvider } from '@/api-module/api-providers/provider-local-storage';

export const ApiProvider = {
  axios: 'axios',
  fetch: 'fetch',
  superagent: 'superagent',
  localStorage: 'localStorage',
};

export const API_PROVIDERS = {
  [ApiProvider.axios]: AxiosProvider,
  [ApiProvider.fetch]: FetchProvider,
  [ApiProvider.superagent]: SuperagentProvider,
  [ApiProvider.localStorage]: LocalStorageProvider,
};
