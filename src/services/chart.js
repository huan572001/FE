import { CATEGORY_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export const ChartAPI = {
  TopProduct: async (data) => {
    const url = `report-admin/best-sell`;
    return axiosClient.post(url, data);
  },
  report: async (data) => {
    const url = `report-admin/report-excel`;
    return axiosClient.post(url, data);
  },
  getProductByDate: async (id) => {
    const url = `report-admin/month/${id}`;
    return axiosClient.get(url);
  },
  deleteBrand: async (id) => {
    const url = `/brand-management/brands/${id}`;
    return axiosClient.delete(url);
  },
};
