const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3" id="product-card-div">
      <div className="card" id="product-card">
        <button
          id="cart-button"
          className="btn btn-info"
          style={{
            width: "2em",
            borderRadius: "2em",
            zIndex: 3,
            marginBottom: "-3.8em",
            marginLeft: "80%",
            marginTop: "1em",
          }}
        >
          <i className="fa fa-shopping-cart"></i>
        </button>
        <img
          src={product.image_1}
          id="product-image"
          className="card-img-top mx-auto"
          alt="..."
          style={{ height: "10rem", objectFit: "fill", zIndex: 1 }}
        />
        <div className="card-body" id="product-card-body">
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
              <div className="row float-right" id="product-card__quantity-row">
                <div className="qty mt-5 btn-group" id="product-card-qty">
                  <span
                    id="product-card-qty-minus"
                    className="minus"
                    style={{ fontSize: "1.5em", zIndex: 2 }}
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
                      width: "4.2em",
                      textAlign: "center",
                      zIndex: 1,
                      marginLeft: "-15px",
                      marginRight: "-15px",
                    }}
                  />
                  <span
                    id="product-card-qty-plus"
                    className="plus"
                    style={{ fontSize: "1em", zIndex: 2, marginTop: "6px" }}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-2 d-flex align-items-center"
            id="product-card__quantity-div"
          >
            <div className="row float-right" id="product-card__quantity-row">
              <div className="qty mt-5 btn-group" id="product-card-qty">
                <span
                  id="product-card-qty-minus"
                  className="minus"
                  style={{ fontSize: "1.5em", zIndex: 2 }}
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
                    width: "4.2em",
                    textAlign: "center",
                    zIndex: 1,
                    marginLeft: "-15px",
                    marginRight: "-15px",
                  }}
                />
                <span
                  id="product-card-qty-plus"
                  className="plus"
                  style={{ fontSize: "1em", zIndex: 2, marginTop: "6px" }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
