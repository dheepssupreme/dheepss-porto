import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

const CardProject = ({ id, Img, Title, Description, TechStack = [] }) => {
  return (
    <div className="group relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-1 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-[#030014]/50 backdrop-blur-xl rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={Img}
            alt={Title}
            className="w-full h-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors">
            {Title}
          </h3>
          
          <p className="text-sm md:text-base text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {Description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {TechStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs md:text-sm bg-white/5 text-blue-400 rounded-full border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-2">
            <Link
              to={`/project/${id}`}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;