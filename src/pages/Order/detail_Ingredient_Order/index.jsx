
import useTable from "@/hook/useTable";
import { OrderAPI } from "@/services/order";
import {  Modal, Table } from "antd";
import { useEffect } from "react";
import { columns } from "./columns";
import { useState } from "react";
const Product = ({ info }) => {
  const [data,setData]=useState([])
  const getData=async()=>{
    try {
      const rq=await OrderAPI.detail(info?.id)
      setData(rq?.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Chi tiết đơn đặt hàng</h1>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        // onRow={(record) => ({
        //   onClick: () => {
        //     navigate(routerLinks("AddIngredient"), { state: { ...record } });
        //   },
        // })}
      />
    </>
  );
};
export const detailOrder = (info) => {
  return Modal.info({
    centered: true,
    maskClosable: true,
    content: <Product info={info} />,
    icon: null,
    closable: true,
    width: 1000,
  });
};
