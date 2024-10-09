"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Children, useEffect, useState } from "react";

const SliderApp = () => {
  const pathName = usePathname();
  const [selectKey, setSelectKey] = useState("1");

  useEffect(() => {
    if (pathName.startsWith("/admin")) {
      setSelectKey("1");
    } else if (pathName.startsWith("/admin/sanPham")) {
      setSelectKey("2");
    } else if (pathName.startsWith("/admin/sanPham/kichCo")) {
      setSelectKey("11");
    }
  }, [pathName]);

  const menuItem = [
    { key: "1", label: <Link href="/admin">Admin</Link> },
    {
      key: "2",
      label: <Link href="/admin/sanPham">Quản lý sản phẩm</Link>,
      children: [
        { key: "11", label: <Link href="/admin/sanPham/kichCo">Kích cỡ</Link> },
        { key: "12", label: "Option 2" },
        { key: "13", label: "Option 3" },
        { key: "14", label: "Option 4" },
      ],
    },
  ];
  return <Menu mode="inline" items={menuItem}></Menu>;
};

export default SliderApp;
