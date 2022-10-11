import React from "react";
import * as S from "./style";
import About from "../Forms/About"
import Info from "../Forms/Info"
import Adress from "../Forms/Adress"

export default function MainAdoptionPage() {
 
  return (
    <S.Container>
      <S.Title>Formulário de adoção</S.Title>
      <S.Form>
        <About/>
        <Info/>
        <Adress/>
      </S.Form>
    </S.Container>
  );
}
