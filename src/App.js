import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./Pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#2d2d2d",
      red: "#e06262",
      orange: "#fad390"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
