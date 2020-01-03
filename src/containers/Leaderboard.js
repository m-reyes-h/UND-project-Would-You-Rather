import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import LeaderBoardCard from "../components/LeaderBoardCard";

const Leaderboard = ({ users }) => {
  let usersOrder = [];
  for (let [user] of Object.entries(users)) {
    const questionSum = user.questions.length;
    const answerSum = Object.keys(user.answers).length;
    const score = answerSum + questionSum;
    usersOrder.push({
      name: user.name,
      avatarURL: user.avatarURL,
      score,
      answerSum,
      questionSum
    });
  }
  const usersSorted = usersOrder.sort((a, b) => b.score - a.score);

  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="leaderboard mt-5 text-center d-flex justify-content-between">
              {usersSorted.map((user, index) => (
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
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
