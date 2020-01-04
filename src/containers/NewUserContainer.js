import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { handleSaveUser } from "../actions/shared";
import NewUserForm from "../components/NewUserForm";

class NewUserContainer extends Component {
  handleOnSubmit = (firstName, lastName, avatarURL) => {
    const { dispatch, history } = this.props;

    dispatch(handleSaveUser(firstName, lastName, avatarURL));
    history.push("/");
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="justufy-content-center">
            <Col lg={{ span: 6, offset: 3 }}>
              <NewUserForm onSubmit={this.handleOnSubmit} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default connect()(NewUserContainer);
