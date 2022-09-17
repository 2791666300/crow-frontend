import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
   }, [dispatch])

  return (
    <Routes> {/* Routes 相当于  http://localhost:3000/shop/ }
      {/* index 代表 在 http://localhost:3000/shop/ 路径后面没有字段的情况下默认渲染的组件*/}
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />}/>
    </Routes>
  );
};

export default Shop;
