import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
import { CategoryAPI } from "@/services/category";

const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [IMG, setIMG] = useState();
  const [special, setSpecial] = useState([]);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const data = new FormData();
    data.append("categoryName", values?.categoryName);
    data.append("ids_special", values?.ids_special || 1);
    data.append("image", IMG);
    try {
      const rq = await CategoryAPI.creatCategory(data);
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
      const req = await SpecialAPI.getAllSpecial();
      if (req?.data) {
        setSpecial(req?.data);
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
      <h1>Tạo loại sản phẩm</h1>
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
          <Col span={13}>
            <Form.Item
              label="Tên loại sản phẩm"
              name="categoryName"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name={"ids_special"}
          // rules={[
          //   {
          //     required: true,
          //     message: "Không được để trống!",
          //   },
          // ]}
        >
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Tags Mode"
            onChange={handleChange}
            defaultValue={1}
          >
            {special?.map((e, index) => {
              return (
                <Option key={index} value={e?.id}>
                  {e?.nameSpecial}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Tạo loại sản phẩm</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
