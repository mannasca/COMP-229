import React from 'react';

const services = [
  { id: 1, title: 'Web Development', desc: 'Responsive websites using React and modern frameworks.', img: '/images/img1.png'},
  { id: 2, title: 'API Integration', desc: 'Connecting applications with REST and GraphQL APIs.', img: '/images/img2.png'},
  { id: 3, title: 'Performance Optimization', desc: 'Improving speed, accessibility, and SEO.', img: '/images/img3.png'},
];

export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <img src={s.img} alt={s.title} style={{ width: '250px', height: '250px' }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
