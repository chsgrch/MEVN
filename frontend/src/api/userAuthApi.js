import {
  requestAuth,
  requestRegisterUser,
  requestLogOut
} from "../utils/request";

export function loginApi(user) {
  return requestAuth({
    url: "/api/auth",
    method: "POST",
    data: user
  });
}

export function registerApi(user) {
  return requestRegisterUser({
    url: "/api/register",
    method: "POST",
    data: user
  });
}

export function logOutApi(user) {
  return requestLogOut();
}
