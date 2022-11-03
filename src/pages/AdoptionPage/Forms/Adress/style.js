import styled from "styled-components";
import InputMask from "react-input-mask"

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
  button{
    display:none;
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
export const InputValue = styled(InputMask)`
  font-family: "Inter Tight", sans-serif;
  width: 15vw;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid;
  padding-left: 10px;
  font-size: 1rem;
  margin-bottom: 3px;
`;

