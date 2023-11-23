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
import { ActivitiesAPI } from "@/services/activities";
import { EnvironmentsAPI } from "@/services/environments";

const CreateProduct = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let rq = [];
      if (state?.state?.id) {
        rq = await EnvironmentsAPI.editEnvironments(state?.state?.id, values);
      } else {
        rq = await EnvironmentsAPI.createEnvironments(values);
      }
      if (rq?.data) {
        showSuccess(
          state?.state?.id ? "Chỉnh sửa thành công" : "Tạo thành công"
        );
        navigate(routerLinks("Environments"));
      }
    } catch (error) {
      showError();
    }
  };
  useEffect(() => {
    if (state?.state?.id) {
      console.log(state?.state);
      form.setFieldValue("name", state?.state?.environment_name);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? (
        <h1>Chỉnh sửa Environments</h1>
      ) : (
        <h1>Tạo Environments</h1>
      )}
      {state?.state?.id ? <div>Mã Environments:{state?.state?.id}</div> : ""}
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row className="myRow">
          <Col span={13}>
            <Form.Item
              label="Tên Environments"
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
              <h1>Chỉnh sửa Environments</h1>
            ) : (
              <h1>Tạo Environments</h1>
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
