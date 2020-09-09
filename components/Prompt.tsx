import Link from "next/link";
import { useState, useEffect } from "react";

const Prompt = (props: any) => {
  const [closeBox, setCloseBox] = useState(props.show);
  useEffect(() => {
    setCloseBox(props.show);
  }, [props.show]);

  return (
    <div
      id="myModal"
      className="modal overlay"
      style={{ display: closeBox ? "block" : "", zIndex: 9999 }}
    >
      {/* <!-- Modal content --> */}
      <div
        className="modal-content"
        style={{
          width: "400px",
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: "-150px",
          marginTop: "-150px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* <p>{props.title}</p> */}
        <div style={{ fontWeight: "bold" }}> {props.children}</div>
        {props.success ? (
          <Link href={props.linkTo}>
            <a className="btn btn-primary">{props.linkText}</a>
          </Link>
        ) : (
          <a
            href="#"
            onClick={() => {
              props.handleClose();
              // setCloseBox(false);
            }}
            style={{ fontSize: 20 }}
          >
            {props.linkText.length > 0 ? props.linkText : "Close"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Prompt;
