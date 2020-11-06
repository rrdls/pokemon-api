import styled, { css } from "styled-components";
import { setBackgroundColors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 4px;
  padding: 20px 20px;
  background-color: ${(props: any) => setBackgroundColors(props)};
  color: ${(props: any) => (props.color === "white" ? "black" : "white")};
  cursor: pointer;
`;

export const Name = styled.h1`
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export const Types = styled.span`
  width: 100px;
  height: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 4px;
  padding: 4px;
  font-size: 11px;
  margin-right: 5px;
`;
export const Index = styled.p`
  font-size: 10px;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Center = styled.div`
  padding-top: 10px;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;
