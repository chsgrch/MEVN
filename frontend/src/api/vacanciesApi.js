import { request } from "../utils/request";

export function addVacancyApi(vacancy) {
  return request({
    url: "/api/jobs",
    method: "POST",
    data: vacancy
  });
}

export function deleteVacancyApi(idVacancy) {
  return request({
    url: `/api/jobs/job_id:${idVacancy}`,
    method: "DELETE"
  });
}

export function getVacancyApi() {
  return request({
    url: "/api/jobs",
    method: "GET"
  });
}
