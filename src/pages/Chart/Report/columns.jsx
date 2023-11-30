import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Tên sản phẩm",
      key: "4",
      dataIndex: "tenSanPham",
    },
    {
      title: "Tổng số lượng bán",
      key: "1",
      dataIndex: "tongSoLuongBan",
    },
    {
      title: "Thời gian",
      key: "1",
      dataIndex: "ngay",
    },
    {
      title: "Tổng doanh thu",
      key: "1",
      dataIndex: "tongDoanhThu",
    },
    {
      title: "Tổng lợi nhuận",
      key: "1",
      dataIndex: "tongLoiNhuan",
    },
  ];
};
