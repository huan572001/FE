import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { ActivitiesAPI } from "@/services/activities";
import { BrandsAPI } from "@/services/brands";
import { CategoryAPI } from "@/services/category";
import { EnvironmentsAPI } from "@/services/environments";
import { ProductAPI } from "@/services/product";
import { SuppliersAPI } from "@/services/suppliers";
import { UnitAPI } from "@/services/unit";
import { fomatData } from "@/utils/formData";
import routerLinks from "@/utils/router-links";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState();
  const [environment, setEnvironment] = useState();
  const [supplier, setSupplier] = useState();
  const [activiti, setActiviti] = useState();
  const [brand, setBrand] = useState();
  const [unit, setUnit] = useState();
  const [suppliers, setSuppliers] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [image, setIMG] = useState();

  const getAllCategory = async () => {
    try {
      const rq = await CategoryAPI.getAllCategory();
      if (rq?.data) {
        setCategory(rq?.data);
      }
    } catch (error) {}
  };
  const getAllEnvironment = async () => {
    try {
      const rq = await EnvironmentsAPI.getAllEnvironments();
      if (rq?.data) {
        setEnvironment(rq?.data);
      }
    } catch (error) {}
  };
  const getAllSupplier = async () => {
    try {
      const rq = await SuppliersAPI.getAllSuppliers();
      if (rq?.data) {
        setSupplier(rq?.data);
      }
    } catch (error) {}
  };
  const getAllactivity = async () => {
    try {
      const rq = await ActivitiesAPI.getAllActivities();
      if (rq?.data) {
        setActiviti(rq?.data);
      }
    } catch (error) {}
  };
  const getBrand = async () => {
    try {
      const rq = await BrandsAPI.getAllBrand();
      if (rq?.data) {
        setBrand(rq?.data);
      }
    } catch (error) {}
  };
  const getUnit = async () => {
    try {
      const rq = await UnitAPI.getAllUnit();
      if (rq?.data) {
        setUnit(rq?.data);
      }
    } catch (error) {}
  };
  const getSupplies = async () => {
    try {
      const rq = await SuppliersAPI.getAllSuppliers();
      if (rq?.data) {
        setSuppliers(rq?.data);
      }
    } catch (error) {}
  };
  const onFinish = async (values, id) => {
    try {
      let data = fomatData({
        ...values,
        image: image,
      });
      let rq = [];
      if (id) {
        rq = await ProductAPI.editProduct(id, data);
      } else {
        rq = await ProductAPI.createProduct(data);
      }
      if (rq?.data) {
        showSuccess(id ? "Chỉnh sửa thành công" : "Tạo thành công");
        navigate(routerLinks("Product"));
      }
    } catch (error) {
      showError(error);
    }
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setIMG(info.file.originFileObj);
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const fetchData = () => {
    getAllCategory();
    getAllEnvironment();
    getAllSupplier();
    getAllactivity();
    getBrand();
    getUnit();
    getSupplies();
  };
  useEffect(() => fetchData(), []);
  return {
    fetchData,
    category,
    environment,
    suppliers,
    activiti,
    brand,
    unit,
    supplier,
    imageUrl,
    handleChange,
    onFinish,
    loading,
  };
};

export default useProduct;
