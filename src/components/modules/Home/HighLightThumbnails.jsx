import { useNavigate } from "react-router-dom";

const HighLightThumbnails = () => {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div className="row mx-0" style={{ marginBottom: "2px" }}>
      <div
        onClick={() => handleNavigate("/int-casino?category=Mines")}
        className="col-3 position-relative"
        style={{
          paddingLeft: "1px",
          paddingRight: "1px",
        }}
        tabIndex={0}
      >
        <img
          src="https://tezcdn.io/casino/casino-highlight/evoplay-730-280.gif"
          className="img-fluid"
        />
      </div>
      <div
        onClick={() => handleNavigate("/int-casino?category=Aviator")}
        className="col-3 position-relative"
        style={{
          paddingLeft: "1px",
          paddingRight: "1px",
        }}
        tabIndex={0}
      >
        <img
          src="https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif"
          className="img-fluid"
        />
      </div>
      <div
        onClick={() => handleNavigate("/int-casino?category=Fun Games")}
        className="col-3 position-relative"
        style={{
          paddingLeft: "1px",
          paddingRight: "1px",
        }}
        tabIndex={0}
      >
        <img
          src="https://tezcdn.io/casino/casino-highlight/fungames-730_280.gif"
          className="img-fluid"
        />
      </div>
      <div
        onClick={() => handleNavigate("/int-casino?category=Color Prediction")}
        className="col-3 position-relative"
        style={{
          paddingLeft: "1px",
          paddingRight: "1px",
        }}
        tabIndex={0}
      >
        <img
          src="https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HighLightThumbnails;
