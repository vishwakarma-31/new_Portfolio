import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.name} className="border rounded-lg p-4 shadow">
            <img src={proj.image} alt={proj.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl mt-2 font-semibold">{proj.name}</h3>
            <p className="mt-1">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live</a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}