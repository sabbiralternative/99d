import { Fragment, useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification";
import useBalance from "../../../hooks/balance";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import images from "../../../assets/images";
import HeaderBottomMenu from "./HeaderBottomMenu";
import { Settings } from "../../../api";
import Search from "./Search";
import Referral from "../../modals/Referral/Referral";
import {
  setClosePopUpForForever,
  setShowAPKModal,
} from "../../../redux/features/global/globalSlice";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import BuildVersion from "../../modals/BuildVersion/BuildVersion";
import Error from "../../modals/Error/Error";

const Header = () => {
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const navigate = useNavigate();
  const { showAPKModal, closePopupForForever } = useSelector(
    (state) => state?.global,
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const [showReferral, setShowReferral] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { data: balance } = useBalance();
  const { logo } = useContext(ApiContext);

  const navigateWhatsApp = () => {
    if (token && Settings.branchWhatsapplink) {
      window.open(Settings.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings.whatsapplink, "_blank");
    }
  };

  useEffect(() => {
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
    }
  }, [dispatch, location?.state?.pathname, location.pathname]);

  useEffect(() => {
    const newVersion = Settings.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  if (Settings.appOnly && !closePopupForForever) {
    return <Error />;
  }
  return (
    <div>
      {showReferral && <Referral setShowReferral={setShowReferral} />}
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={Settings.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}

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
                {token && (
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
                )}

                <Search />
                <li className="float-left download-apklink">
                  <div>
                    <Link to="/rules" className="rules-link m-r-5">
                      <b>Rules</b>
                    </Link>
                  </div>
                </li>
                {!token && (
                  <li className="btns__deposit_withdrawal">
                    <button
                      style={{
                        backgroundColor: "var(--theme2-bg85)",
                        color: "white",
                        marginLeft: "10px",
                      }}
                      onClick={() => navigate("/login")}
                      type="button"
                      className="btn btn-submit btn-login"
                    >
                      Login
                      <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                    </button>
                    {Settings.registration && (
                      <button
                        style={{
                          backgroundColor: "var(--theme2-bg85)",
                          marginLeft: "10px",
                          color: "white",
                        }}
                        onClick={() => navigate("/register")}
                        type="button"
                        className="btn btn-submit btn-login"
                      >
                        Register
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    )}
                  </li>
                )}
                {token && (
                  <Fragment>
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
                  </Fragment>
                )}
              </ul>
              <Notification />
            </div>
            <HeaderBottomMenu />
          </div>
        </div>
        <div />
      </header>
      {Settings.instagramLink ? (
        <a
          style={{ background: "none", bottom: "30%", right: "4.5%" }}
          className="whatsapp_link"
          onClick={() => window.open(Settings.instagramLink, "_blank")}
        >
          <img
            style={{ filter: "none", height: "60px", width: "60px" }}
            src={images.instagram}
          />
        </a>
      ) : null}
      {Settings.telegramLink ? (
        <a
          style={{ background: "none", bottom: "17%", right: "4.5%" }}
          className="whatsapp_link"
          onClick={() => window.open(Settings.telegramLink, "_blank")}
        >
          <img
            style={{ filter: "none", height: "60px", width: "60px" }}
            src={images.telegram}
          />
        </a>
      ) : null}
      {Settings.whatsapplink || Settings.branchWhatsapplink ? (
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
