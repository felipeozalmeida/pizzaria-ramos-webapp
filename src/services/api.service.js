import axios from "axios";

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  get(resource) {
    return axios.get(resource);
  },
  post(resource, data) {
    return axios.post(resource, data);
  },
  patch(resource, data) {
    return axios.patch(resource, data);
  },
  delete(resource) {
    return axios.delete(resource);
  }
};

export default ApiService;
