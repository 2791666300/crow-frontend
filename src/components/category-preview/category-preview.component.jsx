import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewItem,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  // 页面跳转
  const navigate = useNavigate();
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle
          onClick={() => {
            navigate(`/shop/${title}`);
          }}
        >
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewItem>
        {products
          .filter((_, idx) => idx < 4) // 返回数组中的前四组数据
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewItem>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
