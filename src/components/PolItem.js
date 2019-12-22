import React from 'react';
import {Card, Media} from 'react-bootstrap'

const PollItem = () => {
  return (
    <Card className="mx-1 mb-4 home-poll">
      <Card.Body>
        <Media>
          <span className="poll-avatar user1 mr-3"></span>
          <Media.Body>
            <h5 className="media-title">Michel Reyes <small>asks</small></h5>
            <p className="text-muted mt-3 mb-0">Would you rather?</p>
            <p className="m-0 p-0">
              Be front-end developer or...
            </p>
          </Media.Body>
        </Media>
      </Card.Body>
      <Card.Footer>
        <a href="/#" className="d-inline-block w-100 h-100 text-center">View Poll</a>
      </Card.Footer>
    </Card>
  );
}

export default PollItem;