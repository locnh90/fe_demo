"use client";
// import { IKichCo } from "@/app/type/data";
import { Pagination, Table } from "antd";
// import { ColumnType } from "antd/es/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IProps {
  data: any;
  column: any;
  pageInfo: {
    current: number;
    pageSize: number;
    total: number;
  } | null;
}

const TableTagination = (props: IProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isFetching, setIsFetching] = useState(false);

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("page", pagination.current);
      replace(`${pathname}?${params.toString()}`);
      setIsFetching(false);
    }
  };

  const { pageInfo, data, column } = props;

  useEffect(() => {
    if (data) setIsFetching(false);
  }, []);
  return (
    <div>
      <Table
        
        loading={isFetching}
        dataSource={data}
        columns={column}
        pagination={{
          ...pageInfo,
          showTotal: (total, range) => {
            return (
              <div>
                {range[0]}-{range[1]} trên {total}
              </div>
            );
          },
        }}
        onChange={onChange}
        rowKey="id" // Giúp Ant Design xác định từng hàng
        scroll={{ y: 'calc(100vh - 270px)', scrollToFirstRowOnChange: true }}
      />
    </div>
  );
};

export default TableTagination;
