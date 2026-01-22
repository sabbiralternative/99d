import { useNavigate } from "react-router-dom";

const OurProviders = ({ our_provider }) => {
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };
  return (
    <div className="row mx-0 mt-0">
      <h2 className="newheading">
        <span>our providers</span>
      </h2>

      <div className="csn_div">
        {our_provider?.map((item) => {
          return (
            <div
              onClick={() => handleNavigateToIFrame(item)}
              key={item?.id}
              className="csn_thumb"
            >
              <img className="img-fluid" src={`/d/${item?.url_thumb}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProviders;
