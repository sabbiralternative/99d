import { useNavigate } from "react-router-dom";
import { useMac88Query } from "../../../redux/features/events/events";

const HomeThumbnails = () => {
  const navigate = useNavigate();
  const { data } = useMac88Query();

  const handleNavigateToIFrame = (casino) => {
    navigate(
      `/casino/${casino?.game_name?.replace(/ /g, "")}/${casino?.game_id}`
    );
  };

  return (
    <>
      <div className="home-products-container">
        <div className="row row5">
          {data?.data?.map((casino) => {
            return (
              <div
                onClick={() => handleNavigateToIFrame(casino)}
                key={casino?.game_id}
                className="col-casino"
                tabIndex={0}
              >
                <div className="casinoicons">
                  <img
                    className="img-fluid"
                    style={{ height: "110px" }}
                    src={casino?.img}
                  />
                  <div className="casino-name"> {casino?.game_name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeThumbnails;
