import { useNavigate } from "react-router-dom";

const HighLightThumbnails = ({ highlight_casino }) => {
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };

  return (
    <div className="row mx-0" style={{ marginBottom: "2px" }}>
      {highlight_casino?.map((item) => {
        return (
          <div
            onClick={() => handleNavigateToIFrame(item)}
            key={item?.id}
            className="col-3 position-relative"
            style={{
              paddingLeft: "1px",
              paddingRight: "1px",
            }}
            tabIndex={0}
          >
            <img src={`/d/${item?.url_thumb}`} className="img-fluid" />
          </div>
        );
      })}
    </div>
  );
};

export default HighLightThumbnails;
