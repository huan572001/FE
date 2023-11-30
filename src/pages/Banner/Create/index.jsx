import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
import { CategoryAPI } from "@/services/category";
import { ProductAPI } from "@/services/product";
import { BannerAPI } from "@/services/banner";

const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [IMG, setIMG] = useState();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const data = new FormData();
    data.append("idProduct", values?.idProduct);
    data.append("image", IMG);
    try {
      const rq = await BannerAPI.creatBanner(data);
      if (rq?.data) {
        showSuccess("Tạo loại nguyên liệu thành công");
        navigate(routerLinks("Category"));
      }
    } catch (error) {
      showError();
    }
  };
  const handleChange = (value) => {
    setListVT(value);
  };
  const getListProduct = async () => {
    try {
      const req = await ProductAPI.getAllProduct();
      if (req?.data) {
        setProduct(req?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListProduct();
    // getAllIngredient(setOption);
  }, []);
  const handleChangeIMG = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <h1 className="text-4xl">Tạo Banner</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Row className="myRow">
          <Col span={11}>
            <Form.Item
              style={{ marginRight: "24px" }}
              label="Ảnh loại sản phẩm"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <input type="file" onChange={(e) => setIMG(e.target.files[0])} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name={"idProduct"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
        >
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Tags Mode"
            // onChange={handleChange}
            defaultValue={1}
          >
            {product?.map((e, index) => {
              return (
                <Option key={index} value={e?.id}>
                  {e?.productName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Tạo banner</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
