import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.message}>Page Not Found</h2>
      <p style={styles.description}>
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
  },
  code: {
    fontSize: "120px",
    margin: 0,
  },
  message: {
    fontSize: "32px",
    margin: "10px 0",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "black",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default NotFound;