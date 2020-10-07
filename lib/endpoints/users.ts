import ufetch from "../ufetch";
import axios from "axios";

export class Users {
  async signup(params: any) {
    const query_params = new URLSearchParams(params as any).toString();
    return await ufetch("/register", {
      method: "POST",
      body: query_params,
    });
  }

  async changeEmail(userData: any) {
    //authentication_property: email or phone number for login
    return await ufetch("/auth/change-profile/", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  async confirmaccount(integer_key: number) {
    const rs = await axios.post(process.env.URL + "/auth/keyinput/", {
      integer_key,
    });

    return rs;
  }

  async getUserProfile() {
    //accounts/signed_in_user
    return ufetch("/accounts/signed_in_user/", {
      method: "GET",
    });
  }
  async getAdminProfile() {
    return ufetch("/accounts/signed_in_user/", {
      method: "GET",
    });
  }

  async getBusinessProfile() {
    return ufetch("/accounts/self_bus_details/", {
      method: "GET",
    });
  }

  async getProfiles() {
    //accounts/signed_in_user
    return ufetch("/accounts/", {
      method: "GET",
    });
  }

  async getUnregisteredUsersProfile() {
    //accounts/signed_in_user
    return ufetch("/accounts/list-of-unregisterd-users/", {
      method: "GET",
    });
  }

  async getProfilesForAdmin() {
    //accounts/signed_in_user
    return ufetch("/accounts/profile-list", {
      method: "GET",
    });
  }

  async getIndividualProfilesForAdmin() {
    //accounts/signed_in_user
    return ufetch("/accounts/profile-list", {
      method: "GET",
    });
  }

  async getOrganizationProfilesForAdmin() {
    //accounts/signed_in_user
    return ufetch("/accounts/general_bus_list/", {
      method: "GET",
    });
  }

  async forgotpassword(authentication_property: string) {
    const data = new URLSearchParams(authentication_property).toString();
    return await ufetch("/auth/password-forgotten", {
      method: "POST",
      body: data,
    });
  }

  // 0721573809

  async getUserAccountDetails(id: number) {
    return ufetch(`/accounts/general_bus_detail/${id}`, {
      method: "GET",
    });
  }
  async updateUserProfile(userData: any) {
    return await ufetch("/accounts/update/", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  async uplaodImage(formData: any) {
    return await ufetch("/accounts/image_upload/", {
      method: "PUT",
      body: formData,
      redirect: "follow",
    });
  }

  async resendToken(authentication_property: string) {
    return await ufetch("/auth/create-key/", {
      method: "POST",
      body: JSON.stringify({ authentication_property, access_type: "a" }),
    });
  }

  protected async generic_query(ctx: any) {
    return await ufetch(`/${ctx.endpoint}/${ctx.query_params}`, {
      method: ctx.method,
      ...ctx.options,
    });
  }

  async updateBusinessProfile(userData: any) {
    console.log("inside update business profile");
    return await ufetch("/accounts/self_bus_update/ ", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  async activateDeactivate(body: any) {
    console.log("activate body:", body);
    return await ufetch(`/auth/activate_deactivate/${body.pk}/`, {
      method: "PUT",
      // body: JSON.stringify(body.is_active),
      // body.active
      body: JSON.stringify({ is_active: body.active }),
    });
  }
}
