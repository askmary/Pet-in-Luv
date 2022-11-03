import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import About from "../Forms/About";
import Info from "../Forms/Info";
import Adress from "../Forms/Adress";

export default function MainAdoptionPage() {
  return (
    <S.Container>
      <S.Title>Formulário de adoção</S.Title>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <About />
        <Info />
        <Adress />
      </S.Form>
      <Link to="/confirm">
        <S.Btn type="submit"/>
      </Link>
    </S.Container>
  );
}
