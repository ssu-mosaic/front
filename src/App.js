import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SearchItem from "./routes/SearchItem";
import SearchOrder from "./routes/SearchOrder";
import ConfirmItem from "./routes/ConfirmItem";

function App() {

  const sideMenuObj = function(topName, sideMenuElements){
    
    return({
        name: topName,
        elementsObj: sideMenuElements,
    });
  };

  const orderSideMenuElements =[

    {
      name : "발주등록",
      link : "/order/searchitem",
    },
    {
      name : "발주확정",
      link : "/order/confirmitem",
    },
    {
      name : "발주조회",
      link : "/order/searchorder",
    },
  ];

  const homeMenuObj = sideMenuObj("홈",[]);
  const orderMenuObj = sideMenuObj("발주관리",orderSideMenuElements);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/order/confirmitem">
          <ConfirmItem sideMenu={orderMenuObj}/>
        </Route>
        <Route path="/order/searchorder">
          <SearchOrder sideMenu={orderMenuObj}/>
        </Route>
        <Route path="/order/searchitem">
          <SearchItem sideMenu={orderMenuObj}/>
        </Route>
        <Route path="/">
          <Home sideMenu={homeMenuObj}/>
        </Route>
      </Switch>
    </Router>
  );
}




export default App;
