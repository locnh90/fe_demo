'use client'
import { IKichCo } from "@/app/type/data";
import { Pagination, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface IProps {
  kickCos: IKichCo[] | [],
  pageInfo: {
    current:number,
    pageSize:number,
    total: number
  } | null,
}


const TableKichCo = (props: IProps) => {
  const searchParams = useSearchParams();
      const pathname = usePathname();
      const { replace } = useRouter();

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    if (pagination && pagination.current) {
        const params = new URLSearchParams(searchParams);
        params.set('page', pagination.current);
        replace(`${pathname}?${params.toString()}`);
    }
};

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
      title:'Thao tác',
    }
  ];
  return (
    
    <div>
      <Table
        columns={columns}
        dataSource={kickCos}
        pagination={{
          ...pageInfo,
          showTotal: ( total, range) => {
            return (<div>{range[0]}-{range[1]} trên {total}</div>)
          },
        }}
        onChange={onChange}
        rowKey="id" // Giúp Ant Design xác định từng hàng
      />
  
    </div>
  );
};

export default TableKichCo;
