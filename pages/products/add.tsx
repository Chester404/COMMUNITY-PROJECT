import MainLayout from "../../components/MainLayout";
import React, { useState, useRef } from "react";
import Prompt from "../../components/Prompt";
import { useRouter } from "next/router";
import { Products } from "../../lib/endpoints";
import { Store } from "../../contextStore";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Link from "next/link";

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
  const [product_type, setProductType] = useState("PR");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("FTF");
  const [discount, setDiscount] = useState<number>(0);
  const [statusColor, setStatusColor] = useState("blue");
  const [statusMsg, setStatusMsg] = useState("");
  const [fileName, setFilename] = useState("Upload Image");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [doneUpdate, setDoneUpdate] = useState(false);
  const inputRef = useRef(null);
  const [fileArray, setFileArray] = useState([
    "https://ecex.s3.eu-west-2.amazonaws.com/img.JPG",
  ]);
  const [fileObj, setFileObj] = useState([]);

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
    var reader = new FileReader();
    e.preventDefault();

    let arr = Object.values(e.target.files);

    if (fileArray.includes("https://ecex.s3.eu-west-2.amazonaws.com/img.JPG")) {
      setFileArray(fileArray.splice(0, fileArray.length));
    }
    setFileObj([...fileObj, e.target.files[0]]);
    if (fileArray.length < 3) {
      let imgSrc = arr.map((file: any) => {
        return URL.createObjectURL(file);
      });
      setFileArray([...fileArray, ...imgSrc]);
    } else {
      setFileArray([...fileArray]);
      callPrompt(
        "Can't upload more than 3 images",
        "",
        "",
        "Can't upload more than 3 images"
      );
      setTimeout(() => setShow(false), 3000);
    }
  };

  const handleDelete = (i) => {
    // fileArray.forEach((i) => {
      
      let _splice = fileArray.splice(i, 1)
      fileArray.splice(0, fileArray.length)
      setFileArray([...fileArray, ..._splice])
    // });
    console.log(fileArray)
  };

  const submitData = async (e) => {
    e.preventDefault();

    // console.log(fileObj[0]);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price.toString());
    formdata.append("discount", discount.toString());
    formdata.append("category", category);
    formdata.append("description", description);
    fileObj.map((f: any, index: number) => {
      formdata.append("image_" + (index + 1), f, f.name);
    });

    const rs: any = await new Products().createProduct(formdata);
    console.log("Response", rs);
    if (rs.status == 401) {
      callPrompt(
        "Add Product",
        "",
        "Close",
        "You're not authorized to add product, Please login with organizational account"
      ),
        console.log("Not authorized to add product: ", rs);
      router.push("/auth/login/");
    } else if (rs.status == 400) {
      callPrompt("Add Product", "", "Close", "Sorry, An error occurred");
    } else if(rs.status == 200) {
      callPrompt("Add Product", "", "Close", "Product Added Successfully");
      router.push("/market/");
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
                <div style={{ border: "6px dashed #818aa9" }}>
                  <div
                    className="row"
                    style={{ marginLeft: 340, marginRight: 340 }}
                  >
                    {fileArray.map((image, i) => (
                      <div key={i} id="img-gallery" className="col">
                        <img
                          key={fileArray.indexOf(fileArray[image])}
                          src={image}
                          width={80}
                          height={100}
                          style={{ borderRadius: "4px", margin: "35px" }}
                          className="rounded mx-auto d-block"
                          onClick={handleDelete}
                        />
                      </div>
                    ))}
                  </div>

                  <input
                    type="file"
                    ref={inputRef}
                    //value={image_1}
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                    name={fileName}
                    multiple
                  />
                  <button
                    className="btn btn-primary savebtn mb-2 mx-auto d-block"
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
                <div className="col-md-6">
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
                      value={product_type}
                      onChange={(e) => setProductType(e.target.value)}
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

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="quantity" className="bolder">
                      Discount
                    </label>
                    <input
                      type="number"
                      className="form-control form-rounded"
                      placeholder="Add discount"
                      value={discount}
                      onChange={(e: any) => setDiscount(e.target.value)}
                      onBlur={(e: any) => {
                        e.preventDefault();
                        setPrice(price - (e.target.value / 100) * price);
                      }}
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
                    className="row form-group justify-content-between d-flex"
                    style={{ paddingTop: "15px" }}
                  >
                    <button
                      type="submit"
                      className="btn btn-primary  addproduct-buttons btn-block ml-2 mt-3 col-md-5"
                    // style={{ width: "50px"}}
                    >
                      Add
                    </button>

                    <Link href="/market">
                      <button
                        type="submit"
                        className="btn btn-primary cancelproduct-buttons btn-block mt-3 mr-1 col-md-5"
                        //  style={{
                        //   width: "50px",
                        // //   marginLeft: "20px",
                        // //   float: "right",
                        //  }}
                      >
                        Cancel
                      </button>
                    </Link>
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
