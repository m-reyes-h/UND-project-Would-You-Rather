import React, { Fragment } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Header from "./Header";
import PollItem from "./PoolItem";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="shadow-sm bg-white home-content mt-5">
              <Tabs defaultActiveKey="uaquestions" className="home-tabs">
                <Tab eventKey="uaquestions" title="Unasnwered questions">
                  <div className="p-4 pt-5 d-flex justify-content-between flex-wrap">
                    {new Array("1", "2", "3").map(item => (
                      <PollItem />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="aquestions" title="Asnwered questions">
                  <div className="p-4 pt-5 d-flex justify-content-between flex-wrap">
                    {new Array("1").map(item => (
                      <PollItem />
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
