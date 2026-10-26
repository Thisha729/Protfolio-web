import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../config/services';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { ArrowRight } from 'lucide-react';

// Codezela-style workflow steps
const workflowSteps = [
  {
    title: 'Discovery Meeting',
    desc: 'Begin with a collaborative session where we dive deep into your vision, goals, and challenges.',
  },
  {
    title: 'Strategize for Success',
    desc: 'Craft a tailored strategy that aligns with your objectives. We analyze requirements, competitors, and timelines.',
  },
  {
    title: 'Design & Blueprint',
    desc: 'Our team designs wireframes, system architecture, and UI prototypes before writing a single line of code.',
  },
  {
    title: 'Build & Develop',
    desc: 'Agile sprints with regular updates. Clean, scalable code with full documentation and version control.',
  },
  {
    title: 'Refining Perfection',
    desc: 'Embrace a collaborative review process. Regular checkpoints allow for feedback incorporation and quality assurance.',
  },
  {
    title: 'Deploy & Handover',
    desc: 'Production deployment to your live environment with full documentation, training, and onboarding support.',
  },
  {
    title: 'Ongoing Support',
    desc: 'Post-launch maintenance, SLA agreements, security patches, and continuous enhancement plans.',
  },
];

export default function ServicesPage({ onOpenQuote, onOpenClientRequest }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeStep, setActiveStep] = useState(0);

  const categories = [
    'All',
    'Software & Cloud',
    'Web & Mobile',
    'Automation & AI',
    'Finance & Compliance',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-[#06112B] min-h-screen">
      <SEO
        title="Services & Solutions | SMART [PVT] LTD"
        description="Explore SMART Pvt Ltd's full suite: ERP & POS, custom software, websites, mobile apps, automation, AI, accounting, tax, and audit."
      />

      {/* ================================================================
          1. HERO — Codezela style: bold left headline + right workflow timeline
         ================================================================ */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-white dark:bg-[#06112B] border-b border-[#BFDBFE] dark:border-[#172554]">

        {/* Pink glow left */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-30 dark:opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(192,38,211,0.18) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT — Bold sticky headline */}
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-5">
                Our Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#0A1E3F] dark:text-white leading-[1.06] tracking-tight">
                We offer premium services with a professional workflow, to achieve{' '}
                <span className="text-[#1D4ED8] dark:text-[#60A5FA]">successful outcomes</span>
              </h1>
              <p className="mt-5 text-sm text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed max-w-md">
                From quick-start portfolio websites to full-scale enterprise ERPs and tax compliance schedules — end-to-end solutions under one roof.
              </p>
              <button
                onClick={() => onOpenQuote()}
                className="btn-pink mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT — Vertical timeline workflow */}
            <div className="relative">

              {/* Vertical line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[#BFDBFE] dark:bg-[#172554]" />

              {/* Pink animated dot that moves */}
              <div
                className="absolute left-[14px] w-4 h-4 rounded-full bg-[#1D4ED8] shadow-lg shadow-blue-600/40 transition-all duration-500 ease-out"
                style={{ top: `${activeStep * (100 / workflowSteps.length)}%` }}
              />

              <div className="space-y-0">
                {workflowSteps.map((step, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveStep(i)}
                    className={`relative pl-14 pr-4 py-6 cursor-pointer transition-all duration-300 border-b last:border-b-0 ${
                      activeStep === i
                        ? 'border-[#BFDBFE] dark:border-[#172554]'
                        : 'border-[#DBEAFE] dark:border-[#0A1E3F]'
                    }`}
                  >
                    {/* Step dot */}
                    <div className={`absolute left-[16px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      activeStep === i
                        ? 'bg-[#1D4ED8] border-[#1D4ED8] scale-125 shadow-md shadow-blue-600/40'
                        : 'bg-white dark:bg-[#06112B] border-[#60A5FA] dark:border-[#1E3A8A]'
                    }`} />

                    <div className="grid grid-cols-2 gap-6">
                      {/* Title */}
                      <h3 className={`text-base font-extrabold leading-snug transition-colors duration-300 ${
                        activeStep === i
                          ? 'text-[#1D4ED8] dark:text-[#60A5FA]'
                          : 'text-[#0A1E3F] dark:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      {/* Description */}
                      <p className={`text-xs leading-relaxed transition-all duration-300 ${
                        activeStep === i
                          ? 'text-[#2D4A8A] dark:text-[#93C5FD]'
                          : 'text-[#3B5FAA] dark:text-[#5A4A6A]'
                      }`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. SERVICES GRID
         ================================================================ */}
      <section className="bg-[#EFF6FF] dark:bg-[#0D1F4A] py-16 border-b border-[#BFDBFE] dark:border-[#172554]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-3">
              Complete Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] dark:text-white">
              Intelligent Technology &{' '}
              <span className="text-[#1D4ED8] dark:text-[#60A5FA]">Business Services.</span>
            </h2>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-400/30'
                    : 'bg-white dark:bg-[#0A1E3F] text-[#2D4A8A] dark:text-[#93C5FD] border border-[#BFDBFE] dark:border-[#1E3A8A] hover:border-[#1D4ED8] hover:text-[#1D4ED8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                className="highlight-card pink-glow-hover group bg-white dark:bg-[#06112B] border border-[#BFDBFE] dark:border-[#172554] rounded-2xl overflow-hidden hover:border-[#1D4ED8] dark:hover:border-[#1D4ED8] hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <ServiceCard service={service} onOpenQuote={onOpenQuote} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. CUSTOM REQUIREMENT BANNER
         ================================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="relative z-10 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
              Need a Custom Solution?
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Don't see your exact requirement listed?
            </h3>
            <p className="text-sm text-blue-100 mt-2 max-w-xl">
              We specialize in tailor-made software architecture, custom database designs, and bespoke business automations.
            </p>
          </div>
          <button
            onClick={() => onOpenClientRequest()}
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1E3A8A] text-sm font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Discuss Custom Scope <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
