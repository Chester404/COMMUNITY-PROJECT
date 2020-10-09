import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, CardDeck } from "react-bootstrap";
import MainLayout from "../../components/MainLayout";
import {Products} from '../../lib/endpoints'
function viewmyproducts() {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    (async()=>{
      const rs = await new Products().getUserProduct();
      console.log(rs);
      setProductItems(rs)
    })()
  }, []);

  return (
    <>
      <MainLayout>
        <p className=" myproducts-header container-fluid">
          My Products & Services{" "}
        </p>

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
                          {productItem.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Link>
              </div>;
            }) : ''}
          </div>
        </CardDeck>
      </MainLayout>
    </>
  );
}
export default viewmyproducts;
