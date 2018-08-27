/**
 * 项目根组件
*/
import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Nav from './component/nav/index.jsx';
import routers from './common/router';

import './App.less';

const {Sider, Header, Footer, Content} = Layout;


const RenderRouter = () => (
    <Switch>
        {
            Array.isArray(routers) && routers.map(item => {
                // 循环了两次
                let DynamicComponent = item.page ? require(`./page/${item.page}`).default : null;
                return (
                    <Route
                        path={item.path}
                        key={item.path}
                        component={DynamicComponent}
                        exact={item.exact}
                    />
                );
            })
        }
        <Route><Redirect to="/userManage"/></Route>
    </Switch>
);

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout className="page-layout">
                    <Sider><Nav/></Sider>
                    <Layout>
                        <Header></Header>
                        <Content>
                            <RenderRouter></RenderRouter>
                        </Content>
                        <Footer >
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
export default App;

