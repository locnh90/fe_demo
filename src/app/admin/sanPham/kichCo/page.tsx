// src/app/admin/sanPham/kichCo/page.tsx
import { IKichCo } from "@/app/type/data";
import TableKichCo from "./TableKichCo";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getData() {
  try {
    const res = await fetch(`${API_URL}/admin/kichCo`, {
      next: {tags: ['list-kichCo']}
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const resJson = await res.json();
    const { data } = resJson;

    return data;
  } catch (error) {
    console.log('Error fetching data ',error);
    
    return null;
  }
}

export default async function KichCoPage() {
  const data = await getData();

  if(!data) return <div>Không thể tải dữ liệu, vui lòng kiểm tra và thử lại sau</div>
  return (
    <div>
      <div className="text-lg font-bold mb-5">Danh sách kích cỡ</div>
      <TableKichCo kickCos={data} />
    </div>
  );
}
