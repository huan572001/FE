import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
import { CategoryAPI } from "@/services/category";
import { BrandsAPI } from "@/services/brands";

const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [IMG, setIMG] = useState();
  const [special, setSpecial] = useState([]);
  const navigate = useNavigate();
  console.log(IMG);
  const onFinish = async (values) => {
    try {
      const rq = await BrandsAPI.createBrand(values);
      if (rq?.success) {
        showSuccess("Tạo thương hiệu thành công");
        navigate(routerLinks("Brand"));
      }
    } catch (error) {
      showError();
    }
  };

  return (
    <>
      <h1>Tạo thương hiệu</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Row className="myRow">
          <Col span={13}>
            <Form.Item
              label="Tên thương hiệu"
              name="brandName"
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
        <Form.Item>
          <Button htmlType="submit">Tạo thương hiệu</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;