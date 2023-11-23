import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const BannerAPI = {
  getAllCategory: async (data) => {
    const url = `/${CATEGORY_API_PATH}/getAllCategory`;
    return axiosClient.get(url);
  },
  creatCategory: async (data) => {
    console.log(data);
    const url = `/banner/add`;
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
