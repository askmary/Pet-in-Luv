import React from "react";
import * as S from "./style";

export default function HeaderPage({ sectionName, way }) {
  return (
    <S.Container>
      <S.RouteBox>
        <div>
          <S.Anchor to="/">
            <h3>↩ VOLTAR AO INÍCIO</h3>
          </S.Anchor>
        </div>
        <div>
          <S.Anchor to={way}>
            <h3>{sectionName}</h3>
          </S.Anchor>
        </div>
      </S.RouteBox>
    </S.Container>
  );
}
