'use client'
import { IKichCo } from "@/app/type/data";
import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import React from "react";
import BtnAdd from "../../components/sanPham/kichCo/BtnAdd";

interface IProps {
  kickCos: IKichCo[] | [];
}

const TableKichCo = (props: IProps) => {
  const { kickCos } = props;
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
      title:'Thao tác',
    }
  ];
  return (
    
    <div>
      <div className="flex justify-end"><BtnAdd/></div>
      <Table
        rowKey={"id"}
        dataSource={kickCos}
        columns={columns}
      />
    </div>
  );
};

export default TableKichCo;
