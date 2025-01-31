export interface Theme {
  background: string;
  color: string;
  modal: {
    background: string;
    color: string;
  }
  button: {
    background: string;
    color: string;
  };
}

export const lightTheme: Theme = {
  background: "#DBDBDB",
  color: "#000000",
  modal: {
    background: "#ffffff",
    color: "#000000",
  },
  button: {
    background: "#000000",
    color: "#ffffff",
  },
};

export const darkTheme: Theme = {
  background: "#292929",
  color: "#ffffff",
  modal: {
    background: "#292929",
    color: "#ffff",
  },
  button: {
    background: "#ffffff",
    color: "#000000",
  },
};
