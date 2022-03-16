import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
//import Login from "./routes/Login";
import JeanLogin from "./routes/JeanLogin/JeanLogin";
import JeanJoin from "./routes/JeanLogin/JeanJoin";
import JeanFindPw from "./routes/JeanLogin/JeanForgetPw";
import JeanFindId from "./routes/JeanLogin/JeanForgetId";
//import MakeAccount from "./routes/MakeAccount";
import OrderResult from "./routes/OrderResult";
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
import NoticeDetails from "./routes/NoticeDetail";
import QnaWrite from "./routes/QnaWrite";
import PaginationTableRender from "./TablePaginationTest/tableRender";
import NoticeList from "./routes/NoticeList";
import DoughnutChart from "./ChartTest/chartRender";

//admin
import AdminLogin from "./routes/AdminLogin";
import AdminNotice from "./routes/AdminNotice";
import AdminNoticeDetails from "./routes/AdminNoticeDetail";
import AdminInquiry from "./routes/AdminInquiry";
import AdminInquiryDetails from "./routes/AdminInquiryDetail";

function App() {
  const sideMenuObj = function (topName, sideMenuElements) {
    return {
      name: topName,
      elementsObj: sideMenuElements,
    };
  };

  const customerCenterElements = [
    {
      id: "noticeList",
      name: "Notice",
      link: "/notice",
    },
    {
      id: "qnaList",
      name: "QNA",
      link: "/qna",
    },
    {
      id: "qnaWrite",
      name: "Write Inquiry",
      link: "/qna/write",
    },
  ];

  const userMenuElements = [
    {
      id: "showEditUserInfo",
      name: "Profile",
      link: "/user/info",
    },
    {
      id: "changeUserPwd",
      name: "Change Password",
      link: "/user/changepwd",
    },
    {
      id: "deleteUserInfo",
      name: "Withdraw",
      link: "/user/delete",
    },
  ];

  const orderSideMenuElements = [
    {
      id: "searchitem",
      name: "Add Retailer",
      link: "/order/retailer/add",
    },
    {
      id: "confirmitem",
      name: "Retailer",
      link: "/order/retailer",
    },
    {
      id: "requestorder",
      name: "Order",
      link: "/order/requestorder",
    },
    {
      id: "searchorder",
      name: "Order List",
      link: "/order/searchorder",
    },
  ];

  const stockSideMenuElements = [
    {
      id: "stockadd",
      name: "Add Stock",
      link: "/stock/add",
    },
    {
      id: "stockedit",
      name: "Stock List",
      link: "/stock/edit",
    },
  ];

  const adminNoticeSideMenuElements = [
    {
      id: "writeNotice",
      name: "Notice",
      link: "/admin/notice",
    },
    {
      id: "ansInquiry",
      name: "Answer Inquiry",
      link: "/admin/inquiry",
    },
  ];

  const homeMenuObj = sideMenuObj("Home", []);
  const orderMenuObj = sideMenuObj("Order", orderSideMenuElements);
  const stockMenuObj = sideMenuObj("Stock", stockSideMenuElements);
  const userMenuObj = sideMenuObj("Profile", userMenuElements);
  const customerCenterObj = sideMenuObj(
    "Customer Center",
    customerCenterElements
  );
  const adminObj = sideMenuObj("Management", adminNoticeSideMenuElements);
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
        <Route path="/notice/:id">
          <NoticeDetails sideMenu={customerCenterObj} />
        </Route>
        <Route path="/notice">
          <NoticeList sideMenu={customerCenterObj} />
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
          <OrderResult sideMenu={orderMenuObj} />
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
        <Route path="/admin/notice/:id">
          <AdminNoticeDetails sideMenu={adminObj} />
        </Route>
        <Route path="/admin/notice">
          <AdminNotice sideMenu={adminObj} />
        </Route>
        <Route path="/admin/inquiry/:id">
          <AdminInquiryDetails sideMenu={adminObj} />
        </Route>
        <Route path="/admin/inquiry">
          <AdminInquiry sideMenu={adminObj} />
        </Route>
        <Route path="/admin/login">
          <AdminLogin sideMenu={adminObj} />
        </Route>
        <Route path="/">
          <Home sideMenu={homeMenuObj} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
