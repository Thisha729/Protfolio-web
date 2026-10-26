import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  // Alternate: even index → text left + image right | odd → image left + text right
  const isEven = index % 2 === 0;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="highlight-card group block bg-white dark:bg-[#0D1F4A] border border-[#E8F0FD] dark:border-[#172554] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/12 hover:border-[#1D4ED8]/30 dark:hover:border-[#60A5FA]/30 transition-all duration-400"
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

        {/* ── TEXT SIDE ─────────────────────────────────────────── */}
        <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between min-h-[260px]">
          <div className="space-y-4">

            {/* Category pill */}
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] dark:bg-[#1D4ED8]/15 text-[#1D4ED8] dark:text-[#93C5FD] border border-[#BFDBFE] dark:border-[#1D4ED8]/30">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] dark:text-white leading-tight group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors duration-300">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed">
              {project.tagline}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F0F6FF] dark:bg-[#06112B] text-[#3E5C82] dark:text-[#93C5FD] border border-[#DBEAFE] dark:border-[#172554]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom: client type + arrow */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#EFF6FF] dark:border-[#172554]">
            <span className="text-xs font-semibold text-[#93B4D4] dark:text-[#3B5FAA] uppercase tracking-wider">
              {project.clientType}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1D4ED8] dark:text-[#60A5FA] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
              View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* ── LAPTOP MOCKUP SIDE ────────────────────────────────── */}
        <div className="flex-1 relative bg-[#F5F9FF] dark:bg-[#06112B] flex items-center justify-center p-6 sm:p-10 min-h-[260px] overflow-hidden">

          {/* Blue glow blob behind mockup */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-48 rounded-full bg-[#1D4ED8]/6 dark:bg-[#1D4ED8]/10 blur-3xl" />
          </div>

          {/* Laptop frame */}
          <div className="relative z-10 w-full max-w-[380px] group-hover:scale-[1.02] transition-transform duration-500">

            {/* Screen bezel */}
            <div
              className="relative rounded-t-xl overflow-hidden shadow-2xl shadow-blue-900/20"
              style={{
                border: '7px solid #1E293B',
                borderBottom: 'none',
                borderRadius: '10px 10px 0 0',
                aspectRatio: '16/10',
                background: '#1E293B',
              }}
            >
              {/* Top bar dots */}
              <div className="absolute top-1.5 left-3 flex gap-1.5 z-10">
                <span className="w-2 h-2 rounded-full bg-red-400/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <span className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>

              {/* Screenshot */}
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] flex items-center justify-center">
                  <span className="text-white/20 font-black text-3xl uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Blue shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/0 to-[#60A5FA]/0 group-hover:from-[#60A5FA]/5 group-hover:to-[#1D4ED8]/8 transition-all duration-500 pointer-events-none" />
            </div>

            {/* Laptop hinge + base */}
            <div className="h-2.5 bg-[#0F172A] rounded-b-sm mx-0.5 shadow-md" />
            <div className="h-1.5 bg-[#0F172A] rounded-b-xl mx-5 shadow-xl" style={{ background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' }} />

            {/* Base reflection line */}
            <div className="h-px mx-8 bg-gradient-to-r from-transparent via-[#60A5FA]/20 to-transparent mt-0.5" />
          </div>
        </div>

      </div>
    </Link>
  );
}
