import React, { useState } from "react";
import "./Description.css";

const Description = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(""); // Clear error on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic front-end validation
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format validation
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Check for email ending with @ez.works
    if (email.toLowerCase().endsWith("@ez.works")) {
      setErrorMessage("Emails ending with @ez.works are not allowed.");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST", // Assuming POST for form submission
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Assuming email is the only data to send
      });

      if (response.ok) { // Handle 200 response (successful submission)
        setSuccessMessage("Form Submitted!");
        setEmail(""); // Clear input field after success
      } else {
        // Handle other potential errors (e.g., network issues, server errors)
        setErrorMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="DescriptionContainer">
      <div className="LogoContainer"></div>
      <div className="titleContainer">Suite Of Business Support Services</div>
      <div className="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed
      </div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          className="inputStyle"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleInputChange}
        />
        <button className="btnStyle" type="submit">
          Contact Me
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Description;
