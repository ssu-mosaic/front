import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SearchItem from "./routes/SearchItem";
import SearchOrder from "./routes/SearchOrder";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/order/searchorder">
          <SearchOrder />
        </Route>
        <Route path="/order/searchitem">
          <SearchItem />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
