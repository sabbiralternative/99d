import { Link, useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosSecure } from "../../lib/AxiosSecure";
import toast from "react-hot-toast";
import { ApiContext } from "../../context/ApiProvider";
import { API, Settings } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faKey,
  faMobile,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaMobileAlt, FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
// import getOtpOnWhatsapp from "../../utils/getOtpOnWhatsapp";
import images from "../../assets/images";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";
const Register = () => {
  const [tab, setTab] = useState(
    Settings.registration_mobile ? "mobile" : "username",
  );
  const { getLanguage } = useLanguage();
  const affnook_token = localStorage.getItem("affnook_token");
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const referralCode = localStorage.getItem("referralCode");

  const [timer, setTimer] = useState(null);
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",
    mobileNo: "",
    otp: "",
    referralCode: "",
    username: "",
  });
  const { logo } = useContext(ApiContext);
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    orderId: "",
    otpMethod: "",
  });

  /* Handle register */
  const onSubmit = async () => {
    if (
      userData?.password !== userData?.confirmPassword &&
      userData?.confirmPassword?.length > 0
    ) {
      return toast.error("Password did not match !");
    } else if (userData?.password === "") {
      return toast.error("Password is required !");
    } else if (userData?.confirmPassword === "") {
      return toast.error("Confirm password is required !");
    } else if (userData?.mobileNo === "") {
      toast.error("Mobile no is required !");
    } else if (
      userData?.mobileNo?.length > 10 ||
      userData?.mobileNo?.length < 10
    ) {
      return toast.error("Enter ten digit mobile no !");
    } else if (userData?.otp === "") {
      return toast.error("OTP is required");
    } else if (userData?.otp?.length > 4 || userData?.otp?.length < 4) {
      return toast.error("Enter four digit OTP no");
    } else {
      const registerData = {
        username: userData?.username,
        password: userData?.password,
        confirmPassword: userData?.confirmPassword,
        mobile: userData?.mobileNo,
        otp: userData?.otp,
        referralCode: referralCode || userData.referralCode,
        orderId: order.orderId,
        otpMethod: order.otpMethod,
        affnook_token: affnook_token || null,
        registration_mobile: Settings.registration_mobile,
        registration_username: Settings.registration_username,
      };

      const { data } = await AxiosSecure.post(API.register, registerData);
      if (data?.success) {
        if (window?.fbq) {
          window.fbq("track", "CompleteRegistration", {
            content_name: "User Signup",
            status: "success",
          });
        }

        const token = data?.result?.token;
        const bonusToken = data?.result?.bonusToken;
        const user = data?.result?.loginName;
        const game = data?.result?.buttonValue?.game;
        const memberId = data?.result?.memberId;
        dispatch(setUser({ user, token }));
        const modal = {
          banner: data?.result?.banner,
          bannerTitle: data?.result?.bannerTitle,
        };
        if (modal?.banner) {
          localStorage.setItem("modal", JSON.stringify(modal));
        }
        localStorage.setItem("memberId", memberId);
        localStorage.setItem("buttonValue", JSON.stringify(game));
        localStorage.setItem("token", token);
        localStorage.setItem("bonusToken", bonusToken);
        localStorage.setItem("token", data.result.token);

        if (data?.result?.changePassword === true) {
          navigate("/change-password-login");
        } else {
          toast.success(data?.result?.message);
          navigate("/");
        }
      } else {
        toast.error(data?.error?.description);
      }
    }
  };

  /* Get whats app api */
  const getOtp = async () => {
    const otpData = {
      mobile: userData?.mobileNo,
    };

    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;

    if (data?.success) {
      setTimer(60);
      setOrder({
        orderId: data?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  // const handleGetOtpOnWhatsapp = async () => {
  //   await getOtpOnWhatsapp(userData.mobileNo, setOrder);
  // };
  const getWhatsappOTP = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);
  return (
    <div className="login" style={{ minHeight: "100vh", height: "100%" }}>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="loginInner1">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                  className="log-logo m-b-20 text-center"
                >
                  <img
                    style={{
                      height: `${Settings.logo_height}`,
                      width: `${Settings.logo_width}`,
                    }}
                    className="logo-login"
                    src={logo}
                  />
                </div>
                <div className="featured-box-login featured-box-secundary default">
                  <h4 className="text-center">
                    {getLanguage(LanguageKey.REGISTER)}
                    <FontAwesomeIcon icon={faHandPointDown} className="ml-2" />
                  </h4>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    className="ng-dirty ng-touched ng-valid"
                  >
                    {Settings.registration_mobile &&
                      Settings.registration_username && (
                        <div
                          style={{
                            width: "100%",
                            background:
                              "color-mix(in srgb, var(--theme1-bg) 30%, transparent)",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <div
                              onClick={() => setTab("mobile")}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "5px",
                                width: "100%",
                                gap: "6px",
                                color: tab === "mobile" ? "white" : "black",
                                background:
                                  tab === "mobile"
                                    ? "var(--theme1-bg)"
                                    : undefined,
                              }}
                            >
                              <FaMobileAlt />

                              <span>{getLanguage(LanguageKey.BY_PHONE)}</span>
                            </div>

                            <div
                              onClick={() => setTab("username")}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "5px",
                                width: "100%",
                                gap: "6px",
                                color: tab === "username" ? "white" : "black",
                                background:
                                  tab === "username"
                                    ? "var(--theme1-bg)"
                                    : undefined,
                              }}
                            >
                              <FaRegUser />

                              <span>
                                {getLanguage(LanguageKey.BY_USERNAME)}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    {tab === "mobile" && Settings.registration_mobile && (
                      <div className="form-group m-b-20">
                        <input
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              mobileNo: e.target.value,
                            })
                          }
                          type="number"
                          aria-required="true"
                          aria-invalid="false"
                          className="form-control ng-dirty ng-valid ng-touched"
                          placeholder="Mobile No."
                        />
                        <FontAwesomeIcon
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "8px",
                          }}
                          icon={faMobile}
                        />
                        {timer ? (
                          <button
                            style={{ cursor: "auto" }}
                            className="btn btn-primary btn-block"
                            type="button"
                          >
                            {getLanguage(LanguageKey.RETRY_IN)} {timer}
                          </button>
                        ) : (
                          <Fragment>
                            <button
                              onClick={getOtp}
                              className="btn btn-primary btn-block"
                              type="button"
                            >
                              {getLanguage(LanguageKey.GET_OTP_ON_MESSAGE)}
                            </button>
                            {/* {Settings.otpWhatsapp && (
                            <button
                              onClick={handleGetOtpOnWhatsapp}
                              disabled={userData?.mobileNo?.length < 10}
                              className="btn btn-primary btn-block"
                              type="button"
                            >
                              Get OTP Whatsapp
                            </button>
                          )} */}
                          </Fragment>
                        )}
                      </div>
                    )}
                    {tab === "username" && Settings.registration_username && (
                      <div className="form-group m-b-20">
                        <input
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            });
                          }}
                          placeholder="Username"
                          type="text"
                          aria-required="true"
                          aria-invalid="false"
                          className="form-control ng-dirty ng-valid ng-touched"
                        />
                      </div>
                    )}

                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            password: e.target.value,
                          });
                        }}
                        placeholder="Password"
                        type="password"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "8px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            confirmPassword: e.target.value,
                          });
                        }}
                        placeholder="Confirm Password"
                        type="password"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "8px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            otp: e.target.value,
                          });
                        }}
                        placeholder="OTP"
                        type="text"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                        maxLength={6}
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "8px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            referralCode: e.target.value,
                          });
                        }}
                        readOnly={referralCode}
                        placeholder="Referral Code"
                        type="text"
                        aria-required="true"
                        aria-invalid="false"
                        className="form-control ng-dirty ng-valid ng-touched"
                        defaultValue={referralCode}
                      />
                      <FontAwesomeIcon
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "8px",
                        }}
                        icon={faKey}
                      />
                    </div>
                    <div className="form-group text-center mb-1">
                      <button
                        type="submit"
                        className="btn btn-submit btn-login"
                      >
                        {getLanguage(LanguageKey.REGISTER)}
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>
                    {!token &&
                      Settings.whatsapplink &&
                      Settings.registration_whatsapp && (
                        <Fragment>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "10px",
                              margin: "10px 0px",
                            }}
                          >
                            <div
                              style={{
                                border: "1px solid gray",
                                width: "100%",
                                opacity: "0.5",
                              }}
                            />
                            <span
                              style={{
                                opacity: "0.5",
                                fontSize: "14px",
                              }}
                            >
                              {getLanguage(LanguageKey.OR)}
                            </span>
                            <div
                              style={{
                                border: "1px solid gray",
                                width: "100%",
                                opacity: "0.5",
                              }}
                            />
                          </div>
                          <button
                            onClick={() =>
                              getWhatsappOTP(Settings.whatsapplink)
                            }
                            className="btn btn-primary btn-block"
                            type="button"
                          >
                            <img
                              style={{
                                height: "18px",
                                width: "18px",
                              }}
                              src={images.whatsapp2}
                              alt=""
                            />
                            <span style={{ marginLeft: "10px" }}>
                              {" "}
                              {getLanguage(LanguageKey.GET_ID_ON_WHATSAPP)}
                            </span>
                          </button>
                        </Fragment>
                      )}
                    <div className="mt-2 mb-1">
                      <b>Already have User?</b>{" "}
                      <Link to="/login" className="ms-1">
                        <b>{getLanguage(LanguageKey.LOGIN)}</b>
                      </Link>
                    </div>
                    {/* <small className="recaptchaTerms">
                      This site is protected by reCAPTCHA and the Google
                      <a>Privacy Policy</a>
                      and
                      <a>Terms of Service</a>
                      apply.
                    </small> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
