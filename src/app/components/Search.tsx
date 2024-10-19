import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchItem = ({ onSearch }:any) => {
  return (
    <Space direction="vertical">
      <Search
        placeholder="Nhập từ khóa tìm kiếm"
        onSearch={onSearch} // Gọi hàm onSearch khi người dùng tìm kiếm
        style={{ width: 500 }}
      />
    </Space>
  );
};

export default SearchItem;