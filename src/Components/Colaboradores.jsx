import axios from "axios";

import { useState, useEffect } from "react";

import * as S from "./Style";

export default function Colaboradores() {
  //   1º primeiro passo crie o seu estado
  const [data, setData] = useState([]);

  // 2º crie a sua função
  const PegarDados = async () => {
    const Dados = await axios.get(
      "https://school-project-hxyp.onrender.com/colaboradores"
    );
    // A variável Dados está aguardando o axios pegar(get) as informações vindas das API

    console.log(Dados);

    setData(Dados.data);
  };

  // 3º chame a sua função

  useEffect(() => {
    PegarDados();
  }, []);


  const MapeamentoDadosAPI = (item) => {

    let nome
    let imagem;

    if(item.nome === "João Gato Belo"){
        imagem = "https://guiadacervejabr.com/wp-content/uploads/2020/05/zeca-e1588981494577.jpg"
        nome = "Zeca Pagoinho"
    }
    if(item.nome === "Samuel"){
        imagem = "https://s5.static.brasilescola.uol.com.br/be/2022/10/meme-joelma.jpg"
        nome = item.nome
    }
    if(item.nome === "Cliente Misterioso"){
        imagem ="https://i.pinimg.com/564x/5c/0f/b5/5c0fb51f92336b0de902b18998bbb16b.jpg"
        nome = item.nome
    }

    return (
      <S.CaixaIndividualColaboradores>

        <S.Img src={imagem} alt="imagem" />

        <figcaption>{item.nome}</figcaption>

      </S.CaixaIndividualColaboradores>
    );
  };

  if (data.length === 0) {
    return <S.CarregandoAPI>Carregando...</S.CarregandoAPI>;
  }

  return (
    <S.ColaboradoresBox>
      <S.TituloColaboradores>Colaboradores VnW</S.TituloColaboradores>

      <S.ColaboradoresListados>
        {data.map((item) => MapeamentoDadosAPI(item))}
      </S.ColaboradoresListados>
    </S.ColaboradoresBox>
  );
}
