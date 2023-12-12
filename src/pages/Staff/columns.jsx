import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã nhân viên",
      key: "0",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      key: "6",
      render: (_, info) => (
        <>
          <img className="w-8 " src={info?.avatarUrl} alt="anh" />
        </>
      ),
    },
    {
      title: "Tên nhân viên ",
      key: "1",
      dataIndex: "fullname",
    },
    {
      title: "Email ",
      key: "1",
      dataIndex: "email",
    },
    {
      title: "Địa chỉ ",
      key: "1",
      dataIndex: "adress",
    },
    {
      title: "SDT",
      key: "1",
      dataIndex: "phone",
    },
    {
      title: "Hoạt động",
      key: "3",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              e.stopPropagation();
              onDelete(info?.id);
            }}
          />
          {/* <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditStaff"), { state: { ...info } });
            }}
          /> */}
        </>
      ),
    },
  ];
};
