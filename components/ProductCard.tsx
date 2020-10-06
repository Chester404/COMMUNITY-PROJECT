import { Button, Card, CardDeck, CardGroup, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3" id="product-card-div">
      <div className="card" id="product-card" style={{borderRadius:"1em"}}>
        <button
          id="cart-button"
          className="btn btn-info card-shopping"
        >
          <i className="fe fe-shopping-bag cart-icon"></i>
        </button>
        <img
          src={product.image_1}
          id="product-image"
          className="card-img-top mx-auto"
          alt="..."
          style={{ height: "12.5rem", objectFit: "fill", zIndex: 1 }}
        />
        <div className="card-body justify-content-between" id="product-card-body">
          <div className="row" id="product-card__inner-row">
            <div
              className="col-md-10"
              style={{ paddingRight: "2em" }}
              id="product-card__inner-row-content"
            >
              <div
                className="font-weight-bold row"
                id="product-card__inner-row-name"
              >
                {product.name}
              </div>
              <div
                className="row"
                id="product-card__inner-row-price"
              >{`GHS ${product.price}`}</div>
            </div>
            <div
              className="col-md-2 d-flex align-items-center"
              id="product-card__quantity-div"
            >
              <div className="row float-right" id="product-card__quantity-row" >
                <div className="qty mt-5 btn-group" id="product-card-qty" style={{width:"5em"}}>
                  <span
                    id="product-card-qty-minus"
                    className="minus"
                    onClick={()=> {console.log('minus clicked')}}
                    style={{ fontSize: "1.5em", zIndex: 2, marginTop: "3.5px", cursor:"pointer"}}
                  >
                    -
                  </span>
                  <input
                    id="product-card-qty-value"
                    type="number"
                    className="count"
                    name="qty"
                    defaultValue="1"
                    style={{
                      width: "4.5em",
                      textAlign: "center",
                      zIndex: 1,
                      marginLeft: "-15px",
                      marginRight: "-15px",
                    }}
                  />
                  <span
                    id="product-card-qty-plus"
                    className="plus"
                    onClick={()=> {console.log('plus clicked')}}
                    style={{ fontSize: "1em", zIndex: 2, marginTop: "10px", cursor:"pointer"}}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
