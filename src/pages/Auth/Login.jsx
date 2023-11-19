import Vite from "@/assets/logo.png";
import { loginError } from "@/components/AccountModal/Modal";
import { useAuth } from "@/context/AuthProvider";
import { AuthService } from "@/services";
import { Button, Checkbox, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import {
  VALIDATION_PASSWORD_E002,
  VALIDATION_PHONE_E002,
  VALIDATION_required_E001,
} from "@/constant/validate";
import routerLinks from "@/utils/router-links";

import FormItem from "antd/es/form/FormItem";
const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onFinished = async (values) => {
    if (!values) return;
    try {
      const res = await AuthService.login(values);
      console.log(res);
      if (res?.status) {
        const data = {
          token: res?.token,
          data: res?.data,
        };

        auth.login(data);
        navigate("/");
      } else {
        loginError(res.msg);
      }
    } catch (err) {
      loginError();
      console.log(err);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="left"></div>
        <div className="right">
          <div className="right">
            <div className="login-form-container">
              <div className="heading">Management system</div>

              <Form onFinish={onFinished} className="login-form">
                <FormItem
                  label=""
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: VALIDATION_required_E001,
                    },
                  ]}
                >
                  <Input />
                </FormItem>
                <FormItem
                  label=""
                  name="password"
                  rules={[
                    { required: true, message: VALIDATION_required_E001 },
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder={`**********`}
                    required
                  />
                </FormItem>
                <Row>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-login"
                  >
                    login
                  </Button>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
