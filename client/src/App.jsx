/**
 * 项目根组件
*/
import React from 'react';
import {Layout, Icon} from 'antd';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Nav from './component/nav/index.jsx';
import Login from './page/login/index.jsx';
import routers from './common/router';

import './App.less';

const {Sider, Header, Footer, Content} = Layout;

const RenderRouter = () => (
    <Switch>
        {
            Array.isArray(routers) && routers.map(item => {
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
    </Switch>
);

class App extends React.Component {
    state = {
      collapsed: false
    }
    handleToggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }
    render() {
        return (
          <Router>
              <div>
                  <Route exact path="/" component={Login}/>
                  <Layout className="page-layout">
                      <Sider
                        trigger = {null}
                        collapsible
                        collapsed = {this.state.collapsed}
                      >
                        <Nav/>
                      </Sider>
                      <Layout>
                          <Header>
                              <Icon
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick = {this.handleToggle}
                              />
                              <div>
                                <a href="/help">帮助中心</a>
                                <div>
                                    <span>管理员</span>
                                    <Icon type="user"/>
                                </div>
                              </div>
                          </Header>
                          <Content>
                              <RenderRouter></RenderRouter>
                          </Content>
                          <Footer >
                              Ant Design ©2018 Created by Ant UED
                          </Footer>
                      </Layout>
                  </Layout>
              </div>
          </Router>
        );
    }
}
export default App;
