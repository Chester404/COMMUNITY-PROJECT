import MainLayout from "../../../components/MainLayout";
import { useState, useEffect, useRef } from "react";
import { Products } from "../../../lib/endpoints";
import Prompt from "../../../components/Prompt";
import { useRouter } from "next/router";

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

export default function Home() {
  const [owner, setOwner] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [image_1, setImage1] = useState(
    "https://ecex.s3.eu-west-2.amazonaws.com/img.JPG"
  );
  const [image_2, setImage2] = useState("");
  const [image_3, setImage3] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState(0);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [doneUpdate, setDoneUpdate] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusColor, setStatusColor] = useState("blue");
  const [file, setFile] = useState([]);
  const [fileName, setFilename] = useState("Upload Image");
  const [fileArray, setFileArray] = useState([]);
  const [fileObj, setFileObj] = useState([]);
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
      router.push("/products/detailproduct");
    }
    setShow(false);
  };

  

  //Define Product ID parameter
  //this.props.params.pid

  const onChange = (e) => {
    // e.preventDefault()
    setFileObj[fileObj.push(e.target.files)]
    for (var i = 0; i < e.target.files.length; i++) {
      //3 images for file upload
      // setFile([...file, e.target.files[i]]);
      setFileArray[fileArray.push(URL.createObjectURL(fileObj[0][i]))];
      
      // setFilename(e.target.files[i].name);
      // console.log(e.target.files[i]);
    }
    setFile(fileArray)
  };

  const submitData = async (e) => {
    e.preventDefault();

    console.log("form data", e)

    // const formData = new FormData();

    // const formdat = {
    //   name: name, //Sets initial values when form loads
    //   type: type,
    //   price: price,
    //   category: category,
    //   discount: discount,
    //   description: description,
    //   image_1: image_1,
    //   image_2: image_2,
    //   image_3: image_3,
    // }

    // formData.append("productData", formdat);

    // formData.append("file", file);

        const rs = await new Products().updateUserProduct(owner, {
          name: name, //Sets initial values when form loads
          type: type,
          price: price,
          category: category,
          discount: discount,
          description: description,
          image_1: image_1,
          image_2: image_2,
          image_3: image_3,
        });

        if (rs.error) {
          callPrompt("Edit Products", "", "Close", "An error occured");
          console.log("Product Data: ", rs);
        }
        else 
        setDoneUpdate(true);
        setDoneUpdate(true);
        callPrompt("Edit Product", "", "Close", "Success: Product saved");
}

  useEffect(() => { //Gets Product Data of user
    (async () => {
      const res = await new Products().getUserProduct();
      setOwner(res.owner);
      setName(res.name);
      setType(res.type);
      setPrice(res.price);
      setCategory(res.category);
      setDiscount(res.discount);
      setDescription(res.description);

      if ((res.image_1, res.image_2, res.image_3)) {
        setImage1(res.image_1);
        setImage2(res.image_2);
        setImage3(res.image_3);
      }

      console.log("resData", res);
      setIsReady(true);
    })();
  }, []);



  return (
      <MainLayout>
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
        <form className=" col form-group md-12" onSubmit={submitData}>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Edit Product</h1>
          </div>
          {/* End page-header */}
          <div style={{ border: "6px dashed #818aa9" }}>
                  <div className="form-group multi-preview">

                   <img
                   src={
                     file
                       ? file
                       : "https://ecex.s3.eu-west-2.amazonaws.com/img.JPG"
                   }
                   alt={name}
                   width={80}
                   height={100}
                   style={{ borderRadius: "4px", margin: "35px" }}
                   className="rounded mx-auto d-block"
                 />              
                 </div>
                  

                  <input
                    type="file"
                    ref={inputRef}
                    value={image_1}
                    // id="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                    // name={fileName}
                    // ref={fileInput => this.fileInput = fileInput}
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

          <div className="row">
            {/*from here*/}
            <div className="col">
              {/* <div className="col"> */}
              <div className="form-group">
                <label className="bolder">
                  Product Name <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-rounded"
                  placeholder="Shoes"
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
                  onChange={(e) => setType(e.target.value)}
                  value={type}
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
                  value={category}
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

            <div className="col">
              <div className="form-group">
                <label className="bolder">Discount</label>
                <input
                  type="text"
                  className="form-control form-rounded"
                  placeholder="20%"
                  value={discount}
                  onChange={(e) => {
                    e.preventDefault()
                    setDiscount(e.target.value)}}
                  onBlur={(e) => {
                    e.preventDefault()
                    setPrice(price - ((e.target.value / 100) * price))}
                  }
                />
              </div>

              <div className="form-group">
                <label className="bolder">Description</label>
                <textarea
                  style={{ height: "120px" }}
                  className="form-control form-rounded"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col-12 form-group" style={{ paddingTop: "15px" }}>
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
                  style={{ width: "253px", marginLeft: "20px", float: "right" }}
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
      </MainLayout>
  );
};