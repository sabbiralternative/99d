import { useContext, useState } from "react";
import { ApiContext } from "../../../context/ApiProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification";
import useBalance from "../../../hooks/balance";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import images from "../../../assets/images";
import HeaderBottomMenu from "./HeaderBottomMenu";
import { Settings } from "../../../api";
import useWhatsApp from "../../../hooks/whatsapp";
import Search from "./Search";
import Referral from "../../modals/Referral/Referral";

const Header = () => {
  const [showReferral, setShowReferral] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { data: balance } = useBalance();
  const { logo } = useContext(ApiContext);
  const { data: socialLink } = useWhatsApp();

  const navigateWhatsApp = () => {
    if (token && socialLink?.result?.branchWhatsapplink) {
      window.open(socialLink?.result?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.result?.whatsapplink, "_blank");
    }
  };

  return (
    <div>
      {showReferral && <Referral setShowReferral={setShowReferral} />}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="header-top col-md-12">
              <div className="float-left">
                <Link
                  to="/"
                  className="logo router-link-exact-active router-link-active"
                >
                  <img
                    style={{
                      height: `${Settings.logoHeight}`,
                      width: `${Settings.logoWidth}`,
                    }}
                    className="logo-icon"
                    src={logo}
                  />
                </Link>
              </div>
              <ul className="float-right d-flex align-items-center">
                <li className="btns__deposit_withdrawal">
                  {Settings.deposit && (
                    <Link to="/deposit" className="btn_deposit">
                      <img src={images.deposit} className="img-fluid" />
                      deposit{" "}
                    </Link>
                  )}
                  {Settings.withdraw && (
                    <Link to="/withdraw" className="btn_withdrawal">
                      <img src={images.withdraw} className="img-fluid" />
                      withdrawal
                    </Link>
                  )}
                </li>

                <Search />
                <li className="float-left download-apklink">
                  <div>
                    <Link to="/rules" className="rules-link m-r-5">
                      <b>Rules</b>
                    </Link>
                  </div>
                </li>
                <li className="ballance float-left">
                  <div>
                    <span>Balance: </span>
                    <b>
                      <span>{balance?.availBalance}</span>
                    </b>
                  </div>
                  <div>
                    <Link>
                      <span className="t-underline">Exposure: </span>
                      <b>
                        <span className="t-underline">
                          {balance?.deductedExposure}
                        </span>
                      </b>
                    </Link>
                  </div>
                </li>
                <li className="account float-left">
                  <span>
                    {user}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <Dropdown setShowReferral={setShowReferral} />
                </li>
              </ul>
              <Notification />
            </div>
            <HeaderBottomMenu />
          </div>
        </div>
        <div />
      </header>
      {socialLink?.result?.instagramLink ? (
        <a
          style={{ background: "none", bottom: "30%", right: "4.5%" }}
          className="whatsapp_link"
          onClick={() =>
            window.open(socialLink?.result?.instagramLink, "_blank")
          }
        >
          <img
            style={{ filter: "none", height: "60px", width: "60px" }}
            src={images.instagram}
          />
        </a>
      ) : null}
      {socialLink?.result?.telegramLink ? (
        <a
          style={{ background: "none", bottom: "17%", right: "4.5%" }}
          className="whatsapp_link"
          onClick={() =>
            window.open(socialLink?.result?.telegramLink, "_blank")
          }
        >
          <img
            style={{ filter: "none", height: "60px", width: "60px" }}
            src={images.telegram}
          />
        </a>
      ) : null}
      {socialLink?.result?.whatsapplink ||
      socialLink?.result?.branchWhatsapplink ? (
        <a
          style={{ background: "none" }}
          className="whatsapp_link"
          onClick={navigateWhatsApp}
        >
          <img src={images.whatsapp} />
        </a>
      ) : null}
    </div>
  );
};

export default Header;
