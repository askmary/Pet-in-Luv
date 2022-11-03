import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

export default function Adress() {
  const [input, setInput] = useState("");
  const [adress, setAdress] = useState({});
  const API = `https://viacep.com.br/ws/${input}/json`;

  function getCep() {
    axios.get(API).then((response) => {
      setAdress({
        uf: response.data.uf,
        cidade: response.data.localidade,
        bairro: response.data.bairro,
        rua: response.data.logradouro,
      });
    });
  }
  return (
    <>
      <S.Fieldset>
        <S.Legend>ENDEREÇO</S.Legend>
        <div>
          <S.Label>
            CEP <S.Span>*</S.Span>
          </S.Label>

          <S.InputValue
            mask="99999-999"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              getCep();
            }}
          ></button>
          <S.Label>Número:</S.Label>
          <S.Input type="text" />
          <S.Label>Rua:</S.Label>
          <S.Input type="text" value={adress.rua} />
        </div>
        <div>
          <S.Label>Bairro:</S.Label>
          <S.Input type="text" value={adress.bairro} />
          <S.Label>Cidade:</S.Label>
          <S.Input type="text" value={adress.cidade} />
          <S.Label>Estado:</S.Label>
          <S.Input type="text" value={adress.uf} />
        </div>
      </S.Fieldset>
    </>
  );
}
