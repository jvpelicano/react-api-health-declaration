import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navbar.component";
import HealthList from "./components/health-list.component";
import EdithHealth from "./components/edit-health.component";
import CreateHealth from "./components/create-health.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={HealthList} />
      <Route path="/edit/:id" component={EdithHealth} />
      <Route path="/create" component={CreateHealth} />
    </Router>
  );
}

export default App;
