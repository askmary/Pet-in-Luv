import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as S from "./style";

const API = "https://api.thecatapi.com/v1/images/search";
export default function CatMain() {
  const [cat, setCat] = useState("");
  const [status, setStatus] = useState(false);
  const [btnStatus, setBtnStatus] = useState(true);

  function Cats() {
    axios.get(API).then((response) => {
      setCat(response.data[0].url);
    });
    setStatus(true);
    setBtnStatus(false);
  }

  return (
    <S.Container>
      <S.PolaroidBox>
        <S.Figure>{status && <S.Image src={cat} alt="GATOS" />}</S.Figure>
        <S.ButtonBox>
          <Link to="/adocao">
            <S.Button disabled={btnStatus}>ADOTE</S.Button>
          </Link>
          <S.Button
            onClick={() => {
              Cats();
            }}
          >
            {status === false ? "Buscar gatinho" : "Próximo"}
          </S.Button>
        </S.ButtonBox>
      </S.PolaroidBox>
    </S.Container>
  );
}
