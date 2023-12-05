import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const OrderAPI = {
  getAll: async (data) => {
    const url = `order-employee/all`;
    return axiosClient.post(url,data);
  },
  confirm: async (id, data) => {
    const url = `order-employee/update-status-order/${id}`;
    return axiosClient.post(url, data);
  },
  detail: async (id) => {
    const url = `order-employee/detail/${id}`;
    return axiosClient.get(url);
  },
};
