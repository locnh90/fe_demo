"use server";
import { revalidateTag } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getNguoiDung = async (page: number,name: string) => {
  try {
        // Tạo URL với tham số tìm kiếm name
        const url = new URL(`${BASE_URL}/admin/nguoiDung`);
        url.searchParams.append("page", page.toString());
    
        // Thêm tham số lọc theo tên nếu có
        if (name) {
          url.searchParams.append("name", name);
        }
    
        const response = await fetch(url.toString(), {
          cache: "no-cache",
          next: { tags: ["list-nguoiDung"] },
        });
    

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`); // Kiểm tra phản hồi có hợp lệ không
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Fetch data failed`); // Thêm thông tin lỗi
  }
};

export const createNguoiDung = async (item: any) => {
  const response = await fetch(`${BASE_URL}/admin/nguoiDung`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  revalidateTag("list-nguoiDung");
  return await response.json();
};

export const updateNguoiDung = async (item: any) => {
  const response = await fetch(`${BASE_URL}/admin/nguoiDung/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  revalidateTag("list-nguoiDung");
  return await response.json();
};
