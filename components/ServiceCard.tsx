const ServiceCard = ({service}) => {
    const truncate = (str: string) => {
        return str.length > 300 ? str.substring(0, 300) + "..." : str;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6" style={{order: 2}}>
                                <img src={service.image_1} className="card-img-right" alt="..." 
                                style={{ width: "100%", height: "20em", objectFit:"fill", zIndex: 1, marginBottom: "-1.5em"}} 
                                />
                                <button className="btn btn-info" style={{width: "2em", borderRadius: "3em", marginTop: "-37em", zIndex: -1, marginLeft: "80%",}}><i className="fa fa-shopping-cart"></i></button>
                            </div>
                            <div className="col-md-6" style={{order: 1}}>
                                <div className="font-weight-bold row" style={{paddingBottom: "15px"}}>{service.name}</div>
                                <div className="row" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{truncate(service.description)}</div>
                                <div className="font-weight-bold row" style={{position: "absolute", bottom: "15px"}}>Read More</div>
                            </div>
                        </div> 
                    </div>    
                </div> 
            </div>
    </div>
    );

}
export default ServiceCard;

