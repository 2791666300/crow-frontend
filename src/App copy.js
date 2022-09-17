import { Routes, Route } from 'react-router-dom'

import Home from "./routers/home/home.component";
import Navigation from './routers/navigation/navigation.component';
import SignIn from './routers/sign-in/sign-in.component';
import Shop from './routers/shop/shop-component';
import SignUpForm from './routers/sign-up-form/sign-up-form.component';
import CheckOut from './routers/checkout/checkout-component';

const App = () => {
  return (
    <Routes>  {/* 相当于 http://localhost:3000/ */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} /> {/* index 默认和父级一起渲染的组件 */}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path="shop/*" element={<Shop />}>
          {/*   *代表匹配shop/ 后面任意字段 默认渲染的组件还是会渲染  
          还有 /shop路径会被带入Shop组件里面，意味着Shop组件的所有子组件都在shop/路径之下  */}

        </Route>

      </Route>

    </Routes>
  )
};

export default App;
