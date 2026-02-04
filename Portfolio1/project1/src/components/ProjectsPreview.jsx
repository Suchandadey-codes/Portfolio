import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectsPreview() {
  return (
    <section className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map(p => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="block rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          to="/projects"
          className="text-blue-700 underline hover:text-blue-900"
        >
        </Link>
      </div>
    </section>
  );
}
