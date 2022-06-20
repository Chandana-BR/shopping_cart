import TextInput from "../../components/TextInput";

export const loginInitValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export const loginFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email Address",
    className: "rounded-t-md",
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
    className: "rounded-b-md",
    component: TextInput,
    validate: (value) => {
      let error = "";
      if (!value) {
        error = "Required...";
      }
      return error;
    },
  },
];
