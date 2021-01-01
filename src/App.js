import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Component/pages/About";
import Home from "./Component/pages/Home";
import Messages from "./Component/pages/Messages";
import Products from "./Component/pages/Products";
import Reports from "./Component/pages/Reports";
import Support from "./Component/pages/Support";
import Team from "./Component/pages/Team";
import NavBar from "./Component/sidebar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/supports" exact component={Support} />
          <Route path="/teams" exact component={Team} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
