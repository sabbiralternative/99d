import { Navigate } from "react-router-dom";
import { Settings } from "../api";
import { logout } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  if (Settings.forceLogin) {
    if (!token) {
      dispatch(logout());
      return <Navigate to={`${isMobile ? "/m/login" : "/login"}`}></Navigate>;
    }
  }
  return children;
};

export default PrivateRoute;
