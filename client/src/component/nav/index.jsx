/**
 * @file 左侧导航组件
 * @date 2018-08-27
 */
import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const siderData = [
    {
        displayName: '用户管理',
        value: 'userManage',
        type: 'user',
        path: '/userManage'
    },
    {
        displayName: '组管理',
        value: 'groupManage',
        type: 'usergroup-add',
        path: '/groupManage'
    },
    {
        displayName: '服务权限管理',
        type: 'api',
        subItem: [
            {
                displayName: '服务管理',
                value: 'serviceManage',
                path: '/service/serviceManage'
            },
            {
                displayName: '接口管理',
                value: '/interfaceManage',
                path: '/service/interfaceManage'
            }
        ]
    },
    {
        displayName: '数据权限管理',
        type: 'solution',
        value: 'dataAcessManage',
        path: '/dataAcessManage'
    }
];
const MainMenu = () => (
    <Menu mode="inline" theme="dark">
        {
            Array.isArray(siderData) && siderData.map(item => {
                if (!item.subItem) {
                    return (
                        <MenuItem key={item.value}>
                            <Link to={item.path}/>
                            <Icon type={item.type}/>
                            <span>{item.displayName}</span>
                        </MenuItem>
                    );
                }
                return (
                    <SubMenu
                        key={item.type}
                        title={<span><Icon type={item.type}/>{item.displayName}</span>}>
                        {
                            Array.isArray(item.subItem) && item.subItem.map(subItem => {
                                return (
                                    <MenuItem key={subItem.value}>
                                        <Link to={subItem.path}/>
                                        <span>{subItem.displayName}</span>
                                    </MenuItem>
                                );
                            })
                        }
                    </SubMenu>
                );
            })
        }
    </Menu>
);
export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <div style={{minHeight: '20vh'}}></div>
                <MainMenu/>
            </div>
        );
    }
}
