"use client";
import { Tooltip, message } from "antd";
import React, { useEffect, useState } from "react";
import TableTagination from "@/app/components/TablePagination";
import { IThuongHieu } from "@/app/type/data";
import { EditTwoTone } from "@ant-design/icons";
import { ColumnType } from "antd/es/table";
import UpdateKichCo from "./UpdateThuongHieu";

interface IProps {
  thuongHieus: IThuongHieu[];
  pageInfo: {
    current: number;
    pageSize: number;
    total: number;
  } | null;
  errorMessage: string | null;
}
const showError = (errorMessage: string | null) => {
  if (errorMessage && errorMessage !== "Không có dữ liệu") {
    message.error(errorMessage);
  }
};

const TableThuongHieu = (props: IProps) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);
  const { thuongHieus, pageInfo, errorMessage } = props;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  useEffect(() => {
    showError(errorMessage);
  }, [errorMessage]);

  const columns: ColumnType<IThuongHieu>[] = [
    {
      title: "Thương hiệu",
      dataIndex: "tenThuongHieu",
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayThem",
      render: (ngayThem: string) => formatDate(ngayThem), // Định dạng ngày
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "ngayUpdate",
      render: (ngayUpdate: string) => formatDate(ngayUpdate), // Định dạng ngày
    },
    {
      title: "Thao tác",
      render: (text: any, record: IThuongHieu, index: number) => (
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
      <TableTagination
        pageInfo={pageInfo}
        data={thuongHieus}
        column={columns}
      />
      <UpdateKichCo
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        setIsUpdateModal={setIsUpdateModalOpen}
        isUpdateModal={isUpdateModalOpen}
      />
    </div>
  );
};

export default TableThuongHieu;
