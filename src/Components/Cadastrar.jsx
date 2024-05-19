import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./Style";

export default function Cadastrar(){
    
    const [userData, setUserData] = useState({
        nome1: "",
        email: "",
        cpf: "",
        curso: "",
        foto: ""
    });
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        console.log(event.target.name)
        console.log(userData.nome1)
    };
    

    const EnviarDados = async()=>{
        
        const urlApi = "https://school-project-hxyp.onrender.com/alunos/cadastrar"
        const dadosEnviar ={
            id:"",
            foto:foto,
            nome:nome,
            email:email,
            cpf:cpf,
            curso:curso,
            endereco:{
                cep: "12345678",
                logradouro: "Rua Brasil",
                bairro: "algum",
                cidade: "alguma",
                complemento: "não tem",
                numero: 0
            }
        }

    const resposta = await axios.post(urlApi, dadosEnviar);
        
    }

    return(
        <>
            <S.TituloCadastrar>Cadastrar Aluno</S.TituloCadastrar>
            <S.Formulario>
                <input type="text"  onChange={(e)=> {handleChange(e)}} placeholder="Digite seu nome" name="nome1" required/>
                <input type="text"  onChange={(e)=> {setCurso(e.target.value)}} placeholder="Digite seu curso" required/>
                <input type="text"  onChange={(e)=> {setCpf(e.target.value)}} placeholder="Selecione seu CPF" pattern="^\d{11}$" required/>
                <input type="email"  onChange={(e)=> {setEmail(e.target.value)}} placeholder="Digite seu e-mail" required/>
                <input type="text"  onChange={(e)=> {setFoto(e.target.value)}} placeholder="Insira uma foto sua" required/>
                <S.BotaoEnviar onClick={()=> EnviarDados()}>Enviar</S.BotaoEnviar>
            </S.Formulario>
        </>
    )
}