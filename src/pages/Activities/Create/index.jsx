import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { ActivitiesAPI } from "@/services/activities";

const CreateProduct = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let rq = [];
      if (state?.state?.id) {
        rq = await ActivitiesAPI.editActivities(state?.state?.id, values);
      } else {
        rq = await ActivitiesAPI.createActivities(values);
      }
      if (rq?.data) {
        showSuccess(
          state?.state?.id ? "Chỉnh sửa thành công" : "Tạo thành công"
        );
        navigate(routerLinks("Activities"));
      }
    } catch (error) {
      showError();
    }
  };
  useEffect(() => {
    if (state?.state?.id) {
      console.log(state?.state);
      form.setFieldValue("name", state?.state?.activityName);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? (
        <h1>Chỉnh sửa Activities</h1>
      ) : (
        <h1>Tạo Activities</h1>
      )}
      {state?.state?.id ? <div>Mã Activities:{state?.state?.id}</div> : ""}
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row className="myRow">
          <Col span={13}>
            <Form.Item
              label="Tên Activities"
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
              <h1>Chỉnh sửa Activities</h1>
            ) : (
              <h1>Tạo Activities</h1>
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
