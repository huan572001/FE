import { Popover } from "antd";
import { useState } from "react";

const MyPopover = ({ on, children }) => {
  const [open, setOpen] = useState(false);
  const content = (
    <div className="flex justify-around">
      <button
        className="w-16 bg-red-600 rounded-lg hover:bg-red-900"
        onClick={(e) => {
          e.stopPropagation();

          on();
          setOpen(false);
        }}
      >
        Ok
      </button>
      <button
        className="w-16 bg-green-600 rounded-lg hover:bg-green-900"
        onClick={(e) => {
          e.stopPropagation();
          // onDelete(info?.id);
          setOpen(false);
        }}
      >
        Hủy
      </button>
    </div>
  );
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      placement="bottomRight"
      title={"Bạn có chắc chắn không!"}
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div
        className="flex cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          // onDelete(info?.id);
        }}
      >
        {children}
      </div>
    </Popover>
  );
};
export default MyPopover;
