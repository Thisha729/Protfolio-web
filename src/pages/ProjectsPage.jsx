import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../config/projects';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p =>
        p.category === selectedCategory ||
        (selectedCategory === 'ERP & POS' &&
          (p.category === 'ERP' || p.category === 'POS' || p.category === 'ERP & POS'))
      );

  return (
    <div className="bg-white dark:bg-[#06112B] min-h-screen">
      <SEO
        title="Projects & Case Studies | SMART [PVT] LTD"
        description="Explore our delivered case studies across ERP & POS, portfolio websites, mobile apps, business automation engines, and AI document processors."
      />

      {/* ── PORTFOLIO HERO — pink/dark grey + staggered pill tags ──────── */}
      <section className="relative overflow-hidden pt-32 pb-16 bg-white dark:bg-[#06112B] border-b border-[#BFDBFE] dark:border-[#172554]">

        {/* Soft pink radial glow — right side */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-50 dark:opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.13) 0%, rgba(232,121,249,0.06) 50%, transparent 75%)' }}
        />
        <div
          className="pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-40 dark:opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.20) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Bold headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#0A1E3F] dark:text-white leading-[1.08] tracking-tight">
                Our expertise drives projects towards{' '}
                <span className="text-[#1D4ED8] dark:text-[#60A5FA]">success and builds conversions</span>
              </h1>
            </div>

            {/* RIGHT — Staggered floating pill tags with animation */}
            <div className="relative flex flex-col gap-4 items-start lg:pl-8">
              {[
                { text: "Delivering impactful digital solutions",    cls: "animate-slide-in-1 lg:ml-6"  },
                { text: "Innovating across diverse industries",       cls: "animate-slide-in-2 lg:ml-20" },
                { text: "Empowering businesses with technology",      cls: "animate-slide-in-3 lg:ml-8"  },
                { text: "Building software that drives real growth",  cls: "animate-slide-in-4 lg:ml-16" },
              ].map((pill, i) => (
                <div
                  key={i}
                  className={`${pill.cls} inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1D4ED8] dark:bg-[#1E3A8A] text-white text-sm font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {pill.text}
                </div>
              ))}
            </div>
          </div>

          {/* Stat bar */}
          <div className="mt-14 pt-8 border-t border-[#BFDBFE] dark:border-[#172554] flex flex-wrap gap-10">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "6+",  label: "Years of Experience" },
              { value: "8",   label: "Industries Served" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-[#1D4ED8] dark:text-[#60A5FA] leading-none">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-[#2D4A8A] dark:text-[#93C5FD] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER TABS ─────────────────────────────────────────── */}
      <section className="sticky top-[56px] z-30 bg-white/95 dark:bg-[#06112B]/95 backdrop-blur-md border-b border-[#BFDBFE] dark:border-[#172554]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-600/30'
                    : 'text-[#2D4A8A] dark:text-[#93C5FD] hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] hover:bg-[#EFF6FF] dark:hover:bg-[#0D1F4A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#2D4A8A] dark:text-[#93C5FD] text-sm">No projects in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="relative z-10 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Have a project in mind?
            </h3>
            <p className="text-sm text-blue-100 mt-2 max-w-md">
              Let's build something that drives real results. We'll analyze your requirements and prepare a clear milestone-based plan.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1E3A8A] text-sm font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
