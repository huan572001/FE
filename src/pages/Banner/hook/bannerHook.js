import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { BannerAPI } from "@/services/banner";
import { CategoryAPI } from "@/services/category";
import routerLinks from "@/utils/router-links";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useBanner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [image, setIMG] = useState();

  const onFinish = async (values, id) => {
    try {
      let rq = [];
      const data = new FormData();
      data.append("idProduct", values?.idProduct);
      data.append("image", image);
      if (id) {
        rq = await BannerAPI.editBanner(data, id);
        if (rq?.data) {
          showSuccess("Chỉnh sửa nguyên liệu thành công");
          navigate(routerLinks("Banner"));
        }
      } else {
        rq = await BannerAPI.creatBanner(data);
        if (rq?.data) {
          showSuccess("Tạo loại nguyên liệu thành công");
          navigate(routerLinks("Banner"));
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
  return {
    imageUrl,
    setImage,
    handleChange,
    onFinish,
    loading,
  };
};

export default useBanner;
