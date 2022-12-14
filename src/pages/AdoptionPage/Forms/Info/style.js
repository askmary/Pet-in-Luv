import styled from "styled-components";

export const Fieldset = styled.fieldset`
  width: 70%;
  height: 45vh;
  display: flex;
  justify-content: space-around;
  border: solid 1px;
  align-items: center;
  border-radius: 10px;
  div {
    width: 40%;
    height: 34vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const Legend = styled.legend`
  font-size: 1.5rem;
`;
export const Label = styled.label`
  font-family: "Inter Tight", sans-serif;
  padding: 10px 0 10px 0;
  font-size: 1.1rem;
`;
export const Span = styled.span`
  color: red;
  font-weight: bold;
  font-family: "Inter Tight", sans-serif;
`;
export const Input = styled.input`
  font-family: "Inter Tight", sans-serif;
  width: 15vw;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid;
  padding-left: 10px;
  font-size: 1rem;
  margin-bottom: 3px;
`;
export const Select = styled.select`
  font-family: "Inter Tight", sans-serif;
  width: 15vw;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid;
  padding-left: 10px;
  font-size: 1rem;
  margin-bottom: 3px;
`;
export const TextArea = styled.textarea`
  font-family: "Inter Tight", sans-serif;
  width: 15vw;
  height: 6vh;
  border-radius: 10px;
  border: 1px solid;
  padding-left: 10px;
  font-size: 1rem;
  margin-bottom: 3px;
`;
