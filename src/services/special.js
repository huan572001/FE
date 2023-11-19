import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const SpecialAPI = {
  getAllSpecial: async (data) => {
    const url = `/special-management/specials`;
    return axiosClient.get(url);
  },
};
