/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";

const HighLightThumbnails = ({ highlight_casino }) => {
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    navigate(`/casino?product=${casino?.product}&category=${casino?.category}`);
  };

  return (
    // <div className="row mx-0" style={{ marginBottom: "2px" }}>
    //   {highlight_casino?.map((item) => {
    //     return (
    //       <div
    //         onClick={() => handleNavigateToIFrame(item)}
    //         key={item?.id}
    //         className="col-3 position-relative"
    //         style={{
    //           paddingLeft: "1px",
    //           paddingRight: "1px",
    //         }}
    //         tabIndex={0}
    //       >
    //         <img src={`/d/${item?.url_thumb}`} className="img-fluid" />
    //       </div>
    //     );
    //   })}
    // </div>
    <div _ngcontent-gkq-c98 className="row mx-0 mt-1 highlight-casino">
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17741821545376191.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17721055468085952.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17753225505208026.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17721055626412579.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px", marginTop: "2px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17721055725370388.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px", marginTop: "2px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17721055808070945.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px", marginTop: "2px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17753845197295887.gif"
        />
      </div>
      <div
        _ngcontent-gkq-c98
        className="col-3 position-relative"
        style={{ paddingRight: "1px", paddingLeft: "1px", marginTop: "2px" }}
      >
        <img
          _ngcontent-gkq-c98
          className="img-fluid"
          src="https://pulseedge.io/frontend_config/diam/images/17721055992383369.gif"
        />
      </div>
      {/**/}
    </div>
  );
};

export default HighLightThumbnails;
