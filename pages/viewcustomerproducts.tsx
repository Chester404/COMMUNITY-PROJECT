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
              <div className="inner-addon right-addon" style={{width: "80%", margin:"0 auto"}}>
                  <i className="fe fe-search fa-lg" />
                  <input
                    id="searchmember"
                    className="form-control form-rounded"
                    type="text"
                    placeholder="Search for product/service"
                    onChange={()=> {}}
                  />
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
                    style={{background: "transparent !important", borderColor: "#000 !important", color: "#000"}}
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
                    style={{background: "transparent !important", borderColor: "#000", color: "#000"}}
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
                    style={{background: "transparent !important", borderColor: "#000", color: "#000"}}
                    >
                    Prices
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                  <img src={product.image} className="card-img-top mx-auto" alt="..." style={{width: "8rem", height: "8rem", objectFit:"contain"}} />
                  <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{`GHS ${product.price}`}</p>
                  </div>
                </div>
              </div>
                );
              })}  
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
