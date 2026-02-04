// src/components/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();                     // 1) grab “id” from URL
  const project = projects.find(p => p.id === id); // 2) find matching data

  if (!project) {
    return (
      <main className="p-8 text-center">
        <p className="text-red-600">Project not found.</p>
        <Link to="/projects" className="underline">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <Link to="/projects" className="underline text-blue-600">&larr; Back to all projects</Link>

      <h1 className="text-4xl font-bold">{project.title}</h1>

      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-64 object-cover rounded"
      />

      <p className="text-gray-700">{project.description}</p>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside">
          {project.tech.map((t,i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          View Source on GitHub
        </a>
      )}
    </main>
  );
}
