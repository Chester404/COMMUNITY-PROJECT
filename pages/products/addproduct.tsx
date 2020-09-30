import MainLayout from "../../components/MainLayout";
//import {Product } from "../../lib/endpoints";
import { useState } from "react";
import axios from "axios";

const PRODUCT_TYPE = [
  ["product", "Product"],
  ["service", "Service"],
];

const CATEGORY = [
  ["fashion", "Fasion"],
  ["electronics", "Electronics"],
];

export default function addProduct() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [message, setMessage] = useState(null);
  const [image, setImage] = useState("");
  const [progressInfos, setProgressInfos] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [fileInfo, setFileInfos] = useState(undefined);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusColor, setStatusColor] = useState("blue");
  const [productData, setProductData] = useState<any>({});
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("Upload Image");
  const [uploadedFiles, setUploadedFiles] = useState({});

  // const [tempImage, setTempImage] = useState("");
  // const { state, dispatch } = useContext(Store);
  // const [doneUpdate, setDoneUpdate] = useState(false);
  // const fileRef = useRef<HTMLInputElement>(null);
  // const [shouldUploadImage, setShouldUpalodImage] = useState(false);
  // const [show, setShow] = useState(false);
  // import { useRouter } from "next/router";
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const submitData = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", image);

    try {
      axios
        .post("http://51.116.114.155:8080//marketplace/create_product", {
          method: "POST",
          body: formData,
        })
        .then((response) => {
          setProductData(response.data);

          const { image_1, image_2, image_3 } = response.data;
          setUploadedFiles({ image_1, image_2, image_3 });
        });
    } catch (err) {
      if (err.response.status === 400) {
        setMessage("Image format not supported");
        console.error("Image not supported!");
      } else {
        console.log("No file Uploaded");
      }
    }

    if (!productData) {
      //In case of error
      setStatusColor("red");
      setStatusMsg("Sorry!, Something went wrong");
      return;
    }
    setStatusColor("blue"); //When response is received
    setStatusMsg("Updated");

    console.log("Product Data: ", productData);
    // let discountField = document.getElementById
  };

  return (
    <MainLayout title={"Add Product/Service"}>
      <div className="container">
        <div className="col-md-12 page-tittle ">
          <div className="page-header ml-3">
            <h1 className="page-title">Add Product/Service</h1>
          </div>
          <div className="col-md-12 row">
            <form className=" col form-group md-12" onSubmit={submitData}>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "7px",
                }}
              >
                <div className="borderimage">
                  <img
                    src={
                      fileName
                        ? fileName
                        : "https://ecex.s3.eu-west-2.amazonaws.com/img.JPG"
                    }
                    alt={productData.name}
                    width={80}
                    height={100}
                    style={{ borderRadius: "4px", margin: "35px" }}
                    className="rounded mx-auto d-block"
                  />

                  <input
                    type="file"
                    value={productData.image_1}
                    id="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                  />
                  <button className="btn btn-primary savebtn mb-2 mx-auto d-block">
                    {fileName}
                  </button>
                </div>
              </div>

              <div className="row justify-content-between">
                {/*from here*/}
                <div className="col-6">
                  {/* <div className="col"> */}
                  <div className="form-group">
                    <label className="bolder">
                      Product Name <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="Enter product name"
                      value={productData.name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="bolder">
                      Type <span className="red">*</span>
                    </label>
                    <select
                      className="form-control select2 form-rounded"
                      placeholder="Enter product name"
                      onChange={(e) => setType(e.target.value)}
                      value={productData.product_type}
                      required
                    >
                      {PRODUCT_TYPE.map((t, i) => (
                        <option key={i} value={t[0]}>
                          {t[1]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="bolder">
                      Price <span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="GHS 50"
                      value={productData.price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="bolder">
                      Category <span className="red">*</span>
                    </label>
                    <select
                      className="form-control select2 form-rounded"
                      onChange={(e) => setType(e.target.value)}
                      value={productData.category}
                      required
                    >
                      {CATEGORY.map((c, i) => (
                        <option key={i} value={c[0]}>
                          {c[1]}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* </div>      */}
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label className="bolder">Discount</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="Add discount"
                      value={productData.discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="bolder">Description</label>
                    <textarea
                      style={{ height: "120px" }}
                      className="form-control form-rounded"
                      value={productData.discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>

                  <div className="col-12 form-group" style={{ paddingTop: "15px" }}>
                <button
                  type="submit"
                  className="btn btn-primary  addproduct-buttons btn-block mb-1 mt-3"
                  style={{ width: "230px", float: "left" }}
                >
                  Add
                </button>

                <button
                  type="submit"
                  className="btn btn-primary cancelproduct-buttons btn-block mb-1 mt-3"
                  style={{ width: "230px", marginLeft: "20px", float: "right" }}
                >
                  Cancel
                </button>
              </div>

                  {/* <div className="row col-md-12 justify-content-center"> */}

                  {/* </div> */}
                </div>
                {/*to here*/}

                <div
                  className="col-12"
                  style={{
                    color: statusColor,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {statusMsg}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
