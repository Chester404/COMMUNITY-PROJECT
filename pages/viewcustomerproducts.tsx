import MainLayout from "../components/MainLayout";
import { Products } from "../lib/endpoints";
import { useEffect, useState } from "react";

const disabled = {};
interface IPaginateProps {
  callback(i: number): void;
  recordsPerpage: number;
  totalRecords: number;
}
const Pagination = ({
  callback,
  recordsPerpage,
  totalRecords,
}: IPaginateProps) => {
  const [iter, setIter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const tr = Math.ceil(totalRecords / recordsPerpage);
    if (tr > 0) setIter(Array(tr).fill(0));
  }, [totalRecords]);

  return (
    <div className="col-md-12">
      <div className="pagination ml-auto" style={{ float: "right" }}>
        <a
          href="#"
          onClick={() => {
            if (currentPage != 1) {
              callback(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }
          }}
          style={
            currentPage == 1 ? { color: "gray", pointerEvents: "none" } : null
          }
        >
          « Prev
        </a>

        {iter.map((_, index: number) => {
          return (
            <a
              key={index}
              href="#"
              onClick={() => {
                setCurrentPage(index + 1);
                callback(index + 1);
              }}
              className={currentPage == index + 1 ? "active" : ""}
            >
              {index + 1}
            </a>
          );
        })}
        <a
          href="#"
          onClick={() => {
            if (currentPage < Math.ceil(totalRecords / recordsPerpage)) {
              callback(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }
          }}
          style={
            currentPage >= Math.ceil(totalRecords / recordsPerpage)
              ? { color: "gray", pointerEvents: "none" }
              : null
          }
        >
          Next »
        </a>
      </div>
    </div>
  );
};
export default function ProductsView() {
  const [allproducts, setAllProducts] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);
  const [recordsPerPage] = useState(15);

  useEffect(() => {
    (async () => {
      const rs = await new Products().getProducts();
      setTempList(rs);
      setAllProducts(rs.slice(0, recordsPerPage));
      // setIsLoading(false);
      settotalRecords(rs.length);
    })();
  }, []);
  


  const paginate = (page: number) => {
    const start = (page - 1) * recordsPerPage + 1;
    const end = start + recordsPerPage;
    console.log(start, end);
    const ts = tempList.slice(start - 1, end - 1);
    setAllProducts(ts);
  };

  return (
    <>
      <MainLayout>
      <div>
        <div className="container" style={{padding: "30px", width: "100%"}}>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{padding: "20px"}}>
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-interval="2000">
                    <img src="https://via.placeholder.com/200x80" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item" data-interval="2000">
                    <img src="https://via.placeholder.com/200x80" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item" data-interval="2000">
                    <img src="https://via.placeholder.com/200x80" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            
            <div className="ml-auto">
              <div className="inner-addon left-addon" style={{width: "80%", margin:"0 auto",}}>
                  <i className="fe fe-search fa-lg" />
                  <input
                    id="searchmember"
                    className="form-control form-rounded"
                    type="text"
                    placeholder="Search for product/service"
                    onChange={()=> {}}
                    style={{zIndex:"2", paddingLeft:"35px", height: "2.6em"}}
                  />
                  <button class="btn btn-primary" type="button" style={{zIndex:"-1", marginTop: "-35px", marginRight: "200px", float: "right", borderRadius: "7px", paddingRight: "30px", paddingLeft:"30px",}}>All</button>
                  <button class="btn btn-primary" type="button" style={{zIndex:"-1", marginTop: "-35px", marginRight: "108px", float: "right", borderRadius: "7px"}}>Products</button>
                  <button class="btn btn-primary" type="button" style={{zIndex:"-1", marginTop: "-35px", marginRight: "20px", float: "right", borderRadius: "7px"}}>Services</button>
              </div>
            </div>
            

            <div className="row" style={{width: "80%", margin:"0 auto", padding: "10px"}}>
              <div className="col-sm-2">
                <div className="dropdown">
                  <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{background: "#f7f7f7", border:"0.5px solid #b7aeae", borderColor: "#e0e0e0 !important", color: "#000", borderRadius: "7px"}}
                    >
                    Category
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="dropdown">
                  <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{background: "#f7f7f7", border:"0.5px solid #b7aeae", borderColor: "#e0e0e0 !important", color: "#000"}}
                    >
                    Location
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="dropdown">
                  <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{background: "#f7f7f7", border:"0.5px solid #b7aeae", borderColor: "#e0e0e0 !important", color: "#000"}}
                    >
                    Prices
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Lowest to Highest</a>
                    <a className="dropdown-item" href="#">Highest to Lowest</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
          

            
            <div className="row">
              {allproducts.map((product: any, index: number) => {
                  return (
                <div className="col-sm-3" >
                  <div className="card">
                      <button class="btn btn-info" style={{width: "2em", borderRadius: "2em", zIndex: "3", marginBottom: "-3.8em", marginLeft: "80%", marginTop: "1em"}}><i class="fa fa-shopping-cart"></i></button>
                      <img src="/images/products/valeriia-miller-_42NKYROG7g-unsplash.jpg" className="card-img-top mx-auto" alt="..." style={{ height: "10rem", objectFit:"fill", zIndex: "1"}} />
                      <div className="card-body">
                        
                        <div className="row">
                          <div className="col-md-10" style={{paddingRight: "2em"}}>
                            <div className="font-weight-bold row">{product.title}</div>
                            <div className="row">{`GHS ${product.price}`}</div>
                          </div>
                          <div className="col-md-2 d-flex align-items-center">
                            <div className="row float-right">
                              
                              {/* <div className="btn-group mr-1" role="group" aria-label="First group">
                                <button type="button" className="btn btn-sm">-</button>
                                <span className=""> 1 </span>
                                <button type="button" className="btn btn-primary btn-sm">+</button>
                              </div> */}

                              <div className="qty mt-5 btn-group">
                                  <span className="minus" style={{fontSize:"1.5em", zIndex:"2"}}>-</span>
                                  <input type="number" className="count" name="qty" value="1" style={{width: "4.2em", textAlign: "center", zIndex:"1", marginLeft: "-15px", marginRight: "-15px"}}/>
                                  <span className="plus" style={{fontSize:"1em", zIndex:"2", marginTop: "6px"}}>+</span>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        
                      </div>
                  </div>
                </div>
                );
              })}  
              <div className="col-sm-6" >
                  <div className="card">
                  <div className="row">
                    <div className=" col-sm-6" style={{order: "2"}}>
                    <img src="/images/products/valeriia-miller-_42NKYROG7g-unsplash.jpg" className="card-img-right" alt="..." style={{ width: "100%", height: "20em", objectFit:"fill", zIndex: "1", marginBottom: "-1.5em"}} />
                      <button class="btn btn-info" style={{width: "2em", borderRadius: "3em", marginTop: "1em", zIndex: "-1", marginLeft: "80%", marginTop: "-33.5em",}}><i className="fa fa-shopping-cart"></i></button>
                    </div>
                      <div className="card-body col-sm-6" style={{order: "1", width: "50%", paddingLeft: "3em", }}>                        
                          <div className="font-weight-bold row" style={{paddingBottom: "15px"}}>This is the title of the distin</div>
                          <div className="row">Something nice, something loveley, beautiful and delicious. This is so wonderful and phantasmagorical. Perplexing yet bemusing. </div>
                          <div className="font-weight-bold row" style={{position: "absolute", bottom: "15px"}}>Read More</div>
                      </div>
                      
                  </div>
                </div>
                </div>
            </div>
                  
            <div
              className="row"
              style={{ margin: "10px", background: "#ffffff" }}
            >
              <Pagination
                callback={paginate}
                totalRecords={totalRecords}
                recordsPerpage={recordsPerPage}
              />
            </div>
          </div>
      </MainLayout>
    </>
  );
}
