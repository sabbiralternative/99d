import { useEffect, useState } from "react";
import Tab from "./Tab";
import Tab2 from "./Tab2";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import { useNavigate } from "react-router-dom";

const Casino = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("MAC88");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const { data } = useMac88AllQuery();

  /* tables key data */
  const tables = data?.data?.tables?.[100000];

  useEffect(() => {
    const getCategory = () => {
      if (tables) {
        /* Get only four key */
        const {
          MAC88,
          ["Mac88 Virtuals"]: mac88Virtuals,
          ["Color Prediction"]: colorPrediction,
          ["Fun Games"]: funGames,
        } = tables;
        /* Make a object of four key */
        const filteredData = {
          MAC88,
          mac88Virtuals,
          colorPrediction,
          funGames,
        };
        /* Get data in a single array from four object */
        const tableKeyData =
          filteredData &&
          Object.values(filteredData)
            .flatMap((obj) => Object.values(obj))
            .flat();

        /*get category for first tab */
        const categories = Array.from(
          new Set(tableKeyData.map((item) => item.product))
        );
        setCategories(categories);
        /* get category for first tab */

        /* get sub category for first tabt */
        const filterCasinoByProduct = tableKeyData?.filter(
          (item) => item?.product === selectedCategory
        );
        const subCategory = Array.from(
          new Set(filterCasinoByProduct.map((item) => item.category))
        );

        setSubCategories(subCategory);
        /*get sub category for first tab*/

        /* Get actual data by  category */
        if (selectedSubCategory !== "All") {
          const filterCasinoByCategory = filterCasinoByProduct?.filter(
            (item) => item?.category === selectedSubCategory
          );
          setFilterCategoryData(filterCasinoByCategory);
        } else {
          setFilterCategoryData(filterCasinoByProduct);
        }
      }
    };
    getCategory();
  }, [tables, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);

  const handleNavigateToIFrame = (casino) => {
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };

  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div className="home-products-container mt-1">
            <div className="row row5">
              <div className="col-md-12">
                <div className="casino_tabs_ul tab-container">
                  <Tab
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane active"
                    >
                      <div className="icasino_ul_tabs">
                        <div className="tab-container">
                          <Tab2
                            setSelectedSubCategory={setSelectedSubCategory}
                            selectedSubCategory={selectedSubCategory}
                            categories={subCategories}
                          />

                          <div className="tab-content">
                            <div
                              id="tab1"
                              role="tabpanel"
                              aria-labelledby="tab1-link"
                              className="tab-pane active"
                            >
                              <div className="row row-casino">
                                {filterCategoryData?.map((casino) => {
                                  return (
                                    <div
                                      onClick={() =>
                                        handleNavigateToIFrame(casino)
                                      }
                                      key={casino?.id}
                                      className="col-md-2 col-3"
                                    >
                                      <div className="d-inline-block casinoicons">
                                        <img
                                          className="img-fluid"
                                          src={casino?.url_thumb}
                                        />
                                        <div className="casino-name">
                                          {casino?.name}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
