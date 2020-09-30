import ufetch from "../ufetch";
import axios from "axios";

export class Auth {
  async signup(params: any) {
    const query_params = new URLSearchParams(params as any).toString();
    return await ufetch("/register", {
      method: "POST",
      body: query_params,
    });
  }

  async confirmaccount(integer_key: number) {
    try {
      const rs = await axios.post(process.env.URL + "/auth/keyinput/", {
        integer_key,
      });

      return rs;
    } catch (e) {
      console.log("error,", e);
    }
  }

  async login(authentication_property: string, password: string) {
    //authentication_property: email or phone number for login
    // const rs = await axios.post("http://51.116.114.155:8080/auth/token/", {
    //   authentication_property: authentication_property,
    //   password: password,
    // });
    // console.log("Login", rs);

    // return rs;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("authentication_property", authentication_property);
    urlencoded.append("password", password);

    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const rs = await fetch(
      "http://b0dfd5db797e.ngrok.io/auth/token/",
      requestOptions
    );
    return await rs.json();
  }

  async forgotpassword(authentication_property: string) {
    const data = new URLSearchParams(authentication_property).toString();
    return await ufetch("/auth/password-forgotten", {
      method: "POST",
      body: data,
    });
  }

  async updateUserProfile(userData: any) {
    const data = new URLSearchParams(userData).toString();
    return await ufetch("accounts/update", {
      method: "PUT",
      body: data,
    });
  }

  protected async generic_query(ctx: any) {
    return await ufetch(`/${ctx.endpoint}/${ctx.query_params}`, {
      method: ctx.method,
      ...ctx.options,
    });
  }
}
