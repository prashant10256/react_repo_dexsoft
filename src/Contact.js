import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section>
        <h1>Contact page</h1>
        <button onClick={goToHome}>Go to home page</button>
        <button onClick={() => goBack()}>Go back</button>
      </section>
    </>
  );
};

export default Contact;
