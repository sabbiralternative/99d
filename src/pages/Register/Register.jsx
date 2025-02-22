import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosSecure } from "../../lib/AxiosSecure";
import toast from "react-hot-toast";
import { ApiContext } from "../../context/ApiProvider";
import { API } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faKey,
  faMobile,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import useWhatsApp from "../../hooks/whatsapp";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const referralCode = localStorage.getItem("referralCode");
  const { refetch } = useWhatsApp();
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",
    mobileNo: "",
    otp: "",
    referralCode: "",
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
        password: userData?.password,
        confirmPassword: userData?.confirmPassword,
        mobile: userData?.mobileNo,
        otp: userData?.otp,
        referralCode: referralCode || userData.referralCode,
        orderId: order.orderId,
        otpMethod: order.otpMethod,
      };

      const { data } = await AxiosSecure.post(API.register, registerData);
      if (data?.success) {
        refetch();
        const token = data?.result?.token;
        const bonusToken = data?.result?.bonusToken;
        const user = data?.result?.loginName;
        const game = data?.result?.buttonValue?.game;
        const memberId = data?.result?.memberId;
        dispatch(setUser({ user, token }));
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
      setOrder({
        orderId: data?.result?.orderId,
        otpMethod: "sms",
      });
      toast.error(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  return (
    <div className="login">
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
                  <img className="logo-login" src={logo} />
                </div>
                <div className="featured-box-login featured-box-secundary default">
                  <h4 className="text-center">
                    Register
                    <FontAwesomeIcon icon={faHandPointDown} className="ml-2" />
                  </h4>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    className="ng-dirty ng-touched ng-valid"
                  >
                    <div className="form-group m-b-20">
                      <input
                        onChange={(e) =>
                          setUserData({ ...userData, mobileNo: e.target.value })
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
                      <button
                        onClick={getOtp}
                        className="btn btn-primary btn-block"
                        type="button"
                      >
                        Get OTP
                      </button>
                    </div>
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
                        placeholder="Referral Code"
                        type="text"
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
                    <div className="form-group text-center mb-1">
                      <button
                        type="submit"
                        className="btn btn-submit btn-login"
                      >
                        Register
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>
                    <div className="mt-2 mb-1">
                      <b>Already have User?</b>{" "}
                      <Link to="/login" className="ms-1">
                        <b>Login here</b>
                      </Link>
                    </div>
                    <small className="recaptchaTerms">
                      This site is protected by reCAPTCHA and the Google
                      <a>Privacy Policy</a>
                      and
                      <a>Terms of Service</a>
                      apply.
                    </small>
                    <p className="mt-1 align-center" style={{ lineHeight: 2 }}>
                      <a
                        className="mail-link"
                        href="mailto:gold365info@gmail.com"
                      >
                        gold365info@gmail.com
                      </a>
                    </p>
                    <div className="social_connect">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2201/2201767.png"
                        className="slide-right handicon"
                      />
                      <a
                        target="_blank"
                        href="https://instagram.com/gold365official"
                      >
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={24} cy={24} r={20} fill="#C13584" />
                          <path
                            d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                            fill="white"
                          />
                          <path
                            d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                            fill="white"
                          />
                          <path
                            d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                            fill="white"
                          />
                        </svg>
                        <span>Instagram</span>
                      </a>
                      <a target="_blank" href="https://telegram.me/Gold365Tg">
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx={16}
                            cy={16}
                            r={14}
                            fill="url(#paint0_linear_87_7225)"
                          />
                          <path
                            d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_87_7225"
                              x1={16}
                              y1={2}
                              x2={16}
                              y2={30}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#37BBFE" />
                              <stop offset={1} stopColor="#007DBB" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span>Telegram</span>
                      </a>
                    </div>
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
