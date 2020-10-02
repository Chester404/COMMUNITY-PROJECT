import MainLayout from "../../components/MainLayout";
import { useState, useEffect, useRef } from "react";
import { Products } from "../../lib/endpoints";
import Prompt from "../../components/Prompt";
import { useRouter } from "next/router";

const PRODUCT_TYPE = [
  ["product", "Product"],
  ["service", "Service"],
];

const CATEGORY = [
  ["fashion", "Fasion"],
  ["electronics", "Electronics"],
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
  const [userImage, setImage] = useState("/assets/images/Profile_Icon.png");
  const [tempImage, setTempImage] = useState("");
  const [doneUpdate, setDoneUpdate] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [shouldUploadImage, setShouldUpalodImage] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusColor, setStatusColor] = useState("blue");
  const [productData, setProductData] = useState<any>({});
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("Upload Image");

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
    setFile(e.target.files[0]);
    // setFilename(e.target.files[0].name);
  };

  useEffect(() => {
    //Gets Product Data of user
    (async () => {
      const rs = await new Products().getUserProduct();
      setProductData(JSON.stringify(rs.data));
      setOwner(productData.owner);
      setName(productData.name);
      setType(productData.type);
      setPrice(productData.price);
      setCategory(productData.category);
      setDiscount(productData.discount);
      setDescription(productData.description);

      if ((productData.image_1, productData.image_2, productData.image_3)) {
        setImage1(productData.image_1);
        setImage2(productData.image_2);
        setImage3(productData.image_3);
      }

      console.log("rsData", rs);
      setIsReady(true);
    })();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();

    console.log("form data", e);

    const formData = new FormData();

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

    formData.append("productData", productData);

    // formData.append("file", file);

    const rs = await new Products().updateUserProduct(owner, productData);

    if (rs.error) {
      callPrompt("Edit Products", "", "Close", "An error occured");
      console.log("Product Data: ", rs);
    } else setDoneUpdate(true);
    setDoneUpdate(true);
    callPrompt("Edit Product", "", "Close", "Success: Product saved");
  };

  //       let lStorage: any = window.localStorage.getItem("cp-a");
  //       lStorage = JSON.parse(lStorage);
  //       if (lStorage) {
  //         lStorage.name = name;
  //         lStorage.image = image_1;
  //         window.localStorage.setItem("cp-a", JSON.stringify(lStorage));
  //       }
  //       setDoneUpdate(true);
  //       setDoneUpdate(true);
  //       callPrompt("Edit Product", "", "Close", "Success: Product saved");
  // };

  // const updateUserProduct = async () => {
  //   const lStorage: any = JSON.parse(window.localStorage.getItem("cp-a"));
  //   let myHeaders: any = new Headers();
  //   myHeaders.append("Authorization", "Bearer " + lStorage.access);

  //   var formdata = new FormData();
  //   formdata.append("image", tempImage);

  //   var requestOptions: any = {
  //     method: "PUT",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   try {
  //     const rs = await fetch(
  //       "http://51.116.114.155:8080/marketplace/update_product/" + id,
  //       requestOptions
  //     );
  //     return rs;
  //   } catch (e) {
  //     return { error: "Failed to updload image" };
  //   }
  // };

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
        <div
          style={{
            borderStyle: "dashed",
            backgroundColor: "#fff",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src={
              fileName
                ? fileName
                : "https://ecex.s3.eu-west-2.amazonaws.com/img.JPG"
            }
            alt={name}
            width={80}
            height={100}
            style={{ borderRadius: "4px", margin: "20px" }}
            className="rounded mx-auto d-block"
          />

          <input
            type="file"
            value=""
            id="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onChange}
          />
          <button className="btn btn-primary savebtn mx-auto d-block">
            <label htmlFor="file">{fileName}</label>
          </button>
        </div>
        {/* <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e: any) => {
              let reader: any = new FileReader();
              const file = e.target.files[0];
              reader.onload = function (event: any) {
                setImage(event.target.result);
                setTempImage(file);
                setShouldUpalodImage(true);
              };
              reader.readAsDataURL(file);
            }}
          /> */}

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
                onChange={(e: any) => {
                  e.preventDefault();
                  setDiscount(e.target.value);
                }}
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
}
