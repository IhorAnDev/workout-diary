import React from 'react'
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Route, Redirect, Switch, NavLink} from 'react-router-dom';
import TrainingChest from "./component/TrainingChest";
import TrainingTriceps from "./component/TrainingTriceps";
import TrainingShoulders from "./component/TrainingShoulders";
import TrainingPress from "./component/TrainingPress";
import TrainingStretching from "./component/TrainingStretching";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Главная</Menu.Item>
                        <Menu.Item key="2">Настройки</Menu.Item>
                        <Menu.Item key="3">О приложении</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="Сплит первый">
                                <Menu.Item key="1"><NavLink to='trainList1'>Грудь</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to='trainList2'>Трицепс</NavLink></Menu.Item>
                                <Menu.Item key="3"><NavLink to='trainList3'>Плечи</NavLink></Menu.Item>
                                <Menu.Item key="4"><NavLink to='trainList4'>Пресс</NavLink></Menu.Item>
                                <Menu.Item key="5"><NavLink to='trainList5'>Растяжка</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{padding: 24, margin: 0, minHeight: 280,}}>
                            <Switch>
                                <Route path='/trainList1' render={() => <TrainingChest/>}/>
                                <Route path='/trainList2' render={() => <TrainingTriceps/>}/>
                                <Route path='/trainList3' render={() => <TrainingShoulders/>}/>
                                <Route path='/trainList4' render={() => <TrainingPress/>}/>
                                <Route path='/trainList5' render={() => <TrainingStretching/>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
