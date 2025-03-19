import { useEffect, useState } from "react";
import Tab from "./Tab";
import Tab2 from "./Tab2";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import { useLocation, useNavigate } from "react-router-dom";

const IntCasino = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const { data } = useMac88AllQuery();
  /* all tables key data */
  const allTables = data?.data?.allTables;
  /* tables key data */
  const tables = data?.data?.tables?.[100000];
  /* Table category */
  const tablesCategory = tables && Object.keys(tables);

  const filterSubCategory = () => {
    if (selectedCategory !== "All") {
      const tableKeyData =
        tables &&
        Object.values(tables)
          .flatMap((obj) => Object.values(obj))
          .flat();
      /* Filter the category data which in clicked on first tab */
      const subCategoryData = tableKeyData?.filter(
        (item) => item?.product === selectedCategory
      );
      /* Make unique array of category from filtered result  */
      const subCategory =
        subCategoryData &&
        Array.from(new Set(subCategoryData.map((item) => item.category)));

      return subCategory;
    } else {
      const allTablesCategory = allTables && Object.keys(allTables);
      return allTablesCategory;
    }
  };

  useEffect(() => {
    const filterData = () => {
      if (selectedCategory !== "All") {
        if (selectedSubCategory !== "All") {
          const tableKeyData =
            tables &&
            Object.values(tables)
              .flatMap((obj) => Object.values(obj))
              .flat();
          const casinoData = tableKeyData?.filter(
            (item) => item?.category === selectedSubCategory
          );
          return casinoData;
        } else {
          const tableKeyData =
            tables &&
            Object.values(tables)
              .flatMap((obj) => Object.values(obj))
              .flat();
          const casinoData = tableKeyData?.filter(
            (item) => item?.product === selectedCategory
          );

          return casinoData;
        }
      } else {
        const casinoData =
          allTables && typeof allTables === "object"
            ? selectedSubCategory === "All"
              ? Object.values(allTables).flat()
              : Object.values(allTables)
                  .flat()
                  .filter((item) => item?.category === selectedSubCategory)
            : [];

        return casinoData;
      }
    };
    setFilteredData(filterData());
  }, [selectedCategory, selectedSubCategory, allTables, tables]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);

  useEffect(() => {
    if (category) {
      if (category === "Fun Games") {
        setSelectedCategory(category);
      } else {
        setSelectedSubCategory(category);
      }
    }
  }, [category]);

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
                    categories={tablesCategory}
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
                            categories={filterSubCategory()}
                          />

                          <div className="tab-content">
                            <div
                              id="tab1"
                              role="tabpanel"
                              aria-labelledby="tab1-link"
                              className="tab-pane active"
                            >
                              <div className="row row-casino">
                                {filteredData?.map((casino) => {
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

export default IntCasino;
