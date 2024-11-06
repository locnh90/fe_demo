import HeaderKichCo from "@/app/components/admin/sanPham/kichCo/HeaderKichCo";
import TableKichCo from "@/app/components/admin/sanPham/kichCo/TableKichCo";
import { getKichCo } from "@/app/service/sanPham/kichCo";
import { IKichCo } from "@/app/type/data";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Danh sách kích cỡ",
  description: "Kích cỡ - Quản lý kích cỡ",
};


const KichCoPage = async ({ searchParams }: any) => {
  let data: IKichCo[] = [];
  let errorMessage: string | null = null;
  let pageInfo: {
    current: number;
    pageSize: number;
    total: number;
  } | null = null;

  // Lấy trang hiện tại và tham số tìm kiếm "name"
  const currentPage = Number(searchParams.page) || 1;
  const nameFilter = searchParams.name || "";

  try {
    const result = await getKichCo(currentPage, nameFilter);
    if (result.code === 200) {
      pageInfo = {
        current: currentPage,
        pageSize: result.data.pageSize,
        total: result.data.totalElements,
      };
      data = result.data.items;

      if (data.length === 0) {
        errorMessage = "Không có dữ liệu";
      }
    }
  } catch (error: any) {
    errorMessage = error.message || "Đã có lỗi xảy ra, vui lòng thử lại sau";
  }

  // Kiểm tra log dữ liệu
  console.log("Dữ liệu từ API:", { data, pageInfo, errorMessage });

  return (
    <div>
      <HeaderKichCo />
      <TableKichCo kickCos={data} pageInfo={pageInfo} errorMessage={errorMessage} />
    </div>
  );
};

export default KichCoPage;
