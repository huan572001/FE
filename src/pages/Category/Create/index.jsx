import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import moment from "moment";
import { keyUser } from "@/constant/auth";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { SpecialAPI } from "@/services/special";

const CreateProduct = () => {
  const [option, setOption] = useState([]);
  const [listVT, setListVT] = useState([]);
  const [special, setSpecial] = useState([]);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values.image.target.value);
    // try {
    //   const rq = await PromosionAPI.createPromotion(data);
    //   if (rq?.success) {
    //     showSuccess("Tạo khuyến mãi thành công");
    //     navigate(routerLinks("Promotion"));
    //   }
    // } catch (error) {
    //   showError();
    // }
  };
  const handleChange = (value) => {
    setListVT(value);
  };
  const getListProduct = async () => {
    try {
      const req = await SpecialAPI.getAllSpecial();
      if (req?.data) {
        setSpecial(req?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListProduct();
    // getAllIngredient(setOption);
  }, []);
  const getIngrediantByID = (id) => {
    let tmp = "";
    option.forEach((e) => {
      if (e?.id === id) {
        tmp = e?.name;
      }
    });
    return tmp;
  };
  const handleChangeIMG = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const disabledDate = (current) => {
    // Cho phép chọn các ngày trong quá khứ
    return current && current <= moment().endOf("day");
  };
  return (
    <>
      <h1>Tạo khuyến mãi</h1>
      <input type="file" />
      <Form layout="vertical" onFinish={onFinish}>
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
            ></Form.Item>
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
        <Form.Item
          name={"đsads"}
          // rules={[
          //   {
          //     required: true,
          //     message: "Không được để trống!",
          //   },
          // ]}
        >
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Tags Mode"
            onChange={handleChange}
          >
            {special?.map((e, index) => {
              return (
                <Option key={index} value={e?.id}>
                  {e?.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Tạo loại sản phẩm</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
