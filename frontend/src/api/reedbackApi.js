import { request } from "../utils/request";

export function getFeedbackAllUserApi() {
  return request({
    url: "/api/contacts",
    method: "GET"
  });
}
