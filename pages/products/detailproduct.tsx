import { useEffect, useState } from "react";
//import { Product } from "../../lib/endpoints";
//import { useRouter } from 'next/router'
import Axios from "axios";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";

export default function DetailProduct({}) {
  const [product, setProduct] = useState("");
  const [description, setDesciption] = useState("");
  const [productData, setProductData] = useState([]);
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // const name = match.params.name

  useEffect(() => {
    Axios.get(`http://51.116.114.155:8080/marketplace/products/${name}`).then(
      (response) => {
        setProductData(response.data[0]);
      }
    );
  }, []);

  // const router = useRouter()
  // let setPrice = productData.price
  // const discountedPrice = (setPrice) => {
  //   setPrice *
  // }

  return (
    <MainLayout title={productData.name}>
      <h1 style={{ marginTop: "20px" }}>My Product & Services</h1>
      <div className="row">
        <div className="col mt-2 full-image">
          <img
            src={
              productData.image_1
                ? productData.image_1
                : "https://picsum.photos/540/380"
            }
            alt={productData.name}
            width={600}
            height={400}
            style={{ paddingBottom: "10px" }}
          />
          <div className="row">
            <div className="col mt-2 sub-image" style={{ float: "inline-end" }}>
              <img
                src={
                  productData.image_2
                    ? productData.image_2
                    : "https://picsum.photos/540/380"
                }
                alt={productData.name}
              />
            </div>
            <div className="col mt-2 sub-image" style={{ float: "inline-end" }}>
              <img
                src={
                  productData.image_3
                    ? productData.image_3
                    : "https://picsum.photos/540/380"
                }
                alt={productData.name}
              />
            </div>
          </div>
        </div>

        <div className="col mt-2">
          <Link href="/products/addproduct">
            <button
              className="btn btn-primary btn-lg"
              style={{ float: "right", width: "200px" }}
            >
              Edit
            </button>
          </Link>

          <div style={{ marginTop: "70px" }}>
            <h2>
              <b>
                <span>{productData.name} </span>
              </b>
            </h2>
            <h4>
              <b>{productData.price}</b>
              <b
                className="disabled"
                style={{ textDecoration: "line-through", marginLeft: "10px" }}
              >
                {productData.price}
              </b>
              <button
                className="btn btn-primary btn-sm"
                style={{ marginLeft: "10px" }}
              >
                {productData.discount}% off
              </button>
            </h4>
            <p>{productData.description}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
