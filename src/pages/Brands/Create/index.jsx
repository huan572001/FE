import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
import { CategoryAPI } from "@/services/category";
import { BrandsAPI } from "@/services/brands";

const CreateProduct = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let rq = [];
      if (state?.state?.id) {
        rq = await BrandsAPI.editBrand(state?.state?.id, values);
      } else {
        rq = await BrandsAPI.createBrand(values);
      }
      if (rq?.data) {
        showSuccess(
          state?.state?.id
            ? "Chỉnh sửa thành công"
            : "Tạo thương hiệu thành công"
        );
        navigate(routerLinks("Brand"));
      }
    } catch (error) {
      showError();
    }
  };
  useEffect(() => {
    if (state?.state?.id) {
      form.setFieldValue("name", state?.state?.brandName);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? (
        <h1>Chỉnh sửa thương hiệu</h1>
      ) : (
        <h1>Tạo thương hiệu</h1>
      )}
      {state?.state?.id ? <div>Mã nhà thương hiệu:{state?.state?.id}</div> : ""}
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row className="myRow">
          <Col span={13}>
            <Form.Item
              label="Tên thương hiệu"
              name="name"
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
          <Button htmlType="submit">
            {state?.state?.id ? (
              <h1>Chỉnh sửa thương hiệu</h1>
            ) : (
              <h1>Tạo thương hiệu</h1>
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
