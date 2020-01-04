import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { handleSaveUser } from "../actions/shared";

class NewUserContainer extends Component {
  state = { firstName: "", lastName: "", avatarURL: "" };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, avatarURL } = this.state;
    const { dispatch, history } = this.props;

    dispatch(handleSaveUser(firstName, lastName, avatarURL));
    history.push("/");
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { firstName, lastName, avatarURL } = this.state;
    const hasUser =
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      avatarURL.trim().length > 0;
    return (
      <Fragment>
        <Container>
          <Row className="justufy-content-center">
            <Col lg={{ span: 6, offset: 3 }}>
              <div className="newu-content mt-4 text-center">
                <Form
                  autoComplete="off"
                  className="shadow-sm bg-white"
                  onSubmit={this.handleSubmit}
                >
                  {/* this input is to prevent autocompleted in the next inputs */}
                  <input
                    autoComplete="false"
                    name="noautocomplete"
                    type="text"
                    style={{ display: "none" }}
                  ></input>
                  <div className="p-4 px-5">
                    <h5 className="questionf-subtitle mb-4">New User</h5>

                    <Form.Control
                      autoFocus
                      className="newu-control mb-4"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                    <Form.Control
                      className="newu-control"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                    />

                    <h5 className="login-subtitle mt-5 mb-4">
                      Select your avatar
                    </h5>
                    <div className="d-flex justify-content-around">
                      <label
                        className="avatar-control-group d-flex align-items-center mx-1"
                        htmlFor="new1"
                      >
                        <input
                          id="new1"
                          name="avatarURL"
                          type="radio"
                          value="new1"
                          onChange={this.handleChange}
                        />
                        <span className="avatar-control-checkmark mx-3"></span>
                        <span
                          role="button"
                          className={`poll-avatar new1`}
                          tabIndex="0"
                        ></span>
                        <span className="avatar-control-border"></span>
                      </label>

                      <label
                        className="avatar-control-group d-flex align-items-center mx-1"
                        htmlFor="new2"
                      >
                        <input
                          id="new2"
                          name="avatarURL"
                          type="radio"
                          onChange={this.handleChange}
                          value="new2"
                        />
                        <span className="avatar-control-checkmark mx-3"></span>
                        <span
                          role="button"
                          className={`poll-avatar new2`}
                          tabIndex="0"
                        ></span>
                        <span className="avatar-control-border"></span>
                      </label>

                      <label
                        className="avatar-control-group d-flex align-items-center mx-1"
                        htmlFor="new3"
                      >
                        <input
                          id="new3"
                          name="avatarURL"
                          type="radio"
                          onChange={this.handleChange}
                          value="new3"
                        />
                        <span className="avatar-control-checkmark mx-3"></span>
                        <span
                          role="button"
                          className={`poll-avatar new3`}
                          tabIndex="0"
                        ></span>
                        <span className="avatar-control-border"></span>
                      </label>
                    </div>
                  </div>
                  <Button
                    disabled={hasUser ? false : true}
                    type="submit"
                    className="flat-button w-100"
                  >
                    Add New User
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default connect()(NewUserContainer);
