import { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";
import { CategoryAPI } from "@/services/category";
import useCategory from "../hook/categoryHook";
import { dummyRequest } from "@/utils/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const CreateProduct = () => {
  const [IMG, setIMG] = useState();
  const navigate = useNavigate();
  const state = useLocation();
  const [form] = Form.useForm();
  const {
    fetchData,
    category,
    imageUrl,
    setImage,
    handleChange,
    onFinish,
    loading,
  } = useCategory();

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  useEffect(() => {
    if (state?.state?.id) {
      form.setFieldValue("categoryName", state?.state?.categoryName);
      form.setFieldValue("image", state?.state?.imageUrl);
      setImage(state?.state?.imageUrl);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? (
        <h1>Chinh sửa loại sản phẩm</h1>
      ) : (
        <h1>Tạo loại sản phẩm</h1>
      )}
      {state?.state?.id ? <div>Mã loại sản phẩm:{state?.state?.id}</div> : ""}
      <Form
        layout="vertical"
        onFinish={(e) => onFinish(e, state?.state?.id)}
        form={form}
      >
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
              <Upload
                name="avatar"
                listType="picture-card"
                className=" upload-list-inline"
                showUploadList={false}
                customRequest={dummyRequest}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      height: "100%",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
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

        <Form.Item>
          <Button htmlType="submit">
            {state?.state?.id ? (
              <h1>Chinh sửa loại sản phẩm</h1>
            ) : (
              <h1> Tạo loại sản phẩm</h1>
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
