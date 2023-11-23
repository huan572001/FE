import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const UnitAPI = {
  getAllUnit: async (data) => {
    const url = `/unit-management/units`;
    return axiosClient.get(url);
  },
  createUnit: async (data) => {
    const url = `/unit-management/units`;
    return axiosClient.post(url, data);
  },
  editUnit: async (id, data) => {
    const url = `/unit-management/units/${id}`;
    return axiosClient.put(url, data);
  },
  deleteUnit: async (id) => {
    const url = `/unit-management/units/${id}`;
    return axiosClient.delete(url);
  },
};
