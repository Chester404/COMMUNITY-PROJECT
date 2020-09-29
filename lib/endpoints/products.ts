import ufetch from "../ufetch";
import axios from "axios";
import { profile } from "console";

export class Products {

  async getProducts() {
    return await ufetch("/marketplace/products/");
  }

  protected async generic_query(ctx: any) {
    return await ufetch(`/${ctx.endpoint}/${ctx.query_params}`, {
      method: ctx.method,
      ...ctx.options,
    });
  }
}
