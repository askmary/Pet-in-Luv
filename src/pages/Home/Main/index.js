import React from "react";
import * as S from "./style";
import Cat from "../../../assets/kitana.png";
import Dog from "../../../assets/apolo.png";
import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <S.Container>
      <div>
        <S.Info>GATOS</S.Info>
        <Link to="/adocaogato">
          <S.BoxImg>
            <S.Image width="99.9%" height="75vh" src={Cat} alt="Gato/Kitana" />
          </S.BoxImg>
        </Link>
      </div>
      <S.Message>Que tal adotar um amigo hoje?</S.Message>
      <div>
        <S.Info>CACHORROS</S.Info>
        <Link to="/adocaocachorro">
          <S.BoxImg>
            <S.Image src={Dog} alt="Cachorro/Apolo" />
          </S.BoxImg>
        </Link>
      </div>
    </S.Container>
  );
}
