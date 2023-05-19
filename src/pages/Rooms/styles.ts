import styled from "styled-components";

// Componentes estilizados
export const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      a {
        text-decoration: none;
        color: #333;
        padding: 10px;
        border-radius: 4px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #555;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 24px;
    margin-right: 10px;
  }
`;

interface SideMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const SideMenu = styled.div<SideMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 130px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      a {
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        padding: 10px 0;
        border-bottom: 1px solid #fff;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

