import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: url('../../assets/overlay_stars.svg') left top repeat, linear-gradient(to right bottom, #a9347e, #4b32a7);
    background-size: 400px, auto;
    color: var(--white);
    font-family: 'Space Mono', monospace;
    height: 100vh;
    width: 100vw;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const rotateAstronaut = keyframes`
  100% {
    transform: rotate(-720deg);
  }
`;

export const moveAstronaut = keyframes`
  100% {
    transform: translate(-100px, -100px);
  }
`;

export const BoxAstronaut = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  will-change: transform;
  animation: ${moveAstronaut} 50s infinite linear both alternate;

  img {
    width: 150px;
    animation: ${rotateAstronaut} 200s infinite linear both alternate;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid var(--button);
  border-radius: 10px;
  color: inherit;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;

  &:hover {
    background-color: lighten(var(--button-color), 5);
    transition: all 0.4s ease;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;
  z-index: 2;

  strong {
    font-size: 10rem;
  }

  p {
    font-weight: 500;
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
    color: var(--button);
    margin-bottom: 2rem;
  }

  &-text {
    max-width: 500px;
    margin-bottom: 4rem;
  }
`;

export const Navbar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 1.2rem;

  ul {
    display: none;
  }

  @media screen and (min-width: 420px) {
    font-size: 1rem;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        padding: 0.5rem 0.75rem;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: var(--white);
          transition: width 0.3s;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;

export const primaryColor = "#fff";

export const buttonColor = "#ffcb39";