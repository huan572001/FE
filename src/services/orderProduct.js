import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const OrderProductAPI = {
  getAll: async (data) => {
    const url = `/order-employee/all-import-product`;
    return axiosClient.post(url,data);
  },
  create: async (id,data) => {
    const url = `/order-employee/import/${id}`;
    return axiosClient.post(url, data);
  },
  getDetail:async (id) => {
    const url = `/order-employee/import-product/${id}`;
    return axiosClient.get(url);
  },
};
