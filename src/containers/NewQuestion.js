import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSaveQuestion } from "../actions/shared";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import NewQuestionForm from "../components/NewQuestionForm";

class NewQuestion extends Component {
  handleSubmit = (questionOne, questionTwo) => {
    const { dispatch, history } = this.props;
    dispatch(handleSaveQuestion(questionOne, questionTwo));
    history.push("/home");
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="justufy-content-center">
            <Col lg={{ span: 6, offset: 3 }}>
              <div className="newq-content mt-5 text-center">
                <h3 className="mb-5 p-0 newq-title">Create New Question</h3>
                <NewQuestionForm onSubmit={this.handleSubmit} />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(connect()(NewQuestion));
