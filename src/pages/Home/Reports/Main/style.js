import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  width: 100%;
`;
export const Title = styled.h1`
  text-align: center;
  padding-top: 70px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 20vh;
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
export const TextBox = styled.div`
  width: 50%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
`;
export const Message = styled.h2`
  font-family: "Inter Tight", sans-serif;
  font-size: 1.7rem;
  font-weight: 200;
  text-align: center;
  width: 60%;
`;
export const Author = styled.p`
  color: #3f2b96;
  font-weight: bold;
`;
export const LinkBox = styled.div`
  width:8vw;
  height:15vh;
  background-color: #a8c0ff;
  position:absolute;
  left:85vw;
  margin-top:30vh;
  font-family: "Inter Tight", sans-serif;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  p{
    width:97%;
    text-align:center;
    color:black;
  }
`;
export const Anchor = styled(Link)`
  text-decoration:none;
`
export const ButtonBox = styled.div`
  height:15vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const Btn = styled.button`
  border:white solid 1px;
  width:2.5vw;
  height:5vh;
  border-radius:50%;
  font-size:1.5rem;
  background:transparent;
  color:white;
  transition: 1s all;
  cursor:pointer;
  margin-left:2vw;
  &:hover{
    transform:scale(1.1);
    background: #ffff;
    color:black;
  }
`;