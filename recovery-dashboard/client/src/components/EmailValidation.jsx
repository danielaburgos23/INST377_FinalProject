import { useState } from "react";

function EmailValidation() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleValidate(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/validate-email?email=${email}`
      );

      const data = await response.json();

      if (data.valid) {
        setMessage("Email is valid and ready for weekly summaries.");
      } else {
        setMessage("Email is invalid. Please check the format and try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Could not validate email yet. Backend may not be running.");
    }
  }

  return (
    <section className="card email-card">
      <h2>Weekly Summary Email</h2>
      <p className="muted">
        Add an email to support future recovery reminders and weekly summaries.
      </p>

      <form onSubmit={handleValidate}>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@umd.edu"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Validate Email</button>
      </form>

      {message && <p className="feedback">{message}</p>}
    </section>
  );
}

export default EmailValidation;