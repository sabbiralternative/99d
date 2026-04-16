import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { homeTab } from "../../../static/group";
import { useNavigate } from "react-router-dom";

const Tab = () => {
  const { group } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const handleGroupType = (item) => {
    if (item?.path) {
      navigate(item?.path);
    }
    if (item?.group) {
      dispatch(setGroup(item?.group));
    }
    if (item?.eventId) {
      if (token) {
        navigate(`/casino/cock-fight/${item?.eventId}`);
      } else {
        navigate("/login");
      }
    }
  };
  return (
    <>
      <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
        {homeTab.map((tab) => {
          return (
            <li
              style={{ color: group === tab.group ? "white" : "black" }}
              key={tab.id}
              className={` nav-item ${group === tab.group ? "active" : ""}`}
            >
              <a
                onClick={() => handleGroupType(tab)}
                role="tab"
                className={`nav-link  ${group === tab.group ? "active" : ""}`}
                aria-controls
                aria-selected="true"
                id
              >
                <span>{tab.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Tab;
