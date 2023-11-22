import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const SuppliersAPI = {
  getAllSuppliers: async (data) => {
    const url = `/supplier-management/suppliers`;
    return axiosClient.get(url);
  },
  createSuppliers: async (data) => {
    const url = `/supplier-management/suppliers`;
    return axiosClient.post(url, data);
  },
  editSuppliers: async (id, data) => {
    const url = `/supplier-management/suppliers/${id}`;
    return axiosClient.put(url, data);
  },
  deleteSuppliers: async (id) => {
    const url = `/supplier-management/suppliers/${id}`;
    return axiosClient.delete(url);
  },
};
