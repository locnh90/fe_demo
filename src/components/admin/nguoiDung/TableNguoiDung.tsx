"use client"; // Bắt buộc dùng cho Client Component
import { Input, Button, Tooltip, message } from "antd";
import React, { useEffect, useState } from "react";
import TableTagination from "@/app/components/admin/TablePagination";
import { IKichCo, INguoiDung } from "@/app/type/data";
import { EditTwoTone, PlusOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/es/table";
import UpdateKichCo from "./UpdateNguoiDung";
import UpdateNguoiDung from "./UpdateNguoiDung";

interface IProps {
  nguoiDungs: INguoiDung[];
  pageInfo: {
    current: number;
    pageSize: number;
    total: number;
  } | null;
  errorMessage: string | null;
}
const showError = (errorMessage:string | null) => {
  if (errorMessage && errorMessage !== "Không có dữ liệu") {
      message.error(errorMessage);
  }
};

const TableNguoiDung = (props: IProps) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);
  const { nguoiDungs, pageInfo, errorMessage } = props;

useEffect(() => {
        showError(errorMessage);
    }, [errorMessage]);

  const columns: ColumnType<INguoiDung>[] = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayThem",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "ngayUpdate",
    },
    {
      title: "Thao tác",
      render: (text: any, record: INguoiDung, index: number) => (
        <div className="flex gap-3">
          <Tooltip placement="top" title="Cập nhật">
            <EditTwoTone
              twoToneColor={"#f57800"}
              style={{
                cursor: "pointer",
                padding: "5px",
                border: "1px solid #f57800",
                borderRadius: "5px",
              }}
              onClick={() => {
                setIsUpdateModalOpen(true);
                setDataUpdate(record);
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      <TableTagination pageInfo={pageInfo} data={nguoiDungs} column={columns} />
      <UpdateNguoiDung
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        setIsUpdateModal={setIsUpdateModalOpen}
        isUpdateModal={isUpdateModalOpen}
      />
    </div>
  );
};

export default TableNguoiDung;
