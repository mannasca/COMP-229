import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Task Manager App',
    description: 'A React + Node.js app to manage tasks with authentication and CRUD operations.',
    role: 'Full Stack Developer',
    outcome: 'Built a secure task management tool with login/logout and real-time updates.',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React.',
    role: 'Frontend Developer',
    outcome: 'Designed a responsive, modern portfolio showcasing my work and skills.',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An app that shows live weather data using a public API and charts.',
    role: 'Frontend Developer',
    outcome: 'Integrated OpenWeather API and Chart.js for interactive visualizations.',
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <br/>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-2">{p.description}</p>
            <p className="text-gray-800">
              <span className="font-semibold">Role:</span> {p.role}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Outcome:</span> {p.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
