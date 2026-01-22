import "../../assets/css/thumbnail.css";
import Actions from "../../components/modules/Home/Actions";
import Events from "../../components/modules/Home/Events";
import HighLightThumbnails from "../../components/modules/Home/HighLightThumbnails";
import LatestEvent from "../../components/modules/Home/LatestEvent";
import NewLaunch from "../../components/modules/Home/NewLaunch";
import Tab from "../../components/modules/Home/Tab";
import { useGetIndex } from "../../hooks";
import OurProviders from "../../components/modules/Home/OurProviders";

const Home = () => {
  const { data } = useGetIndex({
    type: "99_casino_dashboard",
  });

  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div>
            <LatestEvent />
            <div className="pb-4">
              <div className="tab-container">
                <Tab />
                <div className="tab-content">
                  <Actions />

                  <Events />
                </div>
              </div>
            </div>
            <HighLightThumbnails highlight_casino={data?.highlight_casino} />
            <NewLaunch new_launch={data?.new_launch} />
            <OurProviders our_provider={data?.our_provider} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
