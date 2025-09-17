import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    sessionStorage.setItem('contactSubmission', JSON.stringify(data));
    navigate('/'); // Redirect back to Home
  };

  return (
    <section style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          border: '1px solid #ccc',
          padding: '1.5rem',
          borderRadius: '8px',
          background: '#f9f9f9',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            name="firstName"
            placeholder="First Name"
            required
            style={{ flex: 1, padding: '0.5rem' }}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            required
            style={{ flex: 1, padding: '0.5rem' }}
          />
        </div>

        <input
          name="contactNumber"
          placeholder="Contact Number"
          style={{ padding: '0.5rem' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          style={{ padding: '0.5rem' }}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          style={{ padding: '0.5rem' }}
        />

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
          <button
            type="reset"
            style={{
              padding: '0.5rem 1rem',
              background: 'black',
              border: '1px solid #000000e7',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
