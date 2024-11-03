import { portfolioData } from '../constants';

const Portfolio = () => {
  return (
    <section className="c-space my-20" id="projects">
      <div className="w-full text-white-600">
        <p className="head-text">Portfolio</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {portfolioData.map((project) => (
            <div 
              key={project.id} 
              className="bg-black-200 rounded-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-white-800 mb-2">
                  {project.name}
                </h3>
                
                <p className="text-white-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 w-fit px-7 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
