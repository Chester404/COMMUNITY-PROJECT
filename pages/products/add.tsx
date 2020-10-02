import MainLayout from "../../components/MainLayout";
//import {Product } from "../../lib/endpoints";
import { useState, useRef } from "react";
import Prompt from "../../components/Prompt";
import { useRouter } from "next/router";
import { Products } from "../../lib/endpoints";

const PRODUCT_TYPE = [
  ["PR", "product"],
  ["SE", "services"],
];

const CATEGORY = [
  ["FTF", "Fashion, Textiles and Fabrics"],
  ["JGP", "Jewellery, Gifts and Parcels"],
  ["SSF", "Shoes, Sandals and Footwears"],
  ["AT", "Automobile and Transport"],
  ["SP", "Sports"],
  ["BOS", "Books and Office Supplies"],
  ["LFD", "Lights, Furniture and Decor"],
  ["BeL", "Beauty and Lifestyle"],
  ["BaL", "Bags and Luggage"],
  ["EGG", "Electronics, Gadgets and Garden Equipment"],
  ["TBP", "Toiletries / Baby Products"],
  ["PTC", "Phones, Tablets and Computers"],
  ["GrP", "Groceries and Provisions"],
  ["SE", "services"],
  ["ITM", "Industrial Tools and Machinery"],
  ["REP", "Real Estates and Properties"],
  ["HeP", "Health and Pharmaceuticals"],
  ["PlP", "Plastics and Rubbers"],
];

export default function addProduct() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState<number>(0);
  const [message, setMessage] = useState(null);
  const [image_1, setImage1] = useState("");
  const [image_2, setImage2] = useState("");
  const [image_3, setImage3] = useState("");

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [fileInfo, setFileInfos] = useState(undefined);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusColor, setStatusColor] = useState("blue");
  const [productData, setProductData] = useState<any>({});
  const [file, setFile] = useState([]);
  const [fileName, setFilename] = useState("Upload Image");
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [doneUpdate, setDoneUpdate] = useState(false);
  const inputRef = useRef(null);

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

  const router = useRouter();

  const handleClose = () => {
    if (doneUpdate) {
      router.push("/products/");
    }
    setShow(false);
  };

  const onChange = (e) => {
    for (var i = 0; i < e.target.files.length; i++) {
      //3 images for file upload
      setFile([...file, e.target.files[i]]);
      // setFilename(e.target.files[i].name);
      console.log(e.target.files[i]);
    }
  };

  const submitData = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("file", file);

    const rs = await new Products().createProduct({
      name: name,
      type: type,
      price: price,
      discount: discount,
      category: category,
      description: description,
      // image_1: image_1,
      // image_2: image_1,
      // image_3: image_3,
    });
    console.log("The is the create product response", rs);
    if (rs.status === 401) {
      callPrompt(
        "Add Product",
        "",
        "Close",
        "You're not authorized to add product, Please login with organizational account"
      );
      console.log("Not authorized to add product: ", rs);
      router.push("/detailproduct");
    } else if (rs.status === 400) {
      callPrompt("Add Product", "", "Close", "Sorry, An error occurred");
    } else {
      callPrompt("Add Product", "", "Close", "Product Added Successfully");
      router.push("/products/");
      console.log(rs);
    }

    return;
  };

  return (
    <MainLayout title={"Add Product/Service"}>
      <Prompt
        title={prompt_title}
        linkTo={link_to}
        linkText={link_text}
        show={show}
        success={link_to.length > 0 ? true : false}
        handleClose={handleClose}
      >
        <p>{prompt_body}</p>
      </Prompt>
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
                <div style={{ border: "5px dashed #818aa9" }}>
                  {/* div.borderimage:before {
                content: "";
                position: absolute;
                border: 10.7px dashed #818aa9;
                top: -7px;
                bottom: -7px;
                left: -7px;
                right: -7px;
              }
              div.borderimage {
                overflow: hidden;
                position: relative;
                text-align: center;
                padding: 15px;
                margin: 7px;
              } */}
                  <img
                    src={
                      fileName
                        ? fileName
                        : "https://ecex.s3.eu-west-2.amazonaws.com/img.JPG"
                    }
                    alt={name}
                    width={80}
                    height={100}
                    style={{ borderRadius: "4px", margin: "35px" }}
                    className="rounded mx-auto d-block"
                  />

                  <input
                    type="file"
                    ref={inputRef}
                    value={image_1}
                    id="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                    name={fileName}
                    // ref={fileInput => this.fileInput = fileInput}
                    multiple
                  />
                  <button
                    className="btn btn-primary savebtn mb-2 mx-auto d-block"
                    style={{ zIndex: 9999 }}
                    onClick={() => {
                      inputRef.current.click();
                    }}
                  >
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
                      value={name}
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
                      value={type}
                      onChange={(e) => setType(e.target.value)}
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
                      value={price}
                      onChange={(e: any) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="bolder">
                      Category <span className="red">*</span>
                    </label>
                    <select
                      className="form-control select2 form-rounded"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
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
                    <label htmlFor="quantity" className="bolder">
                      Discount
                    </label>
                    <input
                      type="number"
                      className="form-control form-rounded"
                      placeholder="Add discount"
                      value={discount}
                      // min="0"
                      // max="100"
                      onChange={(e: any) => setDiscount(e.target.value)}
                      onBlur={(e: any) => {
                        e.preventDefault();
                        setPrice(price - (e.target.value / 100) * price);
                      }}
                      // required pattern="[0-100]+%"
                    />
                  </div>

                  <div className="form-group">
                    <label className="bolder">Description</label>
                    <textarea
                      style={{ height: "120px" }}
                      className="form-control form-rounded"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div
                    className="col-12 form-group"
                    style={{ paddingTop: "15px" }}
                  >
                    <button
                      type="submit"
                      className="btn btn-primary  addproduct-buttons btn-block mb-1 mt-3"
                      style={{ width: "253px", float: "left" }}
                    >
                      Add
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary cancelproduct-buttons btn-block mb-1 mt-3"
                      style={{
                        width: "253px",
                        marginLeft: "20px",
                        float: "right",
                      }}
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
