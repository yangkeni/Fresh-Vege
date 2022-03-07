import { ShoppingOutlined, UserAddOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import './style.scss'
const UserInfo: FC<{}> = ({}) => {
	return (
		<div className='user-info'>
			<UserAddOutlined />
			<ShoppingOutlined />
		</div>
	);
};
export default UserInfo;
