import React from "react";
import { useNavigate } from "react-router";
import "../styles/Error.scss";
function Error() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div className="error_container">
      <h1 className="error_title">404</h1>
      <h1>Page not found</h1>
      <p>Oops! Can’t access this page. It might have been moved or deleted</p>

      <button onClick={goHome}>Back to Homepage</button>
    </div>
  );
}

export default Error;
