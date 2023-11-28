import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const ProductAPI = {
  getAllProduct: async (data) => {
    const url = `product/allProduct`;
    return axiosClient.get(url);
  },
  createProduct: async (data) => {
    const url = `product/add`;
    return axiosClient.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  editProduct: async (id, data) => {
    const url = `product/update/${id}`;
    return axiosClient.put(url, data);
  },
  deleteProduct: async (id) => {
    const url = `/product/delete/${id}`;
    return axiosClient.delete(url);
  },
};
