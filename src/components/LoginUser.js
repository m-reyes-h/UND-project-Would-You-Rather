import React from "react";

const LoginUser = ({ user, signInUser }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <span
        role="button"
        className={`poll-avatar ${user.avatarURL} mx-4 mb-3`}
        tabIndex="0"
        onClick={() => signInUser(user.id)}
      ></span>
      <small className="text-uppercase">{user.id}</small>
    </div>
  );
};

export default LoginUser;
