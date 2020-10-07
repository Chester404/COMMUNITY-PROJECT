import ufetch, { refreshToken } from "../ufetch";

export class Products {
  async uplaodImage(formData: any) {
    return await ufetch("/accounts/image_upload/", {
      method: "PUT",
      body: formData,
      redirect: "follow",
    });

    //const file = formData.name;
  }

  //Create Product
  async createProduct(data: any) {
    var myHeaders = new Headers();
    const ls: any = JSON.parse(window.localStorage.getItem("cp-a"));
    myHeaders.append("Authorization", "Bearer " + ls.access);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    const response = await fetch(
      process.env.URL + "/marketplace/create_product/",
      requestOptions
    );
    const rs = await response.text();
    if (rs.includes("expired")) {
      try {
        const refreshed = await refreshToken(process.env.URL, ls);
        if (refreshed.access) {
          ls.access = refreshed.access;
          window.localStorage.setItem("cp-a", JSON.stringify(ls));
          let myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + ls.access);

          let requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: data,
            redirect: "follow",
          };

          const response = await fetch(
            process.env.URL + "/marketplace/create_product/",
            requestOptions
          );
          return await response.json();
        } else {
          return { error: "Failed to refresh token" };
        }
      } catch (e) {
        return { error: "Error" };
      }
    }
    return JSON.parse(rs);
  }

  async getProducts() {
    return await ufetch("/marketplace/products/", {
      method: "GET",
    });
  }

  async getFilteredProducts(
    filters = {
      owner__city: "",
      name: "",
      category: "",
      product_type: "",
      min_price: 0,
      max_price: 1000000,
      search: "",
    }
  ) {
    return await ufetch(
      `/marketplace/products?owner__city=${filters.owner__city}&name=${filters.name}&product_type=${filters.product_type}&category=${filters.category}&min_price=${filters.min_price}&max_price=${filters.max_price}&search=${filters.search}`,
      {
        method: "GET",
      }
    );
  }

  async updateUserProduct(id: number, data: any) {
    var myHeaders = new Headers();
    const ls: any = JSON.parse(window.localStorage.getItem("cp-a"));
    myHeaders.append("Authorization", "Bearer " + ls.access);

    var requestOptions: any = {
      method: "PUT",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    let res = await fetch(
      process.env.URL + `/marketplace/update_product/${id}/`,
      requestOptions
    );
    const rs = await res.text();
    if (rs.includes("Given token not valid")) {
      console.log("Called");
      try {
        const refreshed = await refreshToken(process.env.URL, ls);
        console.log("Checking again", refreshed);
        if (refreshed.access) {
          ls.access = refreshed.access;
          window.localStorage.setItem("cp-a", JSON.stringify(ls));
          let myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + ls.access);

          let requestOptions: any = {
            method: "PUT",
            headers: myHeaders,
            body: data,
            redirect: "follow",
          };

          const res = await fetch(
            process.env.URL + `/marketplace/update_product/${id}/`,
            requestOptions
          );
          return await res.json();
        } else {
          return { error: "Failed to refresh token" };
        }
      } catch (e) {
        return { error: "Error" };
      }
    }
    return JSON.parse(rs);
  }

  async getUserProduct() {
    //products/signed_in_user
    return ufetch("/marketplace/own_products/", {
      method: "GET",
    });
  }

  protected async generic_query(ctx: any) {
    return await ufetch(`/${ctx.endpoint}/${ctx.query_params}`, {
      method: ctx.method,
      ...ctx.options,
    });
  }
}
