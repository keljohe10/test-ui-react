import axiosClient from './axiosClient';

const get = async (url) => {
  const result = await axiosClient.get(url);
  return result.data;
};

const patch = async (url) => {
  await axiosClient.patch(url);
};

const request = {
  get,
  patch,
};

export default request;
