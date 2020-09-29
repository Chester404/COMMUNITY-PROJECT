const ServiceCard = ({service}) => {
    return (
        <div className="card">
            <div className="row">
            <div className=" col-sm-6" style={{order: 2}}>
            <img src="/images/products/valeriia-miller-_42NKYROG7g-unsplash.jpg" className="card-img-right" alt="..." style={{ width: "100%", height: "20em", objectFit:"fill", zIndex: 1, marginBottom: "-1.5em"}} />
                <button className="btn btn-info" style={{width: "2em", borderRadius: "3em", marginTop: "-33em", zIndex: -1, marginLeft: "80%",}}><i className="fa fa-shopping-cart"></i></button>
            </div>
                <div className="card-body col-sm-6" style={{order: 1, width: "50%", paddingLeft: "3em", }}>                        
                <div className="font-weight-bold row" style={{paddingBottom: "15px"}}>{service.name}</div>
                <div className="row">{service.description}</div>
                    <div className="font-weight-bold row" style={{position: "absolute", bottom: "15px"}}>Read More</div>
                </div>
                
            </div>
        </div>
    );

}
export default ServiceCard;