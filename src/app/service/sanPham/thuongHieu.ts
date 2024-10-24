"use server";

import { IThuongHieu } from "@/app/type/data";
import { revalidateTag } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getThuongHieu = async (page: number,name: string) => {
  try {
        // Tạo URL với tham số tìm kiếm name
        const url = new URL(`${BASE_URL}/admin/thuongHieu`);
        url.searchParams.append("page", page.toString());
    
        // Thêm tham số lọc theo tên nếu có
        if (name) {
          url.searchParams.append("name", name);
        }
    
        const response = await fetch(url.toString(), {
          cache: "no-cache",
          next: { tags: ["list-thuongHieu"] },
        });
    

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`); // Kiểm tra phản hồi có hợp lệ không
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Fetch data failed`); // Thêm thông tin lỗi
  }
};

export const createThuongHieu = async (item: any) => {
  const response = await fetch(`${BASE_URL}/admin/thuongHieu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  revalidateTag("list-thuongHieu");
  return await response.json();
};

export const updateThuongHieu = async (item: IThuongHieu) => {
  const response = await fetch(`${BASE_URL}/admin/thuongHieu/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  revalidateTag("list-thuongHieu");
  return await response.json();
};
