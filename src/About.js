import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section>
        <h1>About page</h1>
        <button
          onClick={() => {
            goToContact();
          }}
        >
          Go to contact page
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </button>
      </section>
    </>
  );
};

export default About;
