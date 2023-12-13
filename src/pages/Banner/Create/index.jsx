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
import { ProductAPI } from "@/services/product";
import { BannerAPI } from "@/services/banner";
import useBanner from "../hook/bannerHook";
import { dummyRequest } from "@/utils/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const CreateBanner = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { imageUrl, setImage, handleChange, onFinish, loading } = useBanner();
  const state = useLocation();
  const [form] = Form.useForm();
  const getListProduct = async () => {
    try {
      const req = await ProductAPI.getAllProduct();
      if (req?.data) {
        setProduct(req?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    getListProduct();
    // getAllIngredient(setOption);
  }, []);
  useEffect(() => {
    if (state?.state?.id) {
      form.setFieldValue("idProduct", state?.state?.product?.id);
      form.setFieldValue("image", state?.state?.url_banner);
      setImage(state?.state?.url_banner);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.id ? (
        <h1 className="text-4xl">Chỉnh sửa Banner</h1>
      ) : (
        <h1 className="text-4xl">Tạo Banner</h1>
      )}
      <Form
        layout="vertical"
        onFinish={(e) => onFinish(e, state?.state?.id)}
        form={form}
      >
        <Row className="myRow">
          <Col span={11}>
            <Form.Item
              // style={{ marginRight: "24px" }}
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
        </Row>
        <Form.Item
          name={"idProduct"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
        >
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Tags Mode"
            // onChange={handleChange}
            defaultValue={1}
          >
            {product?.map((e, index) => {
              return (
                <Option key={index} value={e?.id}>
                  {e?.productName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">
            {state?.state?.id ? "Chỉnh sửa Banner" : "Tạo Banner"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateBanner;
