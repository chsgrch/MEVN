import Cookies from "js-cookie";
import JwtDecode from "jwt-decode";
import Vue from "vue";

const TOKEN_KEY = "AUTH-TOKEN";

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

export function deleteToken() {
  Cookies.remove(TOKEN_KEY);
}

export function decodeToken(token) {
  if (token) {
    return JwtDecode(token);
  }
}

export const bus = new Vue();
