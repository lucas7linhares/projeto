import React, { Component } from "react";

import { Layout, Menu, Row, Col, Image } from "antd";

import { Link } from "react-scroll";

import imagemSobre1 from "../assets/web-development.png";
import imagemSobre2 from "../assets/development.png";
import imagemSobre3 from "../assets/website.png";
import imagemContato from "../assets/gmail.png";

import "../css/App.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Menu mode="horizontal" className="menu" defaultSelectedKeys={["1"]}>
            <Menu.Item className="menu-item" key="1">
              {/* <Link
                activeClass="active"
                to="intro"
                smooth={true}
                style={{ color: "#CCC" }}
              > */}
              Intro
              {/* </Link> */}
            </Menu.Item>
            <Menu.Item className="menu-item" key="2">
              {/* <Link
                activeClass="active"
                to="sobre"
                smooth={true}
                style={{ color: "#CCC" }}
              > */}
              Sobre
              {/* </Link> */}
            </Menu.Item>
            <Menu.Item className="menu-item" key="3">
              {/* <Link
                activeClass="active"
                to="contato"
                smooth={true}
                style={{ color: "#CCC" }}
              > */}
              Contato
              {/* </Link> */}
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <Row
            id={"intro"}
            style={{
              textAlign: "center",
              padding: "20% 50px 20% 50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              backgroundColor: "#002f5a",
              width: "100%",
            }}
          >
            <Col span={24}>
              <p>Olá!</p>
              <p>
                Sou <strong>Lucas Linhares</strong>, desenvolvedor web full
                stack.
              </p>
            </Col>
          </Row>
          <Row
            id={"sobre"}
            style={{
              textAlign: "justify",
              padding: "10% 50px 10% 50px",
              fontSize: 17,
              width: "100%",
              backgroundColor: "#002344",
            }}
          >
            <Col span={8} className="col">
              <Image width={150} src={imagemSobre1} />
              <p>
                Meu nome é Lucas Linhares, trabalho com desenvolvimento de
                sistemas para web e sou formado em Sistemas de informação.
              </p>
              <p>
                Concluí minha graduação em 2018 e desde então atuo na área,
                tendo trabalhado em duas empresas privadas e com projetos
                pessoais!
              </p>
            </Col>
            <Col span={8} className="col">
              <Image width={150} src={imagemSobre2} />
              <p>
                Tenho bom relacionamento interpessoal, competências em análise e
                desenvolvimento de sistemas web e banco de dados relacionais.
              </p>
            </Col>
            <Col span={8} className="col">
              <Image width={150} src={imagemSobre3} />
              <p>
                Já trabalhei com diversas tecnologias, dentre as mais utilizadas
                estão PHP, ReactJS, SQL, HTML e CSS.
              </p>
            </Col>
          </Row>
          <Row
            id={"contato"}
            style={{
              textAlign: "center",
              padding: "15% 50px 10% 50px",
              fontSize: 30,
              backgroundColor: "#002f5a",
              width: "100%",
            }}
          >
            <Col span={24} className="col">
              <Image width={150} src={imagemContato} />
              <p>Contato: lucaslinharesps@gmail.com</p>
            </Col>
          </Row>
        </Content>
        <Footer className="footer">Lucas Linhares ©2021</Footer>
      </Layout>
    );
  }
}

export default App;
