import './App.css';

import { Menu } from 'antd';
import React from 'react';
import Routes from './routes';

import { HomeOutlined, PlusOutlined, UnorderedListOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined  } from '@ant-design/icons'

import { Layout, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function App() {
    let history = useHistory();

    function handleClick() {
      history.push("/adicionar");
    }

  return (
    <div className="main">
    <Layout className='main__content'>
        <Header className='header'>LISTA DE COMPRAS</Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={ <HomeOutlined /> } onClick={() => history.push('/')}>
                Início
              </Menu.Item>
              <Menu.Item key={2} icon={ <PlusOutlined /> } onClick={handleClick}>
                Adicionar produto
              </Menu.Item>
              <Menu.Item key={3} icon={ <UnorderedListOutlined /> } onClick={() => history.push('/products')}> 
                Listar produto
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'> @2022 - API Lista de Compras - Todos os direitos reservados - Edna Alves.
          <div className='social'>
              <a href='https://www.instagram.com/qualidadeemtodocanto/' target='_green' rel="noreferrer"><Avatar size={34} icon={<InstagramOutlined />} className='social_icons' /></a>
              <a href='https://www.linkedin.com/in/edna-alves-nojima-3b3a8924/' target='_green' rel="noreferrer"><Avatar size={34} icon={<LinkedinOutlined />} className='social_icons' /></a>
              <a href='https://github.com/EdnaAlves44' target='_green' rel="noreferrer"><Avatar size={34} icon={<GithubOutlined />} className='social_icons' /> </a>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}


export default App;
