import React from "react";
import { Card, Media } from "react-bootstrap";
import { connect } from "react-redux";
import {withRouter, Link} from 'react-router-dom'

const PollItem = ({ question, users }) => {
  console.log(question);
  return (
    <Card className="mx-1 mb-4 home-poll">
      <Card.Body>
        <Media>
          <span className="poll-avatar user1 mr-3"></span>
          <Media.Body>
            <h5 className="media-title">
              {users[question.author].name} <small>asks</small>
            </h5>
            <p className="text-muted mt-3 mb-0">Would you rather?</p>
            <p className="m-0 p-0">{question.optionOne.text} or ...</p>
          </Media.Body>
        </Media>
      </Card.Body>
      <Card.Footer>
        <Link to={`/question:${question.id}`} className="d-inline-block w-100 h-100 text-center">
          View Poll
        </Link>
      </Card.Footer>
    </Card>
  );
};

function mapStateToProps({ questions, users }, { questionId }) {
  return {
    question: questions[questionId],
    users
  };
}

export default withRouter(connect(mapStateToProps)(PollItem));
