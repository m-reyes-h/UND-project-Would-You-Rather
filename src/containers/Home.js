import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Header from "./Header";
import PollItemContainer from "./QuestionItemContainer";

class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="justufy-content-center">
            <Col lg={{ span: 8, offset: 2 }}>
              <div className="shadow-sm bg-white home-content mt-5">
                <Tabs defaultActiveKey="uaquestions" className="home-tabs">
                  <Tab
                    eventKey="uaquestions"
                    title={`Unasnwered questions (${unansweredQuestions.length})`}
                  >
                    <div className="p-4 pt-5 d-flex justify-content-between flex-wrap">
                      {unansweredQuestions.length ? (
                        unansweredQuestions.map(qid => (
                          <PollItemContainer key={qid} questionId={qid} />
                        ))
                      ) : (
                        <h5 className="text-center w-100 text-muted">You are all done!</h5>
                      )}
                    </div>
                  </Tab>
                  <Tab
                    eventKey="aquestions"
                    title={`Asnwered questions (${answeredQuestions.length})`}
                  >
                    <div className="p-4 pt-5 d-flex justify-content-between flex-wrap">
                      {answeredQuestions.length ? (
                        answeredQuestions.map(qid => (
                          <PollItemContainer key={qid} questionId={qid} />
                        ))
                      ) : (
                        <h5 className="text-center w-100 text-muted">Try to answer any question...</h5>
                      )}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestions = Object.keys(questions)
    .filter(qid => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(mapStateToProps)(Home);
