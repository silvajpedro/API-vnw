import { createGlobalStyle, styled } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:#ffff;
    font-family: "Poppins", sans-serif;
}
body{
    background-color: #FFF1E6;
}
h1,h2,p{
    color:#0F2B92 ;
}
`;

export const Logo = styled.img`
  height: 8vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #00145d;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 76%;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 56%;
    height: 13vh;
    font-size: 1.75vw;
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
  &:hover {
    transform: scale(109%);
  }
`;
// Colaboradores

export const ColaboradoresBox = styled.section`
`;
export const TituloColaboradores = styled.h1`
  font-size: 2.5vw;
  margin-top: 5vh;
  text-align: center;
`;
export const ColaboradoresListados = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1vh;
`;

export const CaixaIndividualColaboradores = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #00145D;
  border: solid 5px #ff7700 ;
  width: 19vw;
  height: 47vh;
  padding: 20px;
  border-radius: 20px;
  margin: 24px;
  figcaption{
   font-size: 1.2vw;
   text-align: center;
  }
  span{
text-decoration: underline;
}
`;
export const Img = styled.img`
  width: 15vw;
  height: 28vh;
  border-radius: 12px;
`;

export const CarregandoAPI = styled.p`
    position: absolute;
    right: 40%;
    top: 50%;
    font-size: 2vw;
    font-weight: 700;
    letter-spacing: 1.2px;
`

// Cadastrar

export const TituloCadastrar = styled(TituloColaboradores)``

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        height: 4vh;
        margin-top: 8px;
        border-radius: 5px;
        border:solid 1px;
        color: #000000;
    }
    ::placeholder{
      padding-left: 5px;
      color: #000000;
    }
`
export const BotaoEnviar = styled.button`
    margin-top: 2vh;
    border-radius: 10px;
    border: none;
    outline: solid px #f8aa01;
    background-color: #00145D;
    width: 8vw;
    height: 6vh;
    font-size: 1.2vw;
    letter-spacing: 0.3px;
    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }
`