import styled from "styled-components";
import { setBackgroundColors } from "../../utils/colors";
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

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  width: 1000px;
  /* height: 600px; */
  border-radius: 20px;
  /* padding: 30px 30px; */
  color: white;
  height: 500px;
  @media ${mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${mobileM} {
    grid-template-columns: 1fr;
  }
  @media ${mobileL} {
    grid-template-columns: 1fr;
  }
  @media ${tablet} {
    grid-template-columns: 1fr;
  }
  @media ${laptop} {
    grid-template-columns: 1fr 2fr;
  }

  @media ${laptopL} {
    grid-template-columns: 1fr 2fr;
  }

  @media ${desktop} {
    grid-template-columns: 1fr 2fr;
  }

  @media ${desktopL} {
    grid-template-columns: 1fr 2fr;
  }
`;

export const TitleSection = styled.h1`
  color: ${(props) => setBackgroundColors(props)};
  font-size: 15px;
  font-weight: 800;
  padding: 30px 40px;
  align-self: flex-start;
`;

export const ScrollArea = styled.div`
  @media ${tablet} {
    /* height: 100%; */
    overflow-y: scroll;
  }
  @media ${laptopL} {
    height: 100%;
    overflow-y: scroll;
  }

  @media ${desktop} {
    height: 100%;
    overflow-y: scroll;
  }

  @media ${desktopL} {
    height: 100%;
    overflow-y: scroll;
  }
`;

export const Moves = styled.div`
  /* height: 100%;
  overflow-y: scroll; */

  div {
    display: grid;

    span {
      margin: 10px;
    }

    position: relative;
    padding: 30px;
    grid-gap: 5px;

    @media ${mobileS} {
      grid-template-columns: 1fr;
    }
    @media ${mobileM} {
      grid-template-columns: 1fr;
    }
    @media ${mobileL} {
      grid-template-columns: repeat(2, 1fr);
    }
    @media ${tablet} {
      grid-template-columns: repeat(5, 1fr);
    }
    @media ${laptop} {
      grid-template-columns: repeat(5, 1fr);
    }

    @media ${laptopL} {
      grid-template-columns: 1fr 2fr;
    }

    @media ${desktop} {
      grid-template-columns: 1fr 2fr;
    }

    @media ${desktopL} {
      grid-template-columns: 1fr 2fr;
    }
  }
  .MuiSvgIcon-root {
    position: absolute;
    right: 15px;
    top: 18px;
    border-radius: 50%;
    color: ${(props: any) =>
      setBackgroundColors(props) === "white"
        ? "black"
        : setBackgroundColors(props)};
    cursor: pointer;
  }
`;

export const Chart = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .MuiSvgIcon-root {
    position: absolute;
    right: 15px;
    top: 18px;
    border-radius: 50%;
    color: ${(props: any) =>
      setBackgroundColors(props) === "white"
        ? "black"
        : setBackgroundColors(props)};
    cursor: pointer;
  }
  &&& {
    div {
      width: 500px;

      .skillbar-percent {
        width: 20px;
        color: ${(props: any) =>
          setBackgroundColors(props) === "white" && "black"};
      }
      .skillbar-title span {
        padding: 0 8px;
      }
      .skillbar-bar {
        border-radius: 0;
        background: gray;

        .skillbar-title {
          border-radius: 0;

          span {
            border-radius: 0;
            background: ${(props: any) => setBackgroundColors(props)};
          }
        }
      }
      .skillbar-title {
        color: ${(props: any) =>
          setBackgroundColors(props) === "white" && "black"};
        background: ${(props: any) => setBackgroundColors(props)};
        border-radius: 0;
      }
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: ${(props: any) => setBackgroundColors(props)};
  color: ${(props: any) => setBackgroundColors(props) === "white" && "black"};
  border-radius: 20px 0px 0px 20px;
  padding: 30px;
  position: relative;
  left: 0;
  top: 0;
  .MuiSvgIcon-root {
    position: absolute;
    left: 15px;
    top: 18px;
    border-radius: 50%;

    color: ${(props: any) =>
      setBackgroundColors(props) === "white" ? "black" : "white"};
    cursor: pointer;
  }
`;

export const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
export const Index = styled.span`
  font-size: 14px;
  padding-bottom: 12px;
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
export const Types = styled.span`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 4px;
  padding: 6px;
  font-size: 14px;
  margin-right: 10px;
  background-color: ${(props) =>
    setBackgroundColors(props) === "white"
      ? "black"
      : setBackgroundColors(props)};
  color: "white";
`;

export const TypesSection = styled.div``;

export const Bottom = styled.div``;
export const Data = styled.div`
  margin-top: 20px;
  p {
    margin-bottom: 10px;
    text-transform: capitalize;
    span {
      text-transform: lowercase;
    }
  }
`;
