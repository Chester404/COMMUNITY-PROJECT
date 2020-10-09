import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, CardDeck } from "react-bootstrap";
import MainLayout from "../../components/MainLayout";
import {Products} from '../../lib/endpoints'

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
      <div className="pagination ml-auto mb-5" style={{ float: "right" }}>
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

function viewmyproducts() {
  const [productItems, setProductItems] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);
  const [recordsPerPage] = useState(16);

  useEffect(() => {
    (async()=>{
      const rs = await new Products().getUserProduct();
      console.log(rs);
      setTempList(rs);
      setProductItems(rs.slice(0, recordsPerPage));
      // setIsLoading(false);
      settotalRecords(rs.length);
    })()
  }, []);

  const paginate = (page: number) => {
    const start = (page - 1) * recordsPerPage + 1;
    const end = start + recordsPerPage;
    console.log(start, end);
    const ts = tempList.slice(start - 1, end - 1);
    setProductItems(ts);
  };

  return (
    <>
      <MainLayout>
        <div className="page-header">
            <h1 className="page-title">My Products & Services</h1>
        </div>
       

        <CardDeck className=" mb-3 mt-5 org-products">
          <div className="row">
            {(productItems.length > 0)?  productItems.map((productItem: any, index: number) => {
              return <div key={index} className="col-md-3 ">
                 <Link href="/products/[id]" as={`/products/${productItem.id}`} style={{ cursor: "pointer" }} >
                    <Card className="mb-5">
                      <Card.Img className="card-image" variant="top" src={
                           productItem.image_1
                           ? productItem.image_1
                           : "/assets/images/product-card-default1.jpg"
                        } />
                      <Card.Body>
                        <Card.Title>
                          <a className="market-product-name">{productItem.name}</a>
                        </Card.Title>
                        <Card.Text className="product-description">
                          GHS {productItem.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Link>
              </div>;
            }) : 'NO PRODUCTS'}
          </div>

          <div
            className="row"
            id="paginate-row"
            style={{ margin: "10px",}}
          >
            <Pagination
              callback={paginate}
              totalRecords={totalRecords}
              recordsPerpage={recordsPerPage}
            />
          </div>
        </CardDeck>
      </MainLayout>
    </>
  );
}
export default viewmyproducts;
