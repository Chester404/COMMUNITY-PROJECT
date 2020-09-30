import MainLayout from "../../components/MainLayout";
import { Products } from "../../lib/endpoints";
import { useEffect, useState } from "react";
import Link  from 'next/link';
import ProductCard  from '../../components/ProductCard';
import ServiceCard from '../../components/ServiceCard';

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
                    style={{zIndex:2, paddingLeft:"35px", height: "3.0em"}}
                  />
                  <button className="btn btn-primary" type="button" style={{zIndex:-1, marginTop: "-37px", marginRight: "200px", float: "right", borderRadius: "7px", paddingRight: "30px", paddingLeft:"30px",}}>All</button>
                  <button className="btn btn-light" type="button" style={{zIndex:-1, marginTop: "-37px", marginRight: "108px", float: "right", borderRadius: "7px"}}>Products</button>
                  <button className="btn btn-light" type="button" style={{zIndex:-1, marginTop: "-37px", marginRight: "20px", float: "right", borderRadius: "7px"}}>Services</button>
              </div>
            </div>
            

            <div className="row" style={{width: "80%", margin:"0 auto", padding: "10px"}}>
              <div className="col-sm-2">
                <div className="dropdown">
                  <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{border:"0.5px solid #b7aeae", borderColor: "#e0e0e0 !important", color: "#000", borderRadius: "7px"}}
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
                    className="btn btn-light dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{border:"0.5px solid #b7aeae", borderColor: "#e0e0e0 !important", color: "#000"}}
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
                    className="btn btn-light dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{border:"0.5px solid #b7aeae", borderColor: "#e0e0e0 !important", color: "#000"}}
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
                   product.product_type === 'PR' ? 
                      <ProductCard key={index} product={product}/>
                    : 
                      <ServiceCard key={index} service={product}/>
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
