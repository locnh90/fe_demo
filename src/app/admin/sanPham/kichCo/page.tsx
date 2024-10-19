import { getKichCo } from "@/app/service/sanPham/kichCo";
import { IKichCo } from "@/app/type/data";
import React from "react";
import TableKichCo from "./components/TableKichCo";

const KichCoPage = async ({searchParams}:any) => {
  let data: IKichCo[] = [];
  let errorMessage: string | null = null;
  let pageInfo: {
    current:number,
    pageSize:number,
    total: number
  } | null = null;

// Trang hiện tại 
const currentPage = Number(searchParams.page) || 1;


  try {
    const result = await getKichCo(currentPage);
   if(result.code === 200){
    pageInfo = {
      current: searchParams.page,
      pageSize: result.data.pageSize,
      total: result.data.totalElements
    }
    data = result.data.items
    
    if(data.length === 0){
      errorMessage = "Không có dữ liệu"
    }
   }
  } catch (error: any) {
    errorMessage = error.message || "Đã có lỗi xảy ra, vui lòng thử lại sau";
  }

  console.log(searchParams.page);

  return (
    <div>
      {errorMessage ? <div>{errorMessage}</div> : <TableKichCo kickCos={data} pageInfo={pageInfo} />}
    </div>
  );
};

export default KichCoPage;
