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
        console.log(response)
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
      <div className="page-header">
      <h1 className="page-title">My Products & Services</h1>
      </div>     
      <div className="row mb-6">
        <div className="col mt-2 full-image ">
          <img
          className="viewproduct-image1"
            src={
              productData.image_1
                ? productData.image_1
                : "https://picsum.photos/540/380"
            }
            alt={productData.name}
            
          />
          <div className="row sub-image">
            <div className="col mt-2 sub-image">
              <img
              className="viewproduct-image2"
                src={
                  productData.image_2
                    ? productData.image_2
                    : "https://picsum.photos/540/380"
                }
                alt={productData.name}
              />
            </div>
            <div className="col mt-2 sub-image">
              <img
              className="viewproduct-image2"
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
            {/* <h2> */}
              
            {/* </h2> */}
            <h1 className="product_name"><b>{productData.name} </b></h1>
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
