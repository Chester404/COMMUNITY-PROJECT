import { useEffect, useState } from "react";
//import { Product } from "../../lib/endpoints";
//import { useRouter } from 'next/router'
import axios from "axios";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductPage({}) {
  const [product, setProduct] = useState("");
  const [description, setDesciption] = useState("");
  const [productData, setProductData] = useState([]);
  const [owner, setOwner] = useState<any>({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");

  // const name = match.params.name

  useEffect(() => {
    axios
      .get(`http://51.116.114.155:8080/marketplace/products/${owner.id}`)
      .then((response) => {
        setProductData(response.data);
      });
  }, []);

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

  // const router = useRouter()
  // let setPrice = productData.price
  // const discountedPrice = (setPrice) => {
  //   setPrice *
  // }
  const router = useRouter();

  //Unathurized access

  // if (err.response.status === 401) {
  //   setMessage("Image format not supported");
  //   console.error("Image not supported!");
  // }

  if (!productData) {
    alert("No Data found");
    router.push("/auth/login");
  } else
    return (
      <MainLayout title={productData.name}>
        <div className="page-header">
          <h1 className="page-title">My Products & Services</h1>
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
                      : "https://picsum.photos/540/380"
                  }
                >
                  <img
                    className="viewproduct-image2"
                    src={
                      productData.image_2
                        ? productData.image_2
                        : "https://picsum.photos/540/380"
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
                      : "https://picsum.photos/540/380"
                  }
                >
                  <img
                    className="viewproduct-image2"
                    src={
                      productData.image_3
                        ? productData.image_3
                        : "https://picsum.photos/540/380"
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
              as={`/products/edit/${product.owner.id}`}
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
