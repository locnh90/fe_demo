import HeaderKichCo from "@/app/components/admin/sanPham/kichCo/HeaderKichCo";
import TableKichCo from "@/app/components/admin/sanPham/kichCo/TableKichCo";
import HeaderThuongHieu from "@/app/components/admin/sanPham/thuongHieu/HeaderThuongHieu";
import TableThuongHieu from "@/app/components/admin/sanPham/thuongHieu/TableThuongHieu";
import { getThuongHieu } from "@/app/service/sanPham/thuongHieu";
import {  IThuongHieu } from "@/app/type/data";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Danh sách thương hiệu",
  description: "Thương hiệu - Quản lý thương hiệu",
};


const ThuongHieuPage = async ({ searchParams }: any) => {
  let data: IThuongHieu[] = [];
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
    const result = await getThuongHieu(currentPage, nameFilter);
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
      <HeaderThuongHieu />
      <TableThuongHieu thuongHieus={data} pageInfo={pageInfo} errorMessage={errorMessage} />
    </div>
  );
};

export default ThuongHieuPage;
