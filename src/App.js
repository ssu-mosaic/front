import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
//import Login from "./routes/Login";
import JeanLogin from "./routes/JeanLogin/JeanLogin";
import JeanJoin from "./routes/JeanLogin/JeanJoin";
import JeanFindPw from "./routes/JeanLogin/JeanForgetPw";
import JeanFindId from "./routes/JeanLogin/JeanForgetId";
//import MakeAccount from "./routes/MakeAccount";
import SearchOrder from "./routes/SearchOrder";
import ManageStock from "./routes/ManageStock";
import EditStock from "./routes/EditStock";
import OrderRequest from "./routes/OrderRequest";
import OrderRequestProduct from "./routes/OrderRequestProduct";
import OrderRequestBasket from "./routes/OrderRequestBasket";

import AddRetailer from "./routes/AddRetailer";
import RetailerList from "./routes/RetailerList";
import RetailerDetails from "./routes/RetailerDetails";

//user information management
import UserInfo from "./routes/UserInfo";
import UserDelete from "./routes/DeleteUser";
import UserPwdChange from "./routes/ChangePwd";

//customer service center
import CustomerCenter from "./routes/CustomerCenter";
import QnaDetails from "./routes/QnaDetails";
import QnaWrite from "./routes/QnaWrite";
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
    {
      id: "qnaWrite",
      name: "문의작성",
      link: "/qna/write",
    },
  ];

  const userMenuElements = [
    {
      id: "showEditUserInfo",
      name: "회원정보",
      link: "/user/info",
    },
    {
      id: "changeUserPwd",
      name: "비밀번호 수정",
      link: "/user/changepwd",
    },
    {
      id: "deleteUserInfo",
      name: "회원탈퇴",
      link: "/user/delete",
    },
  ];

  const orderSideMenuElements = [
    {
      id: "searchitem",
      name: "거래처등록",
      link: "/order/retailer/add",
    },
    {
      id: "confirmitem",
      name: "거래처목록",
      link: "/order/retailer",
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
      name: "재고목록",
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
        <Route path="/qna/write">
          <QnaWrite sideMenu={customerCenterObj} />
        </Route>
        <Route path="/qna/:id">
          <QnaDetails sideMenu={customerCenterObj} />
        </Route>
        <Route path="/qna">
          <CustomerCenter sideMenu={customerCenterObj} />
        </Route>
        <Route path="/user/changepwd">
          <UserPwdChange sideMenu={userMenuObj} />
        </Route>
        <Route path="/user/delete">
          <UserDelete sideMenu={userMenuObj} />
        </Route>
        <Route path="/user/info">
          <UserInfo sideMenu={userMenuObj} />
        </Route>
        <Route path="/order/searchorder">
          <SearchOrder sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/requestorder/basket">
          <OrderRequestBasket sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/requestorder/:id">
          <OrderRequestProduct sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/requestorder">
          <OrderRequest sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/retailer/add">
          <AddRetailer sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/retailer/:id">
          <RetailerDetails sideMenu={orderMenuObj} />
        </Route>
        <Route path="/order/retailer">
          <RetailerList sideMenu={orderMenuObj} />
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
