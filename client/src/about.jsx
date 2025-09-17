import React from 'react';

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="/profile-placeholder.png" alt="My headshot" width="150" />
      <p><strong>Legal Name:</strong> Anas Sattar</p>
      <p>
        I’m a web developer passionate about creating user-friendly, modern web applications.
        I enjoy working with React, Node.js, and cloud technologies.
      </p>
      <a href="./resume1.pdf" target="_blank" rel="noreferrer">
        Download Resume (PDF)
      </a>
    </section>
  );
}
    