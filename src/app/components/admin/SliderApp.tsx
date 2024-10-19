import React from 'react';
import {Menu, MenuProps,} from 'antd';
import {UserOutlined, PieChartOutlined, ShoppingCartOutlined, ProductOutlined, GiftOutlined,} from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    backgroundColor: '#ffffff',
    border: '1px solid #E6EBF1',
    transition: 'all 0.4s ease',
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {key: 'tong-quan', label: <Link href={"/"}>Tổng quan</Link>, icon: <PieChartOutlined/>,},
    {key: 'ban-hang-tai-quay', label: <Link href={"/"}>Bán hàng tại quầy</Link>, icon: <ShoppingCartOutlined/>,},
    {key: 'don-hang', label: <Link href={"/"}>Quản lý đơn hàng</Link>, icon: <ShoppingCartOutlined/>,},
    {
        key: 'quan-li-san-pham', label: 'Quản lý sản phẩm', icon: <ProductOutlined/>,
        children: [
            {key: 'san-pham', label: <Link href={"/admin/sanPham"}>Sản phẩm</Link>},
            {key: 'danh-muc', label: <Link href={"/admin/category"}>Danh mục</Link>},
            {key: 'thuong-hieu', label: <Link href={"/admin/brand"}>Thương hiệu</Link>},
            {key: 'chat-lieu', label: <Link href={"/admin/material"}>Chất liệu</Link>},
            {key: 'mau-sac', label: <Link href={"/admin/color"}>Màu sắc</Link>},
            {key: 'kich-thuoc', label: <Link href={"/admin/sanPham/kichCo"}>Kích cỡ</Link>},
        ],
    },
    {
        key: 'giam-gia', label: 'Giảm giá', icon: <GiftOutlined/>,
        children: [
            {key: 'voucher', label: 'Quản lý voucher'},
            {key: 'khuyen-mai', label: 'Quản lý khuyến mại'},
        ],
    },
    {
        key: 'tai-khoan', label: 'Tài khoản', icon: <UserOutlined/>,
        children: [
            {key: '6.1', label: <Link href={'/admin/customer'}>Khách hàng</Link>},
            {key: '6.2', label: 'Nhân viên'},
        ],
    }
];

const SliderApp: React.FC<{ collapsed: boolean }> = ({collapsed}) => {
    return (
        <>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={siderStyle}
                width={250}
                aria-label="Main navigation"
            >

                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{border: 0}}
                />
            </Sider>
        </>

    );
};

export default SliderApp;
