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
import useProduct from "../hook/productHook";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { dummyRequest } from "@/utils/upload";
import "./index.less";
const { TextArea } = Input;
const CreateProduct = () => {
  const state = useLocation();
  const [form] = Form.useForm();
  const {
    onFinish,
    category,
    activiti,
    brand,
    environment,
    unit,
    supplier,
    handleChange,
    imageUrl,
    setImage,
    loading,
  } = useProduct();
  const [edit, setEdit] = useState(false);

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
      if (state?.state?.view) {
        setEdit(true);
      }
      form.setFieldValue("productName", state?.state?.productName);
      form.setFieldValue("stockQuantity", state?.state?.stockQuantity);
      form.setFieldValue("price", state?.state?.price);
      form.setFieldValue("description", state?.state?.description);
      form.setFieldValue("category_id", state?.state?.category?.id);
      form.setFieldValue("id_environment", state?.state?.environment?.id);
      form.setFieldValue("id_supplier", state?.state?.supplier?.id);
      form.setFieldValue("id_activity", state?.state?.activity?.id);
      form.setFieldValue("id_brand", state?.state?.brand?.id);
      form.setFieldValue("id_unit", state?.state?.unit?.id);
      form.setFieldValue("", state?.state?.imageUrl);
      setImage(state?.state?.imageUrl);
    }
  }, [state?.state?.id]);
  return (
    <>
      {state?.state?.view ? (
        <h1 className="text-4xl">Thông tin chi tiết sản phẩm</h1>
      ) : (
        <>
          {state?.state?.id ? (
            <h1 className="text-4xl">Chỉnh sửa sản phẩm</h1>
          ) : (
            <h1 className="text-4xl">Tạo sản phẩm</h1>
          )}
        </>
      )}
      {state?.state?.id ? <div>Mã sản phẩm:{state?.state?.id}</div> : ""}

      <Form
        layout="vertical"
        onFinish={(e) => onFinish(e, state?.state?.id)}
        form={form}
        disabled={edit}
      >
        <div className="grid lg:flex">
          <Form.Item
            style={{ marginRight: "24px" }}
            label="Ảnh loại sản phẩm"
            name=""
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

          <Row className="myRow" gutter={12}>
            <Col lg={8} md={12}>
              <Form.Item
                label="Tên sản phẩm"
                name="productName"
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
            <Col lg={8} md={12}>
              <Form.Item
                label="Loại sản phẩm"
                name={"category_id"}
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
                  placeholder="Loại sản phẩm"
                >
                  {category?.map((e, index) => {
                    return (
                      <Option key={index} value={e?.id}>
                        {e?.categoryName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="environment"
                name={"id_environment"}
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
                  placeholder="environment"
                >
                  {environment?.map((e, index) => {
                    return (
                      <Option key={index} value={e?.id}>
                        {e?.environment_name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="activity"
                name={"id_activity"}
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
                  placeholder="activity"
                >
                  {activiti?.map((e, index) => {
                    return (
                      <Option key={index} value={e?.id}>
                        {e?.activityName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="Brand"
                name={"id_brand"}
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
                  placeholder="brandName"
                >
                  {brand?.map((e, index) => {
                    return (
                      <Option key={index} value={e?.id}>
                        {e?.brandName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="Unit"
                name={"id_unit"}
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
                  placeholder="unitName"
                >
                  {unit?.map((e, index) => {
                    return (
                      <Option key={index} value={e?.id}>
                        {e?.unitName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="Supplier"
                name={"id_supplier"}
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
                  placeholder="Supplier"
                >
                  {supplier?.map((e, index) => {
                    return (
                      <Option key={index} value={e?.id}>
                        {e?.supplierName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="Giá"
                name={"price"}
                rules={[
                  {
                    required: true,
                    message: "Không được để trống!",
                  },
                ]}
              >
                <Input type="number" min={0} />
              </Form.Item>
            </Col>
            <Col lg={8} md={12}>
              <Form.Item
                label="Số lượng nhập"
                name={"stockQuantity"}
                rules={[
                  {
                    required: true,
                    message: "Không được để trống!",
                  },
                ]}
              >
                <Input type="number" min={0} />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Form.Item
          label="Mô tả"
          name={"description"}
          rules={[
            {
              required: true,
              message: "Không được để trống!",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Mô tả" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            {state?.state?.view ? (
              ""
            ) : (
              <>
                {state?.state?.id ? (
                  <h1>Chỉnh sửa sản phẩm</h1>
                ) : (
                  <h1>Tạo sản phẩm</h1>
                )}
              </>
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
