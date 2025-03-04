import { useContext } from "react";
import { ApiContext } from "../../../context/ApiProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification";
import useBalance from "../../../hooks/balance";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import images from "../../../assets/images";
import HeaderBottomMenu from "./HeaderBottomMenu";
import { Settings } from "../../../api";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: balance } = useBalance();
  const { logo } = useContext(ApiContext);

  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="header-top col-md-12">
              <div className="float-left">
                <Link
                  to="/"
                  className="logo router-link-exact-active router-link-active"
                >
                  <img className="logo-icon" src={logo} />
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
                <li className="search float-left">
                  <input
                    name="game_keyword"
                    placeholder="All Events"
                    autoComplete="off"
                    type="text"
                    className="ng-untouched ng-pristine ng-valid"
                    aria-expanded="false"
                    aria-autocomplete="list"
                  />
                  <a>
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </a>
                </li>
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
                  <Dropdown />
                </li>
              </ul>
              <Notification />
            </div>
            <HeaderBottomMenu />
          </div>
        </div>
        <div />
      </header>
      <Link
        target="_blank"
        style={{ background: "none" }}
        className="whatsapp_link"
        to="http://wa.link/lotus365support51"
      >
        <img src={images.whatsapp} />
      </Link>
    </div>
  );
};

export default Header;
