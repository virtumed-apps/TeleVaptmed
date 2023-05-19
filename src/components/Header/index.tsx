/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiArrowRight, FiLogOut } from "react-icons/fi";

import {
  HeaderContainer,
  Logo,
  Nav,
  LogoutButton,
  SideMenu,
  HamburgerMenu,
  CloseButton,
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export const Header = () => {
  const { handleLogout } = useAuth();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <Logo>
          <a href="/">
            <img
              src="https://vaptmed.com.br/wp-content/uploads/2021/03/VaptMed-Final-4.png"
              alt="logo"
              width={180}
            />
          </a>
        </Logo>
        <HamburgerMenu onClick={toggleSideMenu}>&#9776;</HamburgerMenu>
        <Nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/rooms">Salas</a>
            </li>
            <li>
              <a href="https://vaptmed.com.br/">Vaptmed</a>
            </li>
            <li>
              <LogoutButton onClick={handleLogout}>
                <FiLogOut /> Sair
              </LogoutButton>
            </li>
          </ul>
        </Nav>
      </HeaderContainer>
      <SideMenu isOpen={isSideMenuOpen}>
        <CloseButton onClick={toggleSideMenu}>
          <FiArrowRight />
        </CloseButton>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/rooms">Salas</a>
          </li>
          <li>
            <a href="https://vaptmed.com.br/">Vaptmed</a>
          </li>
          <li className={isSideMenuOpen ? "mobile-menu-open" : ""}>
            <a>
              <LogoutButton onClick={handleLogout}>
                <FiLogOut color="#333" /> Sair
              </LogoutButton>
            </a>
          </li>
        </ul>
      </SideMenu>
    </>
  );
};
