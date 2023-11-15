import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import HomePage from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
