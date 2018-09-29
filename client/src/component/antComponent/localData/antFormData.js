/**
 * @file 配置的本地页面数据
 * @date 2018-07-25
 */
export default {
    INDEX: {
        register: [
            {
                type: 'input',
                name: 'username',
                defaultValue: '',
                placeholder: '请输入用户名',
                message: '请输入用户名',
                iconName: 'user'
            },
            {
                type: 'input',
                name: 'password',
                defaultValue: '',
                placeholder: '请输入密码',
                inputType: 'new-password',
                message: '请输入密码',
                iconName: 'lock'
            },
            {
                type: 'input',
                name: 'repassword',
                defaultValue: '',
                placeholder: '请输入确认密码',
                inputType: 'new-password',
                message: '请输入确认密码'
            }
        ],
        login: [
            {
                type: 'input',
                name: 'username',
                defaultValue: '',
                placeholder: '请输入用户名',
                message: '请输入用户名',
                iconName: 'user'
            },
            {
                type: 'input',
                name: 'password',
                defaultValue: '',
                placeholder: '请输入密码',
                inputType: 'new-password',
                message: '请输入密码',
                iconName: 'lock'
            }
        ]
    }
};
