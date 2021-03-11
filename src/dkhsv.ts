import { ILogin, IAuthResponsive } from "./interfaces";
import fetch from "node-fetch";
import agent, { setAuth } from "./agent";

export default class DKHSV {
  constructor() {}
  async auth(infoAuth: ILogin): Promise<IAuthResponsive> {
    const result: IAuthResponsive = await fetch(
      "http://dkhsv.tlu.edu.vn:8099/education/oauth/token",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
        },
        referrer: "http://dkhsv.tlu.edu.vn/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: `client_id=education_client&grant_type=password&username=${infoAuth.username}&password=${infoAuth.password}&client_secret=password`,
        method: "POST",
        mode: "cors",
      }
    ).then((res) => res.json());
    if (result.access_token) setAuth(result.access_token);
    return result;
  }

  async getCurrentUser(): Promise<any> {
    return agent.get("/users/getCurrentUser").then((res) => res.data);
  }
  async getSemesterInfo(): Promise<any> {
    return agent.get("/semester/semester_info").then((res) => res.data);
  }
  async getStudentCourseSubject(semesterId: number): Promise<any> {
    return agent
      .get("/StudentCourseSubject/studentLoginUser/" + semesterId)
      .then((res) => res.data);
  }
  async getStudentmMark(): Promise<any> {
    return agent
      .get("/studentsubjectmark/getListMarkDetailStudent")
      .then((res) => res.data);
  }
}

