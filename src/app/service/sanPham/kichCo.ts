'use server'
import { revalidateTag } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getKichCo = async (page:number) => {
    try {
      const response = await fetch(`${BASE_URL}/admin/kichCo?page=${page}`, {
        next: {tags: ['list-kichCo'] }
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`); // Kiểm tra phản hồi có hợp lệ không
      }
  
      return await response.json();
    } catch (error) {
      throw new Error(`Fetch data failed`)// Thêm thông tin lỗi
    }
  };

export const createKichCo = async (item: any) => {
  
  const response = await fetch(`${BASE_URL}/admin/kichCo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  revalidateTag('list-kichCo')
  return await response.json();
};
