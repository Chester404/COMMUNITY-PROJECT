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
