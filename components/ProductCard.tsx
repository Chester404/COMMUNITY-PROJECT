const ProductCard = ({product}) => {
    return (
        <div className="col-sm-3" >
            <div className="card">
            <button className="btn btn-info" style={{width: "2em", borderRadius: "2em", zIndex: 3, marginBottom: "-3.8em", marginLeft: "80%", marginTop: "1em"}}><i className="fa fa-shopping-cart"></i></button>
            <img src="/images/products/valeriia-miller-_42NKYROG7g-unsplash.jpg" className="card-img-top mx-auto" alt="..." style={{ height: "10rem", objectFit:"fill", zIndex: 1}} />
            <div className="card-body">
            
            <div className="row">
                <div className="col-md-10" style={{paddingRight: "2em"}}>
                <div className="font-weight-bold row">{product.name}</div>
                <div className="row">{`GHS ${product.price}`}</div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                <div className="row float-right">

                    <div className="qty mt-5 btn-group">
                        <span className="minus" style={{fontSize:"1.5em", zIndex:2}}>-</span>
                        <input type="number" className="count" name="qty" defaultValue="1" style={{width: "4.2em", textAlign: "center", zIndex:1, marginLeft: "-15px", marginRight: "-15px"}}/>
                        <span className="plus" style={{fontSize:"1em", zIndex:2, marginTop: "6px"}}>+</span>
                    </div>
                </div>
                </div>
                
            </div>
            
            </div>
        </div>
        </div>   
    );
}

export default ProductCard;