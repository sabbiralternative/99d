import Actions from "../../components/modules/Home/Actions";
import Events from "../../components/modules/Home/Events";
import HighLightThumbnails from "../../components/modules/Home/HighLightThumbnails";
import HomeThumbnails from "../../components/modules/Home/HomeThumbnails";
import LatestEvent from "../../components/modules/Home/LatestEvent";
import Tab from "../../components/modules/Home/Tab";

const Home = () => {
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
            <HighLightThumbnails />
            <HomeThumbnails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
