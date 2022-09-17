import { useState } from "react";
import { Link} from "react-router-dom";
import {useDispatch } from 'react-redux'

// import { login } from "../../utils/login";
import FormInput from "../../components/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button-component";
import { emailSignInStart } from "../../store/user/user.action";

import "./sign-in-styles.scss";

// 作为表单的默认字段 作为状态的初始值
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const { name, value } = event.target;

    // 更新formFields 对象里字段 name 为 vaule name加[]是因为它不是一个key
    setFormFields({ ...formFields, [name]: value });
  };

  // 提交
  const handleSubmit = async (event) => {
    event.preventDefault();

    // await login(email, password);
    dispatch(emailSignInStart(email, password))
    setFormFields(defaultFormFields);
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary">登录到您的帐户</h2>

        <form action="" className="form form--login" onSubmit={handleSubmit}>
          <FormInput
            label="邮件"
            type="email"
            id="email"
            className="form__input"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            label="密码"
            type="password"
            id="password"
            className="form__input"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" id="button-signin">
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            id="button-google"
          >
            <Link className="nav-link" to="/sign-up">
              SIGN UP
            </Link>
          </Button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
