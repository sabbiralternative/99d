import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import useWhatsApp from "../../../hooks/whatsapp";

const Dropdown = () => {
  const { closePopupForForever } = useSelector((state) => state?.global);
  const { data: socialLink } = useWhatsApp();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <ul>
      {socialLink?.result?.branchWhatsapplink && (
        <li
          onClick={() =>
            handleOpenSocialLink(socialLink?.result?.branchWhatsapplink)
          }
        >
          <Link>Deposit Support</Link>
        </li>
      )}

      <li>
        <Link to="/account-statement">Account Statement</Link>
      </li>
      <li>
        <Link to="/bonus-statement">Bonus Statement</Link>
      </li>
      {socialLink?.result?.referral && (
        <li>
          <Link to="/affiliate" style={{ color: "black" }}>
            Affiliate
          </Link>
        </li>
      )}
      <li>
        <Link to="/promotions" style={{ color: "black" }}>
          Promos & Bonus
        </Link>
      </li>
      <li>
        <Link to="/lossback-bonus" style={{ color: "black" }}>
          Lossback Bonus
        </Link>
      </li>
      {closePopupForForever && (
        <li>
          <Link to="/app-only-bonus" style={{ color: "black" }}>
            App Only Bonus
          </Link>
        </li>
      )}

      {/* <li>
        <Link to="/referral-statement">Referral Statement</Link>
      </li> */}

      <li>
        <Link to="/deposit-report">Deposit Report</Link>
      </li>
      <li>
        <Link to="/withdraw-report">Withdraw Report</Link>
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
      {/* {socialLink?.result?.whatsapplink && (
        <li
          onClick={() => handleOpenSocialLink(socialLink?.result?.whatsapplink)}
        >
          <Link>All Support</Link>
        </li>
      )} */}
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
