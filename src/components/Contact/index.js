import React, { useState } from "react";

function ContactForm() {
  // Hook that manages form data
  //   initialize values of state, clear input fields on loading component
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // destructure formState obj into its properties
  const { name, email, message } = formState;

  //   sync internal state of component formState with user input from DOM
  // onChange event listener ensures this fires everytime keystroke typed into name field
  function handleChange(e) {
    //   async setFormState updates formState value for name
    //   assign input field value to formState.name
    // spread operator ...formState retains other key-value pairs in obj
    // e.target.name is name attribute of form element, matches prop names of formState(name, email, message)
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
  }

  // JSX DOM elements
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">message address:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
