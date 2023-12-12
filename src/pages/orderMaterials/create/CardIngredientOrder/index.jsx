import { ProductAPI } from "@/services/product";
import { normalizeNumber } from "@/utils/getFirstPathCode";
import { Button, Card, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";

const CardIngredient = ({ setData }) => {
  const [form] = Form.useForm();
  const [product,setProduct]=useState([]);
  const { Option } = Select;

  const getAllProduct = async () => {
    try {
      const rq = await ProductAPI.getAllProductAdmin();
      setProduct(rq?.data);
      
    } catch (error) {}
  };
  useEffect(()=>{
    getAllProduct();
  },[])
  const handleChange = (value) => {
    const data = product.find((item) => item?.id === value?.id);
    setData((e) => [
      ...e,
      { ...value,name:data?.productName},
    ]);
    setProduct((e) => {
      return e.filter((item) => item?.id !== value?.id);
    });
    form.resetFields();
  };

  return (
    <>
      <Card>
        <Form onFinish={handleChange} form={form}>
          <Form.Item
            label="Sản phẩm"
            name="id"
            // rules={[{ required: true, message: "Không được để trống!" }]}
          >
            <Select>
              {product?.map((item) => (
                <Option key={item?.id} value={item?.id}>
                  {item?.productName} 
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            style={{ marginRight: "24px" }}
            label="Giá nhập"
            name="price"
            rules={[{ required: true, message: "Không được để trống!" }]}
            normalize={normalizeNumber}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item
            label="Sô lượng nhập"
            name="qty"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
            normalize={normalizeNumber}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Thêm</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default CardIngredient;
