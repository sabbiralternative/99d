import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Settings } from "../../api";
import { useIndex } from "../../hooks";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate } = useIndex();

  useEffect(() => {
    const showRegister = () => {
      if (location.pathname.includes("/ref/") && Settings.registration) {
        const splitPath = location.pathname.split("/");
        const lastDigit = splitPath[splitPath?.length - 1];
        if (parseFloat(lastDigit)) {
          mutate({ type: "addReferralCount", referral_id: lastDigit });
          localStorage.setItem("referralCode", lastDigit);
          navigate("/register");
        }
      }
    };
    showRegister();
  }, [location, navigate, mutate]);

  return <Navigate to="/" replace />;
};

export default NotFound;
