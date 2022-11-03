import React from 'react'
import * as S from "./style"
import CacauBefore from "../../../assets/cacau1.jpeg"
import CacauAfter from "../../../assets/cacau2.jpeg"
import MercuryBefore from "../../../assets/mercury1.jpeg"
import MercuryAfter from "../../../assets/mercury2.jpeg"

export default function After() {
    return (
        <div>
            <S.TitleSection>ANTES X DEPOIS !</S.TitleSection>
            <S.TextSection>Veja como alguns dos pets adotados através do site estão hoje em dia!</S.TextSection>
            <S.BoxPhoto>
                <S.Text>Cacau, dona da Mari</S.Text>
                <div>
                    <S.Figure>
                        <S.Photo src={CacauBefore} alt="Cacau" />
                    </S.Figure>
                    <S.Figure>
                        <S.Photo src={CacauAfter} alt="Cacau" />
                    </S.Figure>
                </div>
                <S.Text>Mercury, dono da Mari</S.Text>
                <div>
                    <S.Figure>
                        <S.Photo src={MercuryBefore} alt="Mercury" />
                    </S.Figure>
                    <S.Figure>
                        <S.Photo src={MercuryAfter} alt="Mercury" />
                    </S.Figure>
                </div>
            </S.BoxPhoto>
        </div>
    )
}
