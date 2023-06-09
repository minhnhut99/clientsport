import axiosClient from './axiosClient';

const BASE_URL = "http://localhost:8081";
const brandApi = {
  getAll: async (status) => {
    const url = `${BASE_URL}/api/getallbrandbystatus/${status}`;
    try {
      const rs = await axiosClient.get(url, status);
      return rs.data;
    } catch (error) {
      console.log("error", error);
    }
  },
  create: async (payload) => {
    const url = `${BASE_URL}/admin/createbrand`;
    try {
      const rs = await axiosClient.post(url, payload);
      return rs.data;
    } catch (error) {
      console.log("error", error);
    }
  },
  update: async (payload) => {
    const url = `${BASE_URL}/admin/updatebrand`;
    try {
      const rs = await axiosClient.post(url, payload);
      return rs.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default brandApi;
