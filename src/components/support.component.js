import React, { useState } from 'react';

const SupportUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Send form data to server or perform other action
  };

  return (
    <div>
      <h1>Support Us</h1>
      <p>Please fill out the form below to support us:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SupportUsPage;
