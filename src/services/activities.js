import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const ActivitiesAPI = {
  getAllActivities: async (data) => {
    const url = `/activity-management/activities`;
    return axiosClient.get(url);
  },
  createActivities: async (data) => {
    const url = `/activity-management/activities`;
    return axiosClient.post(url, data);
  },
  editActivities: async (id, data) => {
    const url = `/activity-management/activities/${id}`;
    return axiosClient.put(url, data);
  },
  deleteActivities: async (id) => {
    const url = `/activity-management/activities/${id}`;
    return axiosClient.delete(url);
  },
};
