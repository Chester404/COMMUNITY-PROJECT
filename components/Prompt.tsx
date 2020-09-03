import Modal from "react-bootstrap/Modal";
import Link from "next/link";

const Prompt = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.title.length <= 0 ? "Take action." : props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Link href={`/auth/${props.linkTo}`}>
          <a>{props.linkText}</a>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Prompt;
