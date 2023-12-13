import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { CategoryAPI } from "@/services/category";
import routerLinks from "@/utils/router-links";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useCategory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState();
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
  const onFinish = async (values, id) => {
    const data = new FormData();
    data.append("image", image);
    try {
      let rq = [];
      if (id) {
        data.append("name", values?.categoryName);
        rq = await CategoryAPI.editCategory(data, id);
        if (rq?.data) {
          showSuccess("Chỉnh sửa loại nguyên liệu thành công");
          navigate(routerLinks("Category"));
        }
      } else {
        data.append("categoryName", values?.categoryName);
        rq = await CategoryAPI.creatCategory(data);
        if (rq?.data) {
          showSuccess("Tạo loại nguyên liệu thành công");
          navigate(routerLinks("Category"));
        }
      }
    } catch (error) {
      showError();
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
  const setImage = (data) => {
    setImageUrl(data);
    setIMG(data);
  };
  const fetchData = () => {
    getAllCategory();
  };
  useEffect(() => fetchData(), []);
  return {
    fetchData,
    category,
    imageUrl,
    setImage,
    handleChange,
    onFinish,
    loading,
  };
};

export default useCategory;
