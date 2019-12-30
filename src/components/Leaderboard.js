import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../containers/Header";
import LeaderBoardCard from './LeaderBoardCard';

const Leaderboard = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="leaderboard mt-5 text-center d-flex justify-content-between">
              <LeaderBoardCard rank="gold" user="user1" />
              <LeaderBoardCard rank="silver" user="user2" />
              <LeaderBoardCard rank="bronze" user="user3" />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Leaderboard;
