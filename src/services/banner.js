import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const BannerAPI = {
  getAllBanner: async (data) => {
    const url = `/banner/all`;
    return axiosClient.get(url);
  },
  creatBanner: async (data) => {
    console.log(data);
    const url = `/banner/add`;
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  editBanner: async (data, id) => {
    console.log(data);
    const url = `/banner/update/${id}`;
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  delete: async (id) => {
    const url = `/banner/banners/${id}`;
    return axiosClient.delete(url);
  },
};
