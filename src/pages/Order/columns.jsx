import MyPopover from "@/components/popover";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PhoneOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Icon = ({ id, status, confirm }) => {
  if (status === 1) {
    return (
      <>
        <MyPopover
          on={() => {
            confirm(id, 2);
          }}
        >
          <CheckOutlined />
        </MyPopover>
        <MyPopover
          on={() => {
            confirm(id, 5);
          }}
        >
          <CloseOutlined />
        </MyPopover>
      </>
    );
  } else if (status === 2) {
    return (
      <>
        <MyPopover
          on={() => {
            confirm(id, 3);
          }}
        >
          <PhoneOutlined />
        </MyPopover>
      </>
    );
  } else if (status == 3) {
    return (
      <>
        <MyPopover
          on={() => {
            confirm(id, 4);
          }}
        >
          <RiseOutlined />
        </MyPopover>
      </>
    );
  } else {
    return <></>;
  }
};
export const columns = (confirm) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Ngày hoàn thành",
      key: "1",
      dataIndex: "paymentDate",
    },
    {
      title: "Ngày mua hàng",
      key: "1",
      dataIndex: "orderDate",
    },
    {
      title: "Ngày giao",
      key: "1",
      dataIndex: "shippingDate",
    },
    {
      title: "Địa chỉ giao",
      key: "1",
      dataIndex: "shippingAdress",
    },
    {
      title: "SDT",
      key: "1",
      dataIndex: "sdt",
    },
    {
      title: "Tên người gửi",
      key: "1",
      dataIndex: "name_reciver",
    },
    {
      title: "Trạng thái",
      key: "1",
      render: (_, info) => <>{info?.orderStatus?.orderStatusName}</>,
    },
    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <div className="flex">
          <Icon
            id={info?.id}
            status={info?.orderStatus?.id}
            confirm={confirm}
          />
        </div>
      ),
    },
  ];
};
