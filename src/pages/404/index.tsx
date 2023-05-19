/* eslint-disable jsx-a11y/anchor-is-valid */
import { BoxAstronaut, GlobalStyle, Navbar } from "./styles";

export const NotFound = () => {
  return (
    <>
      <GlobalStyle />

      <Navbar>
        <span>404 NOT FOUND 🚀</span>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Navbar>

        <div className="message">
          <strong>404</strong>
          <p className="title">LOOKS LIKE YOU ARE LOST IN THE SPACE</p>
          <p className="message-text">
            The page you are looking for might be removed or is temporally
            unavailable
          </p>
          <button className="button">GO BACK HOME</button>
        </div>

      <BoxAstronaut>
        <img src={"../../assets/astronaut.svg"} alt="" />
      </BoxAstronaut>
    </>
  );
};

