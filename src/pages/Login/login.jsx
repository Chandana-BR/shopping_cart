/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import { Field } from "formik";
import CustomForm from "../../components/CustomForm";
import LinkUI from "../../components/LinkUI";
import { loginFields, loginInitValues } from "./fields";
import Checkbox from "../../components/Checkbox";
import { AuthContext } from "../../context/authContext";

function Login() {
  return (
    <AuthContext.Consumer>
      {({ onLogin }) => (
        <CustomForm
          initialValues={loginInitValues}
          onSubmit={onLogin}
          fields={loginFields}
          btnText="Sign in"
        >
          <div className="flex items-center justify-between">
            <Field
              id="rememberMe"
              name="rememberMe"
              label="Remember me"
              component={Checkbox}
            />
            <div className="text-sm">
              <LinkUI href="#">Forgot your password?</LinkUI>
            </div>
          </div>
        </CustomForm>
      )}
    </AuthContext.Consumer>
  );
}

export default memo(Login);
