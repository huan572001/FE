import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const CategoryAPI = {
  getAllCategory: async (data) => {
    const url = `/${CATEGORY_API_PATH}/getAllCategory`;
    return axiosClient.get(url);
  },
};
