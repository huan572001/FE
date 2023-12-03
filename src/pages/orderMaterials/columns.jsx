import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã hóa đơn",
      key: "0",
      dataIndex: "id",
    },
    {
      title: "Ngày tạo",
      key: "1",
      dataIndex: "date_import",
    },
    {
      title: "Mã nhân viên",
      key: "1",
      dataIndex: "id_employee",
    },
    {
      title: "Hoạt động",
      key: "3",
      render: (_, info) => (
        <>
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditBrand"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
