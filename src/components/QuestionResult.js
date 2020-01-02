import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../containers/Header";
import QuestionResultCard from "./QuestionResultCard";

const QuestionResult = ({ authedUser, question, users }) => {
  const optionOneVotes = question.optionOne.votes;
  const optionTwoVotes = question.optionTwo.votes;
  const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  const optionOnePercent = (
    (optionOneVotes.length * 100) /
    totalVotes
  ).toFixed();
  const optionTwoPercent = (
    (optionTwoVotes.length * 100) /
    totalVotes
  ).toFixed();

  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="justufy-content-center">
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="poll-result-content mt-4 text-center">
              <span
                className={`poll-avatar ${
                  users[question.author].avatarURL
                } mb-2`}
              ></span>
              <h4 className="mb-5 p-0 poll-result-title">
                {`Asked by ${users[question.author].name}`}
              </h4>
              <div className="poll-result-inner shadow-sm bg-white p-4 px-5">
                <h5 className="poll-result-subtitle mb-4">
                  Would you rather...
                </h5>

                <QuestionResultCard
                  text={question.optionOne.text}
                  active={optionOneVotes.includes(authedUser)}
                  totalVotes={totalVotes}
                  optionPercent={optionOnePercent}
                  optionVotes={optionOneVotes.length}
                />

                <div className="my-4">VS</div>

                <QuestionResultCard
                  text={question.optionTwo.text}
                  active={optionTwoVotes.includes(authedUser)}
                  totalVotes={totalVotes}
                  optionPercent={optionTwoPercent}
                  optionVotes={optionTwoVotes.length}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default QuestionResult;
