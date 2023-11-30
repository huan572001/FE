import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const OrderAPI = {
  getAll: async (data) => {
    const url = `order-employee/all`;
    return axiosClient.get(url);
  },
  confirm: async (id, data) => {
    const url = `order-employee/update-status-order/${id}`;
    return axiosClient.post(url, data);
  },
};
