import React from "react";

const LeaderBoardcard = ({ index, user }) => {
  let rank = null;
  switch (index) {
    case 0:
      rank = "gold";
      break;
    case 1:
      rank = "silver";
      break;

    case 2:
      rank = "bronze";
      break;

    default:
      rank = "bronze";
      break;
  }
  const answerSum = Object.keys(user.answers).length;
  const questionSum = user.questions.length;
  const score = answerSum + questionSum;
  return (
    <div className="leader-card shadow-sm bg-white pt-4 pb-2">
      <span className={`poll-avatar ${user.avatarURL}`}></span>
      <h5 className="leader-title mt-2">{user.name}</h5>
      <div className="d-flex justify-content-between px-4 mt-4">
        <div>
          <small>Rank</small>
          <i className="rank-icon d-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className={`trophy ${rank}`}
                d="M20.2,4H20H17V2H7V4H4.5H3.8H2V11C2,12 3,13 4,13H7.2C7.6,14.9 8.6,16.6 11,16.9V19C8,19.2 8,20.3 8,21.6V22H16V21.7C16,20.4 16,19.3 13,19.1V17C15.5,16.7 16.5,15 16.8,13.1H20C21,13.1 22,12.1 22,11.1V4H20.2M4,11V6H7V8V11C5.6,11 4.4,11 4,11M20,11C19.6,11 18.4,11 17,11V6H18H20V11Z"
              />
            </svg>
          </i>
        </div>
        <div>
          <small>Score</small>
          <p className="leader-score">{score}</p>
        </div>
      </div>

      <div className="pt-2 mt-2 border-top">
        <p className="mb-2 text-muted">Questions</p>
        <div className="d-flex justify-content-between px-4">
          <div>
            <small>Answered</small>
            <p className="leader-score">{answerSum}</p>
          </div>
          <div>
            <small>Created</small>
            <p className="leader-score">{questionSum}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardcard;
