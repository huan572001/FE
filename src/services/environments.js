import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const EnvironmentsAPI = {
  getAllEnvironments: async (data) => {
    const url = `/environment-management/environments`;
    return axiosClient.get(url);
  },
  createEnvironments: async (data) => {
    const url = `/environment-management/environments`;
    return axiosClient.post(url, data);
  },
  editEnvironments: async (id, data) => {
    const url = `/environment-management/environments/${id}`;
    return axiosClient.put(url, data);
  },
  deleteEnvironments: async (id) => {
    const url = `/environment-management/environments/${id}`;
    return axiosClient.delete(url);
  },
};
