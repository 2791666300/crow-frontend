import { createContext, useState, useEffect } from "react";

import { getAllShopDatas } from "../utils/getAllShopDatas";

// import PRODUCTS from "../shop-data.json";
// import SHOP_DATA from "../shop-data";
// import { importDatas } from "../utils/import-data";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  // eslint-disable-next-line
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    (async () => {
      const categoryMap = await getAllShopDatas();

      setCategoriesMap(categoryMap);
    })();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
