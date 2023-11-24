import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import HomePage from "./pages/home";
import ExpertisePage from "./pages/expertise";
import ResidentialPage from "./pages/residential";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/expertise/residential" component={ResidentialPage} />
          <Route path="/expertise" component={ExpertisePage} exact />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
