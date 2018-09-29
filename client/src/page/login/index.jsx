/**
 * @file 登陆注册页面
 * @date 2018-09-21
 * @author chenling
 */
import React from 'react';
import {Form, Button} from 'antd';
import AntForm from '../../component/antComponent/antForm.jsx';
import localData from '../../component/antComponent/localData/antFormData';
import common from '../../common/commonFunc';
import config from '../../server';
import './index.less';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'login'
        };
    }
    outsideOptions = {
        libs: {
            getFieldDecorator: this.props.form.getFieldDecorator
        },
        formItemlayout: {
            labelCol: {span: 6},
            wrapperCol: {span: 10}
        }
    }
    handleToggle = () => {
        if (this.state.status === 'register') {
            this.setState({
                status: 'login'
            });
        }
        else {
            this.setState({
                status: 'register'
            });
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                common.fetch({
                    url: config.api.register,
                    method: 'POST',
                    data: values
                }).then(data => {
                    if (data.code === 0) {
                        this.setState({
                            status: 'login'
                        });
                    }
                }).catch(new Function());
            }
        });
    }
    handleLogin = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                common.fetch({
                    url: config.api.login,
                    method: 'POST',
                    data: values
                }).then(data => {
                    if (data.code === 0) {
                      window.location.href="userManage";
                    }
                }).catch(new Function());
            }
        });
    }
    renderLogin = () => {
        return (
            <Form className="login-content" onSubmit={this.handleLogin}>
                <AntForm localData ={localData.INDEX.login} outsideOptions = {this.outsideOptions}/>
                <Button type="primary" htmlType = "submit">登陆</Button>
                <div onClick={this.handleToggle}><span>马上注册</span></div>
            </Form>
        );
    }
    renderRegister = () => {
        return (
            <Form className="login-content" onSubmit={this.handleSubmit}>
                <AntForm localData ={localData.INDEX.register} outsideOptions = {this.outsideOptions}/>
                <Button type="primary" htmlType = "submit">注册</Button>
                <div onClick={this.handleToggle}><span>已有账号，马上登陆</span></div>
            </Form>
        );
    }
    // 用户的登陆注册
    render() {
        return (
            <div className="wrapper">
                {
                    this.state.status === 'register' ? this.renderRegister() : this.renderLogin()
                }
            </div>
        );
    }
}
export default Form.create()(Login);
