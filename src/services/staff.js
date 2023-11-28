import { STAFF_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const StaffAPI = {
  getAllStaff: async (data) => {
    const url = `${STAFF_API_PATH}/getAllEmployee`;
    return axiosClient.get(url);
  },
  createStaff: async (data) => {
    const url = `${STAFF_API_PATH}/createAccEmployee`;
    return axiosClient.post(url, data);
  },
  editStaff: async (id, data) => {
    const url = `${STAFF_API_PATH}/update/${id}`;
    return axiosClient.put(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  deleteStaff: async (id) => {
    const url = `/${STAFF_API_PATH}/delete/${id}`;
    return axiosClient.get(url);
  },
};
