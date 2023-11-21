import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const SpecialAPI = {
  getAllSpecial: async (data) => {
    const url = `/special-management/specials`;
    return axiosClient.get(url);
  },
  createSpecial: async (data) => {
    const url = `/special-management/specials`;
    return axiosClient.post(url, data);
  },
  editSpecial: async (id, data) => {
    const url = `/special-management/specials/${id}`;
    return axiosClient.put(url, data);
  },
  deleteSpecial: async (id) => {
    const url = `/special-management/specials/${id}`;
    return axiosClient.delete(url);
  },
};
