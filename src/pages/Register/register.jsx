import React, { memo } from "react";
import CustomForm from "../../components/CustomForm";
import { registerInitValues, registerFields } from "./fields";
import { AuthContext } from "../../context/authContext";

function Register() {
  return (
    <AuthContext.Consumer>
      {({ onRegister }) => (
        <CustomForm
          initialValues={registerInitValues}
          onSubmit={onRegister}
          fields={registerFields}
          btnText="Sign up"
        />
      )}
    </AuthContext.Consumer>
  );
}

export default memo(Register);
