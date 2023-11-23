import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
import { CategoryAPI } from "@/services/category";
import { BrandsAPI } from "@/services/brands";
import { SuppliersAPI } from "@/services/suppliers";

const CreateProduct = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let rq = [];
      if (state?.state?.id) {
        rq = await SuppliersAPI.editSuppliers(state?.state?.id, values);
      } else {
        rq = await SuppliersAPI.createSuppliers(values);
      }
      if (rq?.data) {
        showSuccess(
          state?.state?.id
            ? "Chỉnh sửa thành công"
            : "Tạo nhà cung cấp thành công"
        );
        navigate(routerLinks("Suppliers"));
      }
    } catch (error) {
      showError();
    }
  };
  useEffect(() => {
    if (state?.state?.id) {
      console.log(state?.state);
      form.setFieldValue("name", state?.state?.supplierName);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? (
        <h1>Chỉnh sửa nhà cung cấp</h1>
      ) : (
        <h1>Tạo nhà cung cấp</h1>
      )}
      {state?.state?.id ? <div>Mã nhà cung cấp:{state?.state?.id}</div> : ""}
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row className="myRow">
          <Col span={13}>
            <Form.Item
              label="Tên nhà cung cấp"
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
              <h1>Chỉnh sửa nhà cung cấp</h1>
            ) : (
              <h1>Tạo nhà cung cấp</h1>
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
