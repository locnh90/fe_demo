"use client"; // Đảm bảo rằng đây là client component
import React, { useState } from "react";
import { Input, Space } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash/debounce"; // Sử dụng lodash để debounce hàm

const { Search } = Input;

const SearchItem = ({title}:any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Lấy giá trị tìm kiếm hiện tại từ URL searchParams
  const currentSearchValue = searchParams.get("name") || "";
  const [searchValue, setSearchValue] = useState<string>(currentSearchValue);

  // Hàm debounce
  const debouncedSearch = debounce((value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("name", value);
      params.set("page", "1"); // Reset lại về trang đầu tiên
    } else {
      params.delete("name"); // Xóa param "name" nếu giá trị rỗng
    }
    router.replace(`${pathname}?${params.toString()}`); // Cập nhật URL mà không reload
  }, 400);

  // Cập nhật giá trị input khi người dùng gõ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value); // Gọi hàm debounce khi người dùng nhập
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder={title}
        value={searchValue}
        onChange={handleChange} // Gọi hàm handleChange khi người dùng nhập
        style={{ width: 500 }}
      />
    </Space>
  );
};

export default SearchItem;
