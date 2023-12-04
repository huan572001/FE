
import { OrderProductAPI } from "@/services/orderProduct";
import { Button, Card, Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect, useState } from "react";
const { TextArea } = Input;
const Product = ({ info }) => {
  const [listVT, setListVT] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await OrderProductAPI.getDetail(info?.id);
        // if (req?.success) {
          setListVT(req?.data);
        // }
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <>
      <h1>Hóa đơn sản phẩm</h1>
      <Card>
        <div className="flex justify-between">
          <div className="flex">
          <div>Mã hóa đơn:</div>
          <div>{info?.id}</div>
          </div>
          <div className="flex">
            <div>Thời gian tạo:</div>
            <div>{info?.date_import}</div>
          </div>
          <div className="flex">
            <div>Tên nhân viên: </div>
            <div>{info?.fullname}</div>
          </div>
        </div>
        
      </Card>
      
      {listVT?.map((e, index) => {
        return (
          <Card key={index}>
            <div className="flex justify-between">
                <div>Mã sản phẩm:{e?.id}</div>
                <div>Tên sản phẩm: {e?.product_name}</div>
                <div>Số lượng: {e?.quantity}</div>
                <div>Giá: {e?.price_import}</div>
              </div>
          </Card>
        );
      })}
    </>
  );
};
export const detailOrderProduct = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <Product info={info} />,
    icon: null,
    closable: true,
    width: 1000,
  });
};
