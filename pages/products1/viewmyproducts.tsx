import Link from "next/link";
import React from "react";
import { Button, Card, CardDeck, CardGroup, Tab, Tabs } from "react-bootstrap";
import MainLayout from "../../components/MainLayout";

function viewmyproducts() {
	return (
    <>
      <p className=" myproducts-header container-fluid">
        My Products & Services{" "}
      </p>

      <MainLayout>
        {/* The Tab for products and services */}
        <Tabs className="tabToggler" defaultActiveKey="products">
          {/* The Tab for products */}
          <Tab className="mt-10" eventKey="products" title="Products">

            {/* The list of product items*/}
            <CardDeck className=" mb-3">

              <div className="row">
                <div className="col-md-3">
                  <Card className="productCard">
                    <Card.Img variant="bottom" src="/assets/images/trials3.jpg" />
                    <Card.Body>
                      <div>
                        <Card.Title>Product Name</Card.Title>
                        <Card.Text>
                          <h5>GHS 300.00</h5>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-3">
                  
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">

                </div>
              </div>

            </CardDeck>

          </Tab>
          {/* The END of PRODUCTS */}

          {/* The Tab for SERVICES  */}
          <Tab eventKey="services" title="Services">
            {/*  */}

            <div className="row">
              <div className="col-6  mt-1 mb-1">
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <Card.Title>Name of Service</Card.Title>
                      <Card.Text>
                        Description for the type of services an organization
                        provides
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="/assets/images/trials3.jpg" />
                  </Card>
                </CardGroup>
              </div>

              <div className="col-6 mt-1 mb-1">
                
              </div>
            </div>

          </Tab>
        </Tabs>
      </MainLayout>
    </>
  );
}
export default viewmyproducts;
