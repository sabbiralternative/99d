import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";

const Dropdown = ({ setShowReferral }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <ul>
      <li>
        <Link to="/account-statement">Account Statement</Link>
      </li>
      <li>
        <Link to="/bonus-statement">Bonus Statement</Link>
      </li>
      {Settings.referral && (
        <li onClick={() => setShowReferral(true)}>
          <a style={{ color: "black" }}>Referral</a>
        </li>
      )}
      <li>
        <Link to="/referral-statement">Referral Statement</Link>
      </li>
      <li>
        <Link to="/deposit-withdraw-report">Deposit Withdraw Report</Link>
      </li>
      <li>
        <Link to="/my-bank-details">My Bank Details</Link>
      </li>
      <li>
        <Link to="/reports/profit-loss">Profit Loss Report</Link>
      </li>
      <li>
        <Link to="/reports/bet-history">Bet History</Link>
      </li>
      <li>
        <Link to="/unsettled-bets">Unsetteled Bet</Link>
      </li>
      <li>
        <Link to="/change-btn-value">Set Button Values</Link>
      </li>
      <li>
        <Link to="/change-password">Change Password</Link>
      </li>
      <li>
        <hr />
      </li>
      <li style={{ color: "black" }} onClick={handleLogout}>
        <a>signout</a>
      </li>
    </ul>
  );
};

export default Dropdown;
