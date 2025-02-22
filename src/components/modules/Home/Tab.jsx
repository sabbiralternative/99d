import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { homeTab } from "../../../static/group";

const Tab = () => {
  const { group } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <>
      <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
        {homeTab.map((tab) => {
          return (
            <li
              style={{ color: "white" }}
              key={tab.id}
              className={` nav-item ${group === tab.group ? "active" : ""}`}
            >
              <a
                onClick={() => dispatch(setGroup(tab.group))}
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
