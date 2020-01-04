import React from "react";

const LoginUser = ({ user, signInUser }) => {
  return (
    <div className="d-flex flex-column align-items-center mx-4 mb-1 mt-3">
      <span
        role="button"
        className={`poll-avatar ${user.avatarURL} mb-2`}
        tabIndex="0"
        onClick={() => signInUser(user.id)}
      ></span>
      <small className="text-uppercase">{user.id}</small>
    </div>
  );
};

export default LoginUser;
