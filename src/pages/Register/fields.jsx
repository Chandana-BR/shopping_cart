/* eslint-disable no-undef */
import TextInput from "../../components/TextInput";

export const registerInitValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const registerFields = [
  {
    id: "name",
    name: "name",
    autoComplete: "name",
    placeholder: "Name",
    className: "rounded-t-md",
    component: TextInput,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Required...";
      }
      return error;
    },
  },
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email Address",
    component: TextInput,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Required...";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
      }
      return error;
    },
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    placeholder: "Password",
    component: TextInput,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Required...";
      }
      return error;
    },
  },
  {
    id: "confirm-password",
    name: "confirmPassword",
    type: "password",
    autoComplete: "new-password",
    placeholder: "Confirm Password",
    className: "rounded-b-md",
    component: TextInput,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Required...";
      } else if (value !== password.value) {
        error = "password and confirm password should be same";
      }
      return error;
    },
  },
];

// export const validateRegister = (values) => {
//   const errors = {};
//   if (values.password !== values.confirmPassword) {
//     errors.confirmPassword = "password and confirm password should be same";
//   }
//   return errors;
// };
