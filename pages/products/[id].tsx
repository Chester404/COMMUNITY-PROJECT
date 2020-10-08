import { useEffect, useState } from "react";
//import { Product } from "../../lib/endpoints";
//import { useRouter } from 'next/router'
import axios from "axios";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import getConfig from 'next/config';

export default function ProductPage({productData}) {
  console.log("productData data", productData)
  const router = useRouter()

  const [product, setProduct] = useState([]);
  const [description, setDesciption] = useState("");
  // const [productData, setProductData] = useState([]);
  const [owner, setOwner] = useState<any>({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [show, setShow] = useState(false);

  const callPrompt = (
    title: string,
    link: string,
    link_text: string,
    message: string
  ) => {
    setShow(true);
    setPromptTitle(title);
    setLinkText(link_text);
    setLinkTo(link);
    setPromptBody(message);
  };

  
  // let setPrice = productData.price
  // const discountedPrice = (setPrice) => {
  //   setPrice *
  // }
  // const router = useRouter();

  //Unathurized access

  // if (err.response.status === 401) {
  //   setMessage("Image format not supported");
  //   console.error("Image not supported!");
  // }

  // {product.map(p => (
  //   for(let i=0, i<p.length, i++){
  //   <Link href="/products/[id]" as={`/products/${p.[i]}`}>
  //   {product.name}
  //   </Link>}

  // ))}

  // if (!productData) {
  //   alert("No Data found");
  //   router.push("/auth/login");
  // } else
    return (
      <MainLayout title={productData.name}>
        <div className="page-header">
          <h1 className="page-title">My Products & Services1</h1>
        </div>
        <div className="row mb-6">
          <div className="col mt-2 full-image ">
            <a
              href={
                productData.image_1
                  ? productData.image_1
                  : "https://picsum.photos/540/380"
              }
            >
              <img
                className="viewproduct-image1"
                src={
                  productData.image_1
                    ? productData.image_1
                    : "https://picsum.photos/540/380"
                }
                alt={productData.name}
              />
            </a>

            <div className="row sub-image">
              <div className="col mt-2 sub-image">
                <a
                  href={
                    productData.image_2
                      ? productData.image_2
                      : null
                  }
                >
                  <img
                    className="viewproduct-image2"
                    src={
                      productData.image_2
                        ? productData.image_2
                        : null
                    }
                    alt={productData.name}
                  />
                </a>
              </div>

              <div className="col mt-2 sub-image">
                <a
                  href={
                    productData.image_3
                      ? productData.image_3
                      : null
                  }
                >
                  <img
                    className="viewproduct-image2"
                    src={
                      productData.image_3
                        ? productData.image_3
                        : null
                    }
                    alt={productData.name}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col mt-2">
            <Link
              href="/products/edit/[id]"
              as={`/products/edit/${productData.id}`}
            >
              <button
                className="btn btn-primary btn-lg"
                style={{ float: "right", width: "200px" }}
              >
                Edit
              </button>
            </Link>

            <div style={{ marginTop: "70px" }}>
              {/* <h2> */}

              {/* </h2> */}
              <h1 className="product_name">
                <b>{productData.name} </b>
              </h1>
              <span className="add_product_details">
                <h5 className="product_details">GHS {productData.price}</h5>
                <h5 className="disabled">{productData.price}</h5>
                <button
                  className="btn btn-primary btn-sm"
                  style={{ marginLeft: "10px" }}
                >
                  {productData.discount}% off
                </button>
              </span>
              <p>{productData.description}</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
}

// ProductPage.getInitialProps = async(ctx) => {
//   const { query } = ctx
//   const response = await fetch(`http://51.116.114.155:8080/marketplace/products/${query.id}`)
//   const data = await response.json();
//   return {productsData: data}
// }

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
  const { id } = context.query
  const API_URL = process.env.URL;
  // const res = await fetch(`${publicRuntimeConfig.API_URL}/marketplace/products/${id}`)
  const res = await fetch(`http://51.116.114.155:8080/marketplace/products/${id}/`)
  const data = await res.json()
  console.log(id)
  return {
    props: {
      productData: data
    }
  }
  
}
