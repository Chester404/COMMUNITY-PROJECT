import Link from "next/link";
import React from "react";
import { Button, Card, CardDeck, CardGroup, Tab, Tabs } from "react-bootstrap";
import MainLayout from "../../components/MainLayout";

function viewmyproducts() {
	return (
    <>
      <MainLayout>
        
        <p className=" myproducts-header container-fluid">
          My Products & Services{" "}
        </p>

        <CardDeck className=" mb-3 mt-5">
          <div className="row">
            <div className="col-md-3 ">
              <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="/assets/images/trials3.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>

            <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="/assets/images/trials3.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Services Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="/assets/images/trials3.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Services Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="/assets/images/trials3.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
          </div>
        </CardDeck>
      </MainLayout>
    </>
  );
}
export default viewmyproducts;
