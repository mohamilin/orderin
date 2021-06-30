import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";

import "./App.css";
import "./assets/scss/style.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
