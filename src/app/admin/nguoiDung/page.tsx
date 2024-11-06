import HeaderNguoiDung from "@/app/components/admin/nguoiDung/HeaderNguoiDung";
import TableNguoiDung from "@/app/components/admin/nguoiDung/TableNguoiDung";
import LoadingAdmin from "@/app/components/loader/LoadingAdmin";
import { getNguoiDung } from "@/app/service/taiKhoan/nguoiDung";
import { INguoiDung } from "@/app/type/data";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Danh sách người dùng",
  description: "Người dùng - Quản lý người dùng",
};

const KhachHangPage = async ({ searchParams }: any) => {
  let data: INguoiDung[] = [];
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
    const result = await getNguoiDung(currentPage, nameFilter);
    console.log(result);

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
    <Suspense fallback={<LoadingAdmin />}>
      <HeaderNguoiDung />
      <TableNguoiDung
        nguoiDungs={data}
        pageInfo={pageInfo}
        errorMessage={errorMessage}
      />
    </Suspense>
  );
};

export default KhachHangPage;
