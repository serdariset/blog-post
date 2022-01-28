export const filters = {
  filters: {
    setClass: (value) => {
      if (!value) return "";
      let widthStyle = "";
      switch (value) {
        case "1":
          widthStyle = "row1";
          break;
        case "2":
          widthStyle = "row2";
          break;
        case "3":
          widthStyle = "row3";
          break;
        case "4":
          widthStyle = "row4";
          break;
        case "5":
          widthStyle = "row5";
          break;
        case "6":
          widthStyle = "row6";
          break;
        case "7":
          widthStyle = "row7";
          break;
        case "8":
          widthStyle = "row8";
          break;
        case "9":
          widthStyle = "row9";
          break;
        case "10":
          widthStyle = "row10";
          break;
        case "11":
          widthStyle = "row11";
          break;
        case "12":
          widthStyle = "row12";
          break;
      }
      return widthStyle;
    },
  },
};
