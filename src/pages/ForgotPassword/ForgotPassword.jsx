import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ApiContext } from "../../context/ApiProvider";
import { Settings } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faKey,
  faPhone,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../redux/features/auth/authApi";
const Register = () => {
  const navigate = useNavigate();
  const [handleForgotPassword] = useForgotPasswordMutation();
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState({});
  const [getOTP] = useGetOtpMutation();
  const { register, handleSubmit } = useForm();
  const { logo } = useContext(ApiContext);

  const handleMobileInputChange = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const handleOTP = async () => {
    if (mobile.length > 0) {
      const res = await getOTP({ mobile }).unwrap();

      if (res?.success) {
        setOTP({
          orderId: res?.result?.orderId,
          otpMethod: "sms",
        });
        toast.success(res?.result?.message);
      } else {
        toast.error(res?.error?.errorMessage);
      }
    }
  };

  const onSubmit = async (data) => {
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();
    if (result.success) {
      toast.success(result?.message);
      navigate("/login");
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
    }
  };

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
                      height: `${Settings.logoHeight}`,
                      width: `${Settings.logoWidth}`,
                    }}
                    className="logo-login"
                    src={logo}
                  />
                </div>
                <div className="featured-box-login featured-box-secundary default">
                  <h4 className="text-center">
                    Forgot Password
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
                        onChange={(e) => handleMobileInputChange(e)}
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
                        icon={faPhone}
                      />
                      <button
                        onClick={handleOTP}
                        className="btn btn-primary btn-block"
                        type="button"
                      >
                        Get OTP
                      </button>
                    </div>
                    <div className="form-group m-b-20">
                      <input
                        {...register("otp", { required: true })}
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
                        {...register("password", { required: true })}
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
                        {...register("confirmPassword", { required: true })}
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

                    <div className="form-group text-center mb-1">
                      <button
                        type="submit"
                        className="btn btn-submit btn-login"
                      >
                        Change Password
                        <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                      </button>
                    </div>

                    <small className="recaptchaTerms">
                      This site is protected by reCAPTCHA and the Google
                      <a>Privacy Policy</a>
                      and
                      <a>Terms of Service</a>
                      apply.
                    </small>
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
