import React from "react";
import * as S from "./style"

export default function Adress() {
  return (
    <>
      <S.Fieldset>
        <S.Legend>ENDEREÇO</S.Legend>
        <div>
          <S.Label>
            CEP <S.Span>*</S.Span>
          </S.Label>
          <S.Input
          // value={input}
          // onChange={() => {HandleInput()}}
          />
          <S.Label>Número:</S.Label>
          <S.Input type="text" />
          <S.Label>Rua:</S.Label>
          <S.Input type="text" />
        </div>
        <div>
          <S.Label>Bairro:</S.Label>
          <S.Input type="text" />
          <S.Label>Cidade:</S.Label>
          <S.Input type="text" />
          <S.Label>Estado:</S.Label>
          <S.Input type="text" />
        </div>
      </S.Fieldset>
    </>
  );
}
