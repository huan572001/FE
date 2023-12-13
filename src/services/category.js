import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const CategoryAPI = {
  getAllCategory: async (data) => {
    const url = `/${CATEGORY_API_PATH}/getAllCategory`;
    return axiosClient.get(url);
  },
  creatCategory: async (data) => {
    const url = `/${CATEGORY_API_PATH}/add`;
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  editCategory: async (data, id) => {
    const url = `/${CATEGORY_API_PATH}/update/${id}`;
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  delete: async (id) => {
    const url = `category/categorys/${id}`;
    return axiosClient.delete(url);
  },
};
