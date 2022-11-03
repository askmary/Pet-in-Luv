import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <S.Box>
        <S.Title>OBRIGADA POR ADOTAR CONOSCO! 😺</S.Title>
        <S.Text>
          Seu pedido de adoção está em análise, caso seja aprovado, você será
          contatado pelo e-mail que forneceu no formulário de adoção!
        </S.Text>
        <S.Text>Enquanto isso, que tal navegar pelo nosso site?</S.Text>
        <Link to="/">
          <S.Btn>INÍCIO</S.Btn>
        </Link>
      </S.Box>
    </S.Container>
  );
}
