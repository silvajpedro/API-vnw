import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./Style";

export default function Alunos() {

    const [data, setData] = useState([]);

    const getData = async () => {
      const Dados = await axios.get("https://school-project-hxyp.onrender.com/alunos");
      console.log(Dados);
      setData(Dados.data);
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    if (data.length === 0) {
      return <S.CarregandoAPI>Carregando...</S.CarregandoAPI>;
    }
  
    const MapeamentoDadosAPI = (item) => {
  
      let imagem;
  
      if (item.foto === null || item.foto === "" || item.foto === "string") {
  
        imagem ="https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg";
  
      } else {
        imagem = item.foto;
      }
  
      return (
        <S.CaixaIndividualColaboradores>
          <S.Img src={imagem} alt="" />
          <figcaption>{item.nome}</figcaption>
          <figcaption>Aluno na modadalidade <span>{item.curso}</span></figcaption>
        </S.CaixaIndividualColaboradores>
      );
    };


  return (
    <>
      <S.ColaboradoresBox>
        <S.TituloColaboradores>Alunos VnW</S.TituloColaboradores>
        <S.ColaboradoresListados>
          {data.map((item) => MapeamentoDadosAPI(item))}
        </S.ColaboradoresListados>
      </S.ColaboradoresBox>
    </>
  );
}
