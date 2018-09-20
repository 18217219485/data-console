/**
 * @file 页面路由配置文件
 * @date 2018-08-24
 */
export default [
    {
        path: '/',
        page: 'userManage/index.jsx',
        exact: true
    },
    {
        path: '/userManage',
        page: 'userManage/index.jsx',
        exact: false
    },
    {
        path: '/dataAcessManage',
        page: 'dataAcessManage/index.jsx',
        exact: false
    },
    {
        path: '/groupManage',
        page: 'groupManage/index.jsx',
        exact: false
    },
    {
        path: '/service/interfaceManage',
        page: 'service/interfaceManage.jsx',
        exact: false
    },
    {
        path: '/service/serviceManage',
        page: 'service/serviceManage.jsx',
        exact: false
    }
];
