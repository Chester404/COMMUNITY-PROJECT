import ufetch from "../ufetch";
import axios from "axios";
import { profile } from "console";

export class Products {

  async getProducts() {
    // const products = await axios.get("https://fakestoreapi.com/products");
    // return products.data;
    // const ls = JSON.parse(window.localStorage.getItem('cp-a'))
    // return await fetch("/marketplace/products", {
    //   headers: {
    //     "Authorization": "Bearer "+ls.access,
    //   }
    // });

    return await ufetch("/marketplace/products/");
  }
  // http://51.116.114.155:8080

  protected async generic_query(ctx: any) {
    return await ufetch(`/${ctx.endpoint}/${ctx.query_params}`, {
      method: ctx.method,
      ...ctx.options,
    });
  }
}

