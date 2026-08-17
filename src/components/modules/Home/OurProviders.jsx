import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const OurProviders = ({ our_provider }) => {
  const { getLanguage } = useLanguage();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino?product=${casino?.product}&category=${casino?.category}`);
  };

  return (
    <div className="row mx-0 mt-0">
      <h2 className="newheading">
        <span>{getLanguage(LanguageKey.OUR_PROVIDERS)}</span>
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
