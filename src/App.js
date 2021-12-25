import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import MakeAccount from "./routes/MakeAccount";
import SearchItem from "./routes/SearchItem";
import SearchOrder from "./routes/SearchOrder";
import ConfirmItem from "./routes/ConfirmItem";
import ManageStock from "./routes/ManageStock";

import PaginationTableRender from "./TablePaginationTest/tableRender";
import DoughnutChart from "./ChartTest/chartRender";

function App() {

  const sideMenuObj = function(topName, sideMenuElements){
    
    return({
        name: topName,
        elementsObj: sideMenuElements,
    });
  };

  const orderSideMenuElements =[

    {
      id : 0,
      name :  "거래처등록",
      link : "/order/searchitem",
    },
    {
      id : 1,
      name : "발주주문",
      link : "/order/confirmitem",
    },
    {
      id : 2,
      name : "발주조회",
      link : "/order/searchorder",
    },
  ];

  const homeMenuObj = sideMenuObj("홈",[]);
  const orderMenuObj = sideMenuObj("발주관리",orderSideMenuElements);
  const stockMenuObj = sideMenuObj("재고관리",[]);

  return (
    <Router>
      <Switch>
        <Route path="/testChart">
          <DoughnutChart />
        </Route>
        <Route path="/testTable">
          <PaginationTableRender />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/makeaccount">
          <MakeAccount />
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
        <Route path="/stock">
          <ManageStock sideMenu={stockMenuObj}/>
        </Route>
        <Route path="/">
          <Home sideMenu={homeMenuObj}/>
        </Route>
      </Switch>
    </Router>
  );
}




export default App;
