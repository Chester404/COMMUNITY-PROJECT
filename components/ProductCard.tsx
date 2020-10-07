import { Button, Card, CardDeck, CardGroup, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3" id="product-card-div">
      <div className="card" id="product-card">
        <button
          id="cart-button"
          className="btn btn-info card-shopping"
        >
          <i className="fe fe-shopping-cart cart-icon"></i>
        </button>
        <img 
          src={
            product.image_1
            ? product.image_1
            : "/assets/images/product-card-default1.jpg"
          }
          id="product-image"
          className="card-img-top mx-auto card-image"
          alt="..."
          style={{ height: "12.5rem", objectFit: "fill", zIndex: 1 }}
        />
        <div className="card-body" id="product-card-body">
          <div className="row  "
           id="product-card__inner-row-name"
          >
               <h4 className="market-product-name">{product.name}</h4>
          </div>

          <div className="row justify-content-between">
            <div className=" mt-2"
             id="product-card__inner-row-price"
            >
              {`GHS ${product.price}`}
            </div>
            <div className="">
            <input
                id="password"
                type="number"
                className="form-control form-rounded cart-quantity"
                placeholder="Qty:"
                
              >
              </input>
              </div>
          </div>
        </div>
      </div>
    </div>


    
  );
};

export default ProductCard;
