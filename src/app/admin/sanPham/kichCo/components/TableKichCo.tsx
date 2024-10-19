"use client";
import TableTagination from "@/app/components/TablePagination";
import { IKichCo } from "@/app/type/data";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import { Pagination, Table } from "antd";
import { ColumnType } from "antd/es/table";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CreateKichCo from "./CreateKichCo";

interface IProps {
  kickCos: IKichCo[] | [];
  pageInfo: {
    current: number;
    pageSize: number;
    total: number;
  } | null;
}

const TableKichCo = (props: IProps) => {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const { kickCos, pageInfo } = props;
  const columns: ColumnType<IKichCo>[] = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Size",
      dataIndex: "tenKichCo",
    },
    {
      title: "Thao tác",
    },
  ];
  


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Table List Users</span>
            <Button
                icon={<PlusOutlined />}
                type="primary"
                onClick={() => setIsCreateModalOpen(true)}
            >
                Thêm mới
            </Button>
        </div>
      <TableTagination pageInfo={pageInfo} data={kickCos} column={columns} />
      <CreateKichCo
                isCreateModalOpen={isCreateModalOpen}
                setIsCreateModalOpen={setIsCreateModalOpen}
            />

    </div>
  );
};

export default TableKichCo;
