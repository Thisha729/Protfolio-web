import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../config/projects';
import SEO from '../components/SEO';
import {
  ArrowLeft, CheckCircle2, Layers,
  Trophy, ArrowRight, ChevronRight
} from 'lucide-react';

export default function ProjectDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Related projects — same category, exclude current
  const related = projects
    .filter(p => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-[#060F22] min-h-screen">
      <SEO
        title={`${project.name} | SMART [PVT] LTD`}
        description={project.tagline}
      />

      {/* ── FULL-WIDTH COVER IMAGE HERO ─────────────────────────────────── */}
      <div className="relative w-full h-[55vh] min-h-[340px] max-h-[520px] overflow-hidden bg-[#0A1838]">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.name}
            loading="eager"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0047B3] to-[#0066FF]" />
        )}

        {/* Dark gradient overlay — strong at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Back link — top left */}
        <div className="absolute top-24 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
          </Link>
        </div>

        {/* Hero text — bottom left over image */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60 mb-3">
              <span>Portfolio</span>
              <ChevronRight className="w-3 h-3" />
              <span>{project.category}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/90">{project.name}</span>
            </div>

            {/* Category + Status tags */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#0066FF] text-white">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/20 text-white backdrop-blur-sm">
                {project.status}
              </span>
            </div>

            {/* Project title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl">
              {project.name}
            </h1>

            {/* Client type */}
            <p className="text-sm font-semibold text-blue-200 mt-2">
              {project.clientType}
            </p>
          </div>
        </div>
      </div>

      {/* ── TAGLINE BAR ─────────────────────────────────────────────────── */}
      <div className="border-b border-[#E2EAF4] dark:border-[#1C3454] bg-[#F7FAFE] dark:bg-[#06112B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-base sm:text-lg text-[#3E526C] dark:text-[#8DA4C4] leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* ── TECH STACK STRIP ────────────────────────────────────────────── */}
      <div className="border-b border-[#E2EAF4] dark:border-[#1C3454] bg-white dark:bg-[#060F22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6E88] dark:text-[#8DA4C4] mr-2">
            Tech Stack:
          </span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F0F6FF] dark:bg-[#0A1838] text-[#3E5C82] dark:text-[#8DA4C4] border border-[#D0E3F8] dark:border-[#1C3454]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left column — Challenge + Solution + Modules */}
          <div className="lg:col-span-2 space-y-8">

            {/* The Challenge */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-5 rounded-full bg-amber-400 inline-block" />
                <h2 className="text-lg font-extrabold text-[#0A1E3F] dark:text-white">
                  The Challenge
                </h2>
              </div>
              <p className="text-sm text-[#4A5E78] dark:text-[#8DA4C4] leading-relaxed border-l-2 border-[#E2EAF4] dark:border-[#1C3454] pl-4">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-5 rounded-full bg-[#0066FF] inline-block" />
                <h2 className="text-lg font-extrabold text-[#0A1E3F] dark:text-white">
                  Our Solution
                </h2>
              </div>
              <p className="text-sm text-[#4A5E78] dark:text-[#8DA4C4] leading-relaxed border-l-2 border-[#0066FF]/30 pl-4">
                {project.solution}
              </p>
            </div>

            {/* Modules / Features */}
            {project.modules && project.modules.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-[#0066FF] dark:text-[#5BA4FF]" />
                  <h2 className="text-lg font-extrabold text-[#0A1E3F] dark:text-white">
                    Modules & Features
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#F4F8FF] dark:bg-[#0A1838] border border-[#D8E8FA] dark:border-[#1C3454] text-xs font-semibold text-[#2A4268] dark:text-[#8DA4C4]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] dark:bg-[#5BA4FF] shrink-0" />
                      {mod}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column — Results + CTA */}
          <div className="space-y-6">

            {/* Results card — Codezela style: clean white card, green ticks */}
            <div className="rounded-2xl border border-[#E2EAF4] dark:border-[#1C3454] bg-white dark:bg-[#0D1F3C] overflow-hidden shadow-sm">
              <div className="px-5 py-4 bg-[#F4F8FF] dark:bg-[#06112B] border-b border-[#E2EAF4] dark:border-[#1C3454] flex items-center gap-2">
                <Trophy className="w-4 h-4 text-emerald-500" />
                <h3 className="text-sm font-extrabold text-[#0A1E3F] dark:text-white">
                  Measurable Results
                </h3>
              </div>
              <ul className="divide-y divide-[#EEF4FB] dark:divide-[#1C3454]">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3 px-5 py-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-[#2A4268] dark:text-[#8DA4C4] leading-relaxed">
                      {res}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0047B3] to-[#0066FF] p-6 text-white shadow-lg">
              <h3 className="text-base font-extrabold leading-snug">
                Want a similar solution for your business?
              </h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Let's discuss your requirements and build something that drives real results.
              </p>
              <button
                onClick={() => onOpenQuote(project.name)}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#0047B3] text-xs font-extrabold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Project info meta */}
            <div className="rounded-2xl border border-[#E2EAF4] dark:border-[#1C3454] bg-white dark:bg-[#0D1F3C] p-5 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#5B6E88] dark:text-[#8DA4C4]">
                Project Info
              </h3>
              {[
                { label: "Category",    value: project.category },
                { label: "Client",      value: project.clientType },
                { label: "Status",      value: project.status },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5B6E88] dark:text-[#8DA4C4]">{label}</span>
                  <span className="font-bold text-[#0A1E3F] dark:text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RELATED PROJECTS ──────────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#E2EAF4] dark:border-[#1C3454]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-extrabold text-[#0A1E3F] dark:text-white">
                Related Projects
              </h2>
              <Link
                to="/projects"
                className="text-xs font-bold text-[#0066FF] dark:text-[#5BA4FF] flex items-center gap-1 hover:underline"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/projects/${rel.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-[#E2EAF4] dark:border-[#1C3454] bg-white dark:bg-[#0D1F3C] shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-36 overflow-hidden">
                    {rel.coverImage && (
                      <img
                        src={rel.coverImage}
                        alt={rel.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#0066FF] text-white">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-[#0A1E3F] dark:text-white group-hover:text-[#0066FF] dark:group-hover:text-[#5BA4FF] transition-colors line-clamp-2">
                      {rel.name}
                    </h4>
                    <p className="text-[11px] text-[#5B6E88] dark:text-[#8DA4C4] mt-1">{rel.clientType}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
