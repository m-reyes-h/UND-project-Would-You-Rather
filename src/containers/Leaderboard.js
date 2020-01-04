import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import LeaderBoardCard from "../components/LeaderBoardCard";

const Leaderboard = ({ users }) => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="leaderboard mt-5 text-center d-flex justify-content-between">
              {users.map((user, index) => (
                <LeaderBoardCard key={index} user={user} index={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

function mapStateToProps({ users }) {
  const userScore = user =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users)
      .sort((a, b) => userScore(b) - userScore(a))
      .slice(0, 3)
  };
}

export default connect(mapStateToProps)(Leaderboard);
