import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  background-color: white;
  width: 36%;
  height: 90vh;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const Title = styled.h1`
  text-align: center;
`;
export const Text = styled.h3`
  font-family: "Inter Tight", sans-serif;
  width: 70%;
  font-size: 1.3rem;
  text-align: center;
`;
export const Btn = styled.button`
  width: 17vw;
  height: 5vh;
  border-radius: 10px;
  border: 1px solid;
  background: transparent;
  margin: 40px;
  font-size: 1.3rem;
  cursor: pointer;
  color: black;
  transition: 1s all;
  &:hover {
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
    color: white;
    transform: scale(1.1);
  }
`;
