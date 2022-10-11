import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RouteBox = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Anchor = styled(Link)`
  text-decoration: none;
  color:black;
`;
