import useTable from "@/hook/useTable";
import { Button, DatePicker, Table } from "antd";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { ChartAPI } from "@/services/chart";
import moment from "moment";

const { RangePicker } = DatePicker;

const Report = () => {
  const { tableData, loading, fetchRows, onDelete, params } = useTable(
    ChartAPI.report,
    "data"
  );
  const [date, setDate] = useState();
  useEffect(() => {
    setDate({
      start: "2000-05-07",
      end: moment(new Date()).format("YY-MM-DD"),
    });
    fetchRows({
      start: "2000-05-07",
      end: moment(new Date()).format("YY-MM-DD"),
    });
  }, []);
  const onChange = (values) => {
    setDate({
      start: moment(values[0]).format("YY-MM-DD"),
      end: moment(values[1]).format("YY-MM-DD"),
    });
    fetchRows({
      start: moment(values[0]).format("YY-MM-DD"),
      end: moment(values[1]).format("YY-MM-DD"),
    });
  };
  const disabledDate = (current) => {
    // Cho phép chọn các ngày trong quá khứ
    return current && current >= new Date();
  };
  const handleExportExcelProduct = async () => {
    const workbook = XLSX.utils.book_new();
    if (tableData.data.length === 0) {
      message.error("Chưa có dữ liệu để xuất");
    } else {
      const modifiedData = tableData.data.map((item) => ({
        "Tên sản phẩm": item.tenSanPham,
        "Tổng số lượng bán": item.tongSoLuongBan,
        "Thời gian": item.ngay,
        "Tổng doanh thu": item.tongDoanhThu,
        "Tổng lợi nhuận": item.tongLoiNhuan,
      }));

      const ThongKe = XLSX.utils.json_to_sheet(modifiedData);
      XLSX.utils.book_append_sheet(workbook, ThongKe, "");

      // Xuất file
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const dataBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = "Thống kê sản phẩm";
      saveAs(dataBlob, fileName);
    }
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
        }}
      >
        Thống kê doanh thu lợi nhuận theo ngày
      </h1>
      <RangePicker onChange={onChange} disabledDate={disabledDate} />
      <Table
        columns={columns()}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {},
        })}
      />
      <Button onClick={handleExportExcelProduct}>Xuất Excel</Button>
    </div>
  );
};
export default Report;
