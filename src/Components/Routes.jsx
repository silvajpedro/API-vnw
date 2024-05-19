import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vnw from "../assets/vnw.svg"
import Colaboradores from "./Colaboradores";
import Alunos from "./Alunos";
import Cadastrar from "./Cadastrar";
import * as S from "./Style";

export default function Rotas() {
  return (
    <BrowserRouter>
      <S.Header>
        <S.Logo src={Vnw} alt="" />
        <S.Nav>
          <ul>
            <S.Links to="/">
              <li>Colaboradores</li>
            </S.Links>
            <S.Links to="/Alunos">
              <li>Alunos</li>
            </S.Links>
            <S.Links to="/Cadastrar">
              <li>Cadastrar</li>
            </S.Links>
          </ul>
        </S.Nav>
      </S.Header>

      <Routes>
        <Route path="/" element={<Colaboradores />} />
        <Route path="/Alunos" element={<Alunos />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}
