import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const BrandsAPI = {
  getAllBrand: async (data) => {
    const url = `brand-management/brands`;
    return axiosClient.get(url);
  },
  createBrand: async (data) => {
    const url = `/brand-management/brands`;
    return axiosClient.post(url, data);
  },
  editBrand: async (id, data) => {
    const url = `/brand-management/brands/${id}`;
    return axiosClient.put(url, data);
  },
  deleteBrand: async (id) => {
    const url = `/brand-management/brands/${id}`;
    return axiosClient.delete(url);
  },
};
