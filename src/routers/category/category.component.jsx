import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectorCategoriseMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import { CategoryTitle, CateGoryContainer } from "./category.styles";

const Category = () => {
  /* useParams可以获取本路径里面的参数 也就是 /shop/arg    arg就是参数 */
  const { category } = useParams();
  const categoriesMap = useSelector(selectorCategoriseMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CateGoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CateGoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
