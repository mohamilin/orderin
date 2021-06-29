import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";
import "./assets/scss/style.scss";
import Button from "./components/button";
import IconText from "./parts/IconText";
function App() {
  return (
    <div className="App">
      <Button isPrimary> hai </Button>
      <Router>
        <LandingPage />
      </Router>
    </div>
  );
}

export default App;
