import { Button, Form, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import {
  showConfirmError,
  showConfirmSuccess,
  showError,
} from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
const createMeasure = () => {
  const navigate = useNavigate();
  const onChange = async (value) => {
    console.log(value);
    try {
      const respone = await SpecialAPI.createSpecial(value);
      if (respone?.success === true) {
        showConfirmSuccess();
        navigate(routerLinks("Special"));
      } else {
        showError("Tạo không thành công");
      }
    } catch (error) {
      showError();
    }
  };

  return (
    <>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Thêm special
      </h1>
      <Form onFinish={onChange}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,

              message: "Không được để trống!",
            },
            { whitespace: true, message: "Không được để khoảng trắng!" },
            { max: 255, message: "chiều dài không vượt quá 255" },
          ]}
          label="Tên đơn vị vật tư"
        >
          <Input placeholder="tên vật tư" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Tạo</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default createMeasure;
