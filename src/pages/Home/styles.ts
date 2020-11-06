import devices from "./../../assets/styles/devices";

const {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopL,
  desktop,
  desktopL,
} = devices;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  column-gap: 20px;
  row-gap: 20px;
  padding-top: 100px;
  @media ${mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${mobileM} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${laptop} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${desktop} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${desktopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Title = styled.h1`
  color: #aa4d5a;
`;

export const Header = styled.header`
  padding-top: 20px;
`;
