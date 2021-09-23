import axiosClient from 'api/axiosClient';

const marketsApi = {
  get: () => {
    const url = '/markets';
    return axiosClient.get(url);
  },
};

export default marketsApi;
