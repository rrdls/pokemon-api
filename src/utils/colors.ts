export const setBackgroundColors = (props: any) => {
  switch (props.color) {
    case "green":
      return "#48d0b0";
    case "blue":
      return "#6a8eb8";
    case "red":
      return "#aa4d5a";
    case "purple":
      return "#9d80a8";
    case "yellow":
      return "#efd557";
    case "pink":
      return "#cc8c87";
    case "black":
      return "#464d4f";
    case "gray":
      return "#94a1aa";
    case "brown":
      return "#b08878";
    case "white":
      return "white";
    default:
      break;
  }
};
