import React, { useState } from "react";
import { ReportsAnimals } from "../relatos";
import * as S from "./style";

export default function Reports() {
  const [currentPage, setCurrentPage] = useState(0)
  const itensPerPage = 2
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentsItens = ReportsAnimals.slice(startIndex, endIndex)
  const pages = Math.ceil(ReportsAnimals.length / itensPerPage)

  return (
    <S.Container>
      <S.Title>RELATOS DE QUEM JÁ ADOTOU POR AQUI!</S.Title>
      {currentsItens.map((item) => (
        <S.Box key={item.id}>
          <S.Figure>
            <S.Photo src={item.image} alt={item.id} />
          </S.Figure>
          <S.TextBox>
            <S.Message>"{item.text}"</S.Message>
            <S.Author>- {item.author}</S.Author>
          </S.TextBox>
          <S.LinkBox>
            <S.Anchor to={item.path}>
              <p> Adotar {item.animal}!</p>
            </S.Anchor>
          </S.LinkBox>
        </S.Box>
      ))}
      <S.ButtonBox>{Array.from(Array(pages), (item, index) => (
        <S.Btn value={index} onClick={(e) => { setCurrentPage(Number(e.target.value)) }}>
          {index + 1}
        </S.Btn>
      ))}</S.ButtonBox>
    </S.Container>
  );
}
