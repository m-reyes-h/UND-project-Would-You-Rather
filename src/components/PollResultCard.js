import React from "react";
import { ProgressBar } from "react-bootstrap";

const PollResultCard = ({
  totalVotes,
  optionPercent,
  optionVotes,
  active,
  text
}) => {

  console.log(active);
  return (
    <div className={`poll-result-box ${active === true ? "active" : null}`}>
      <div className="d-flex justify-content-between mt-3">
        <span className="poll-box-title">{text}</span>
        <span className="poll-box-percent">{optionPercent}%</span>
      </div>
      <ProgressBar now={optionPercent} />
      <small className="w-100 text-center">{`${optionVotes} out of ${totalVotes} votes`}</small>
    </div>
  );
};

export default PollResultCard;
