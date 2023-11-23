import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import HomePage from "./pages/home";
import ExpertisePage from "./pages/expertise";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/expertise" component={ExpertisePage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
