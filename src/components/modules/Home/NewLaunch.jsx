import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewLaunch = ({ new_launch }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };

  return (
    <div className="row mx-0 mt-1 newlaunch">
      <h2 className="newheading">
        <span>New Launch</span>
      </h2>
      {new_launch?.map((item) => {
        return (
          <div
            onClick={() => handleNavigateToIFrame(item)}
            key={item?.id}
            className="col-3"
          >
            <img className="img-fluid" src={`/d/${item?.url_thumb}`} />
            <div className="casino-name">{item?.name}r</div>
          </div>
        );
      })}
    </div>
  );
};

export default NewLaunch;
