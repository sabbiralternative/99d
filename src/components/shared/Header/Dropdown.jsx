import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Dropdown = () => {
  const { getLanguage } = useLanguage();
  const { closePopupForForever } = useSelector((state) => state?.global);

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
      {Settings.branchWhatsapplink && (
        <li onClick={() => handleOpenSocialLink(Settings.branchWhatsapplink)}>
          <Link>Customer Support</Link>
        </li>
      )}

      <li>
        <Link to="/account-statement">
          {getLanguage(LanguageKey.ACCOUNT_STATEMENT)}
        </Link>
      </li>
      <li>
        <Link to="/bonus-statement">
          {getLanguage(LanguageKey.BONUS_STATEMENT)}
        </Link>
      </li>
      {Settings.referral && (
        <li>
          <Link to="/affiliate" style={{ color: "black" }}>
            {getLanguage(LanguageKey.AFFILIATE)}
          </Link>
        </li>
      )}
      <li>
        <Link to="/promotions" style={{ color: "black" }}>
          {getLanguage(LanguageKey.PROMOTION_AND_BONUSES)}
        </Link>
      </li>
      <li>
        <Link to="/lossback-bonus" style={{ color: "black" }}>
          {getLanguage(LanguageKey.LOSSBACK_BONUS)}
        </Link>
      </li>
      {closePopupForForever && (
        <li>
          <Link to="/app-only-bonus" style={{ color: "black" }}>
            {getLanguage(LanguageKey.APP_ONLY_BONUS)}
          </Link>
        </li>
      )}

      {/* <li>
        <Link to="/referral-statement">Referral Statement</Link>
      </li> */}

      <li>
        <Link to="/deposit-report">
          {getLanguage(LanguageKey.DEPOSIT_STATEMENT)}
        </Link>
      </li>
      <li>
        <Link to="/withdraw-report">
          {getLanguage(LanguageKey.WITHDRAW_STATMENT)}
        </Link>
      </li>
      <li>
        <Link to="/my-bank-details">
          {getLanguage(LanguageKey.MY_BANK_DETAILS)}
        </Link>
      </li>
      <li>
        <Link to="/reports/profit-loss">
          {getLanguage(LanguageKey.PROFIT_LOSS)}
        </Link>
      </li>
      <li>
        <Link to="/reports/bet-history">
          {getLanguage(LanguageKey.BET_HISTORY)}
        </Link>
      </li>
      <li>
        <Link to="/unsettled-bets">
          {getLanguage(LanguageKey.UNSETTLED_BETS)}t
        </Link>
      </li>
      <li>
        <Link to="/change-btn-value">
          {getLanguage(LanguageKey.EDIT_STAKE)}
        </Link>
      </li>
      <li>
        <Link to="/change-password">
          {getLanguage(LanguageKey.CHANGE_PASSWORD)}
        </Link>
      </li>
      {/* {Settings.whatsapplink && (
        <li
          onClick={() => handleOpenSocialLink(Settings.whatsapplink)}
        >
          <Link>All Support</Link>
        </li>
      )} */}
      <li>
        <hr />
      </li>
      <li style={{ color: "black" }} onClick={handleLogout}>
        <a>{getLanguage(LanguageKey.LOGOUT)}</a>
      </li>
    </ul>
  );
};

export default Dropdown;
