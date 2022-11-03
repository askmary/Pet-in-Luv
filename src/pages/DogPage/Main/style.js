import styled from "styled-components";
import backgroundImage from "../../../assets/background.png";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const PolaroidBox = styled.div`
  width: 35em;
  height: 40em;
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius:15px;
`;
export const Figure = styled.figure`
  width: 30vw;
  height: 60vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Image = styled.img`
  width: 30vw;
  height: 60vh;
  object-fit: cover;
  transition:1s ease-in;
  &:hover{
    transform:scale(1.1);
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius:15px;
`;
export const Button = styled.button`
  width: 15vw;
  height: 5vh;
  font-size: 1.2rem;
  background: transparent;
  border: 1px solid;
  cursor: pointer;
`;
