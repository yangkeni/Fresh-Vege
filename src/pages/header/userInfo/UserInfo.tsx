import { ShoppingTwoTone, UserAddOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import './style.scss'
const UserInfo: FC<{}> = ({}) => {
	return (
		<div className='user-info'>
			<UserAddOutlined />
			<ShoppingTwoTone twoToneColor={'#91ad41'}/>
		</div>
	);
};
export default UserInfo;
