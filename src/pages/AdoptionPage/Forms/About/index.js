import React from "react";
import * as S from "./style";

export default function About() {
  return (
    <>
      <S.Fieldset>
        <S.Legend>SOBRE VOCÊ</S.Legend>
        <div>
          <S.Label>
            Nome: <S.Span>*</S.Span>{" "}
          </S.Label>
          <S.Input type="text" placeholder="Digite seu nome inteiro" required />
          <S.Label>
            Data de nascimento: <S.Span>*</S.Span>
          </S.Label>
          <S.Input type="date" required />
          <S.Label>
            Email: <S.Span>*</S.Span>
          </S.Label>
          <S.Input type="email" placeholder="fulano@gmail.com" required />
        </div>
        <div>
          <S.Label>
            CPF: <S.Span>*</S.Span>
          </S.Label>
          <S.Input type="text" placeholder="XXX.XXX.XXX-XX" required />
          <S.Label>
            RG: <S.Span>*</S.Span>
          </S.Label>
          <S.Input type="text" placeholder="00.000.000-0" required />
          <S.Label>
            Celular: <S.Span>*</S.Span>
          </S.Label>
          <S.Input type="tel" placeholder="(00) 00000-0000" required />
        </div>
      </S.Fieldset>
    </>
  );
}
