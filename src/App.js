import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
//import Login from "./routes/Login";
import JeanLogin from "./routes/JeanLogin/JeanLogin";
import JeanJoin from "./routes/JeanLogin/JeanJoin";
import JeanFindPw from "./routes/JeanLogin/JeanForgetPw";
import JeanFindId from "./routes/JeanLogin/JeanForgetId";
//import MakeAccount from "./routes/MakeAccount";
import SearchItem from "./routes/SearchItem";
import SearchOrder from "./routes/SearchOrder";
import ConfirmItem from "./routes/ConfirmItem";
import ManageStock from "./routes/ManageStock";
import EditStock from "./routes/EditStock";
import OrderRequest from "./routes/OrderRequest";
import UserInfo from "./routes/UserInfo";
import CustomerCenter from "./routes/CustomerCenter";
import QnaDetails from "./routes/QnaDetails";

import PaginationTableRender from "./TablePaginationTest/tableRender";
import DoughnutChart from "./ChartTest/chartRender";

function App() {
  const sideMenuObj = function (topName, sideMenuElements) {
    return {
      name: topName,
      elementsObj: sideMenuElements,
    };
  };

  const customerCenterElements = [
    {
      id: "qnaList",
      name: "문의목록",
      link: "/qna",
    },
  ];

  const userMenuElements = [
    {
      id: "showEditUserInfo",
      name: "회원정보",
      link: "/user/info",
    },
  ];

  const orderSideMenuElements = [
    {
      id: "searchitem",
      name: "거래처등록",
      link: "/order/searchitem",
    },
    {
      id: "confirmitem",
      name: "거래처목록",
      link: "/order/confirmitem",
    },
    {
      id: "requestorder",
      name: "발주요청",
      link: "/order/requestorder",
    },
    {
      id: "searchorder",
      name: "발주조회",
      link: "/order/searchorder",
    },
  ];

  const stockSideMenuElements = [
    {
      id: "stockadd",
      name: "재고등록",
      link: "/stock/add",
    },
    {
      id: "stockedit",
      name: "재고편집",
      link: "/stock/edit",
    },
  ];

  const homeMenuObj = sideMenuObj("홈", []);
  const orderMenuObj = sideMenuObj("발주관리", orderSideMenuElements);
  const stockMenuObj = sideMenuObj("재고관리", stockSideMenuElements);
  const userMenuObj = sideMenuObj("회원정보", userMenuElements);
  const customerCenterObj = sideMenuObj("문의센터", customerCenterElements);

  return (
    <Router>
      <Switch>
        <Route path="/testChart">
          <DoughnutChart />
        </Route>
        <Route path="/testTable">
          <PaginationTableRender />
        </Route>
        <Route path="/login/findid">
          <JeanFindId />
        </Route>
        <Route path="/login/findpwd">
          <JeanFindPw />
        </Route>
        <Route path="/login/makeaccount">
          <JeanJoin />
        </Route>
        <Route path="/login">
          <JeanLogin />
        </Route>
        <Route path="/qna/:id">
          <QnaDetails sideMenu={customerCenterObj} />
        </Route>
        <Route path="/qna">
          <CustomerCenter sideMenu={customerCenterObj} />
        </Route>
        <Route path="/user/info">
          <UserInfo sideMenu={userMenuObj} />
        </Route>
        <Route path="/order/confirmitem">
          <ConfirmItem sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/searchorder">
          <SearchOrder sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/requestorder">
          <OrderRequest sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/searchitem">
          <SearchItem sideMenu={orderMenuObj} />
        </Route>
        <Route path="/stock/edit">
          <EditStock sideMenu={stockMenuObj} />
        </Route>
        <Route path="/stock/add">
          <ManageStock sideMenu={stockMenuObj} />
        </Route>
        <Route path="/">
          <Home sideMenu={homeMenuObj} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
