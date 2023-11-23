import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { UnitAPI } from "@/services/unit";

const CreateProduct = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let rq = [];
      if (state?.state?.id) {
        rq = await UnitAPI.editUnit(state?.state?.id, values);
      } else {
        rq = await UnitAPI.createUnit(values);
      }
      if (rq?.data) {
        showSuccess(
          state?.state?.id ? "Chỉnh sửa thành công" : "Tạo thành công"
        );
        navigate(routerLinks("Unit"));
      }
    } catch (error) {
      showError();
    }
  };
  useEffect(() => {
    if (state?.state?.id) {
      console.log(state?.state);
      form.setFieldValue("name", state?.state?.unitName);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? <h1>Chỉnh sửa Unit</h1> : <h1>Tạo Unit</h1>}
      {state?.state?.id ? <div>Mã Unit:{state?.state?.id}</div> : ""}
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row className="myRow">
          <Col span={13}>
            <Form.Item
              label="Tên Unit"
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
            {state?.state?.id ? <h1>Chỉnh sửa Unit</h1> : <h1>Tạo Unit </h1>}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
