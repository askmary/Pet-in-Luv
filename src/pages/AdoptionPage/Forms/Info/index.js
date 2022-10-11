import React, { useState, useRef } from "react";
import * as S from "./style"

export default function Info() {
  const [choiseStatus, setChoiseStatus] = useState(true);
  const refLabel = useRef(null);

  function HandleClick() {
    let select = document.querySelector("#space");
    let options = select.options[select.selectedIndex].value;
    if (options === "yes") {
      setChoiseStatus(false);
    } else {
      setChoiseStatus(true);
    }
  }
  return (
    <>
      <S.Fieldset>
        <S.Legend>informações adicionais</S.Legend>
        <div>
          <S.Label>
            Você tem ou já teve um animal antes? <S.Span>*</S.Span>
          </S.Label>
          <S.Select
            id="space"
            required
            onClick={() => {
              HandleClick();
            }}
          >
            <option value="00">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </S.Select>
          <S.Label ref={refLabel}>
            Nos conte um pouco sobre sua experiência com animais:
          </S.Label>
          <S.TextArea disabled={choiseStatus}>
            Descreva em poucas palavras.
          </S.TextArea>
        </div>
        <div>
          <S.Label>Qual tipo animal de estimação você teve?</S.Label>
          <S.Select disabled={choiseStatus}>
            <option>Gatos</option>
            <option>Cachorros</option>
            <option>Outro</option>
          </S.Select>
          <S.Label>Caso outro, qual?</S.Label>
          <S.Input
            disabled={choiseStatus}
            type="text"
            placeholder="Ex: hamster, papagaio, etc."
          />
        </div>
      </S.Fieldset>
    </>
  );
}
