import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const location = useLocation(); // 현재 경로를 가져오는 React Router의 hook
  
  return ( 
    <Container>
      <LogoImg src="assets/Logo.png" alt="Logoimg" />
      <Logo to="/" $isActive={location.pathname.startsWith("/home")}>Roul-Fi</Logo>
      <Nav>
        <NavItem to="/stake" $isActive={location.pathname === "/stake"}>Stake</NavItem>
        <NavItem to="/play" $isActive={location.pathname === "/play"}>Play</NavItem>
        <NavItem to="/dashboard" $isActive={location.pathname === "/dashboard"}>Dashboard</NavItem>
      </Nav>
    </Container>
  );
};

export default Header;

const LogoImg = styled.img`
  width: 82px;
  height: 73.759px;
  flex-shrink: 0;
`;

const Container = styled.div`
  background: #101010;
  width: 100vw;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 50px;
`;

const Logo = styled(Link)`
  color: #ffffff;
  font-family: Acme;
  font-size: 50px;
  line-height: 90%;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = styled.div`
  display: flex;
`;

const NavItem = styled(Link)(({ $isActive }) => `
  color: ${$isActive ? '#007bff' : '#ffffff'};
  font-size: 40px;
  line-height: 90%;
  margin-right: 50px;
  cursor: pointer;
  text-decoration: none;
`);
