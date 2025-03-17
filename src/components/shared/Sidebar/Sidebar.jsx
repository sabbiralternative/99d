import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";
import { useMac88Query } from "../../../redux/features/events/events";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { homeTab } from "../../../static/group";
import { useDispatch } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useMac88Query();

  const handleNavigateToIFrame = (casino) => {
    navigate(
      `/casino/${casino?.game_name?.replace(/ /g, "")}/${casino?.game_id}`
    );
  };

  const handleShowGroup = (tab) => {
    dispatch(setGroup(tab.group));
    navigate("/");
  };
  return (
    <div className="sidebar d-none col-md-2 d-md-block">
      <div>
        <div
          onClick={() => navigate("/deposit")}
          className="deposit-withdraw-sidebar-title deposit"
        >
          <h5 className="d-inline-block m-b-0" tabIndex={0}>
            <img src={images.deposit} />
            Deposit
          </h5>
        </div>
        <div
          onClick={() => navigate("/withdraw")}
          className="deposit-withdraw-sidebar-title withdraw"
        >
          <h5 className="d-inline-block m-b-0" tabIndex={0}>
            <img src={images.withdraw} />
            Withdraw
          </h5>
        </div>
        <div
          data-bs-toggle="collapse"
          data-bs-target=".casino"
          className="sidebar-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5 className="d-inline-block m-b-0">Others</h5>
          <IoIosArrowDown color="#fff" />
        </div>
        <nav className="collapse casino show">
          <ul>
            {data?.data?.slice(0, 16)?.map((casino) => {
              return (
                <li
                  onClick={() => handleNavigateToIFrame(casino)}
                  key={casino?.game_id}
                  className="nav-item"
                >
                  <a className="nav-link">
                    <span> {casino?.game_name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          data-bs-toggle="collapse"
          data-bs-target=".events"
          aria-controls="events"
          aria-expanded="true"
          role="button"
          className="sidebar-title m-t-5 theme2bg"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5 className="text-white d-inline-block m-b-0">All Sports</h5>
          <IoIosArrowDown color="#fff" />
        </div>
        <div id="events" className="mtree-main collapse events show">
          <div className="ps">
            <nav>
              {homeTab
                ?.filter((t) => t?.group)
                ?.map((tab) => {
                  return (
                    <ul key={tab.id} className="mtree transit bubba">
                      <li
                        onClick={() => handleShowGroup(tab)}
                        className="mtree-node item"
                      >
                        <div className="text-dark">
                          <a data-bs-toggle="collapse">
                            <span>
                              <FaRegSquarePlus />
                            </span>
                            <span style={{ marginLeft: "2px" }}>
                              {tab.name}
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  );
                })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
