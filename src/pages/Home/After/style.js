import styled from "styled-components";

export const TitleSection = styled.h1`
  text-align:center;
  margin:30px 0px 20px 0px;
`;
export const TextSection = styled.h2`
  text-align:center;
  font-family: "Inter Tight", sans-serif;
`;
export const BoxPhoto = styled.div`
  width:100%;
  height:70em;
  justify-content:space-around;
  flex-direction:column;
  align-items:center;
  display:flex;
  div{
    width:70%;
    height:60vh;
    display:flex;
    justify-content:space-around;
  }
`;
export const Figure = styled.figure`
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 30vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Photo = styled.img`
  width: 27vw;
  height: 55vh;
  object-fit: cover;
`;
export const Text = styled.h2`
 
`;