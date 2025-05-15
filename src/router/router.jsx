import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Casino from "../pages/Casino/Casino";
import CasinoIFrame from "../pages/CasinoIFrame/CasinoIFrame";
import Register from "../pages/Register/Register";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ChangePasswordLogin from "../pages/ChangePasswordLogin/ChangePasswordLogin";
import UnSettledBet from "../pages/UnSettledBet/UnSettledBet";
import ChangeButtonValues from "../pages/ChangeButtonValue/ChangeButtonValues";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import IntCasino from "../pages/IntCasino/IntCasino";
import Deposit from "../pages/Deposit/Deposit";
import PrivateRoute from "./PrivateRoute";
import Withdraw from "../pages/Withdraw/Withdraw";
import Rules from "../pages/Rules/Rules";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import DepositWithdrawReport from "../pages/DepositWithdrawReport/DepositWithdrawReport";
import ReferralStatement from "../pages/ReferralStatement/ReferralStatement";
import NotFound from "../pages/NotFound/NotFound";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/int-casino",
          element: <IntCasino />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/unsettled-bets",
          element: <UnSettledBet />,
        },
        {
          path: "/change-btn-value",
          element: <ChangeButtonValues />,
        },
        {
          path: "/account-statement",
          element: <AccountStatement />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/referral-statement",
          element: <ReferralStatement />,
        },
        {
          path: "/deposit-withdraw-report",
          element: <DepositWithdrawReport />,
        },
        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/change-password-login",
      element: <ChangePasswordLogin />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/casino/:name/:gameId",
      element: <CasinoIFrame />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
