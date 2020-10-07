import ufetch from "../ufetch";

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
  async createProduct(formData: any) {
    return await ufetch("/marketplace/create_product/", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  async getProducts() {
    return await ufetch("/marketplace/products/", {
      method: "GET",
    });
  }

  async getFilteredProducts(filters = {
    owner__city: "", 
    name:"",
    category:"",
    product_type:"",
    min_price:0,
    max_price:1000000,
    search:""}
    ) {
    return await ufetch(
      `/marketplace/products?owner__city=${filters.owner__city}&name=${filters.name}&product_type=${filters.product_type}&category=${filters.category}&min_price=${filters.min_price}&max_price=${filters.max_price}&search=${filters.search}`,
     {
        method: "GET",
    });
  }

  async updateUserProduct(owner: number, formData: any) {
    return await ufetch(`/marketplace/update_product/${owner}`, {
      method: "PUT",
      body: formData,
    });
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
