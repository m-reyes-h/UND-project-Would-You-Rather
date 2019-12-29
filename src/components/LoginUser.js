import React from "react";

const LoginUser = ({ user, signInUser }) => {
  return (
    <span
      role="button"
      className={`poll-avatar ${user.avatarURL} mx-2`}
      tabIndex="0"
      onClick={() => signInUser(user.id)}
    ></span>
  );
};

export default LoginUser;
