import React, { Component } from "react";

import { Layout, Menu } from "antd";

import "../css/App.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="menu">
            <Menu.Item className="menu-item" key="1">
              Intro
            </Menu.Item>
            <Menu.Item className="menu-item" key="2">
              Sobre
            </Menu.Item>
            <Menu.Item className="menu-item" key="3">
              Contato
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <div className="site-layout-content intro">
            <p>Seja bem-vindo!</p>
            <p>
              Sou <strong>Lucas</strong>, desenvolvedor full stack e este é meu
              site!
            </p>
          </div>
          <div className="site-layout-content intro">
            <p>
              Meu nome é Lucas Linhares, comecei na área de desenvolvimento em
              2017.
            </p>
            <p>
              Possuo conhecimento em diversas tecnologias, comecei na área com
              PHP.
            </p>
          </div>
          <div className="site-layout-content intro">
            <p>Contatos:</p>
            <p>lucaslinharesps@gmail.com</p>
          </div>
        </Content>
        <Footer className="footer">Lucas Linhares ©2021</Footer>
      </Layout>
    );
  }
}

export default App;
