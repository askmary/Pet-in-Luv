import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const API = "https://dog.ceo/api/breeds/image/random";
export default function Main() {
  const [dog, setDog] = useState("");
  const [status, setStatus] = useState(false);
  const [btnStatus, setBtnStatus] = useState(true);

  function Dogs() {
    axios.get(API).then((response) => {
      setDog(response.data.message);
      setStatus(true);
      setBtnStatus(false);
    });
  }
  return (
    <S.Container>
      <S.PolaroidBox>
        <S.Figure>{status && <S.Image src={dog} alt="GATOS" />}</S.Figure>
        <S.ButtonBox>
          <Link to="/adocao">
            <S.Button disabled={btnStatus}>ADOTE</S.Button>
          </Link>
          <S.Button
            onClick={() => {
              Dogs();
            }}
          >
            {status === false ? "Buscar caõzinho" : "Próximo"}
          </S.Button>
        </S.ButtonBox>
      </S.PolaroidBox>
    </S.Container>
  );
}
