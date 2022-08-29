import axios from "axios";
import { BASE_API_URL, DEFAULT_ERROR_MESSAGE } from "../../../utils/constants";
import Paths from "../../../utils/paths";

export const postLogin = async (body) => {
  const response = await axios.post(
    `${BASE_API_URL}/${Paths.Auth.login}`,
    {
      firstNameDto: body.firstName,
      lastNameDto: body.lastName,
      emailDto: body.email,
      passwordDto: body.password,
    },
  );
  const { data = {}, status = 0 } = response || {};
  const user = data;
  const jwt = user?.jwtToken;
  if (jwt && user && status >= 200 && status < 300) {
    return { jwt, user };
  } else {
    const errorMessage = response?.data?.error;
    throw new Error({ message: errorMessage || DEFAULT_ERROR_MESSAGE })
  }
};

export const postRegister = async (body) => {
  const response = await axios.post(
    `${BASE_API_URL}/${Paths.Auth.register}`,
    {
      firstNameDto: body.firstName,
      lastNameDto: body.lastName,
      emailDto: body.email,
      passwordDto: body.password,
    },
  );
  const { data = {}, status = 0 } = response || {};
  const user = data;
  if (user && status >= 200 && status < 300) {
    return { user };
  } else {
    const errorMessage = response?.data?.error;
    throw new Error({ message: errorMessage || DEFAULT_ERROR_MESSAGE })
  }
};
