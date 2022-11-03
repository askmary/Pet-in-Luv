import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Title = styled.h1`
  margin-bottom: 5vh;
`;
export const Form = styled.form`
  background-color: navajowhite;
  width: 60%;
  height: 70em;
  border-radius: 30px;
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
export const Btn = styled.input`
  width: 17vw;
  height: 5vh;
  border-radius: 10px;
  border: 1px solid;
  background:transparent;
  margin:40px;
  font-size:1.3rem;
  cursor:pointer;
  color:white;
  transition:1s all;
  &:hover{
    background:white;
    color:black;
    border:none;
    transform:scale(1.1);
  }
`;
