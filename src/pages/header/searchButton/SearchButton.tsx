import React, { FC } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.scss'

const SearchButton: FC<{}> = ({}) => {
	return <Input className="search-box" placeholder="搜索" suffix={<SearchOutlined />} maxLength={10} />;
};

export default SearchButton;
