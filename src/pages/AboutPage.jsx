import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '../config/company';
import SEO from '../components/SEO';
import ProcessTimeline from '../components/ProcessTimeline';
import {
  Shield, CheckCircle2, Award, Target,
  Lightbulb, Users, ArrowRight, HeartHandshake,
  Cpu, Layers, Sparkles
} from 'lucide-react';

export default function AboutPage({ onOpenQuote, onOpenClientRequest }) {
  return (
    <div className="bg-white dark:bg-[#06112B] relative overflow-hidden pt-28 pb-20 space-y-0">
      <SEO
        title="About Us | SMART [PVT] LTD"
        description="Learn about SMART Pvt Ltd - our philosophy, technology engineering, and comprehensive business solutions in Sri Lanka."
      />

      {/* ================================================================
          1. HERO — Logo inside pink box + floating circles + light pink bg
         ================================================================ */}
      <section className="relative overflow-hidden pb-20 pt-4 bg-[#EFF6FF] dark:bg-[#0D1F4A]">

        {/* Full light pink background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(240,171,252,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_70%_50%,rgba(192,38,211,0.10),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-6">
            Corporate Profile
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT — Bold headline */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-extrabold text-[#0A1E3F] dark:text-white leading-[1.08] tracking-tight">
                Our values are what ensure project{' '}
                <span className="text-[#1D4ED8] dark:text-[#60A5FA]">success and client satisfaction</span>
              </h1>
              <p className="mt-5 text-sm sm:text-base text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed max-w-lg">
                {company.mission}
              </p>
              <button
                onClick={onOpenClientRequest}
                className="btn-pink mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm"
              >
                Schedule a Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT — Pink box with SMART logo + floating circle badges */}
            <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[320px] sm:min-h-[380px]">

              {/* Pink rounded rectangle box — logo inside */}
              <div className="relative w-full max-w-[380px] mx-auto aspect-[4/3] rounded-3xl bg-[#DBEAFE] dark:bg-[#0A1E3F] border border-[#93C5FD] dark:border-[#1E3A8A] shadow-xl shadow-blue-200/40 dark:shadow-blue-900/30 flex items-center justify-center overflow-hidden">

                {/* Soft inner glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,171,252,0.4),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(192,38,211,0.15),transparent_70%)]" />

                {/* SMART Logo */}
                <img
                  src="/logos/SMART_LOGO_LM.png"
                  alt="SMART [PVT] LTD"
                  className="relative z-10 w-3/4 max-w-[260px] h-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Floating circle badge — top left (Development) */}
              <div className="animate-slide-in-1 absolute -left-2 sm:-left-6 top-[10%] flex flex-col items-center gap-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1D4ED8] dark:bg-[#1E3A8A] shadow-xl shadow-blue-600/40 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <svg className="w-4 h-4 text-white mb-0.5" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white leading-none">Development</span>
                </div>
              </div>

              {/* Floating circle badge — bottom left (Design) */}
              <div className="animate-slide-in-2 absolute -left-2 sm:-left-4 bottom-[10%] flex flex-col items-center gap-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1E40AF] dark:bg-[#172554] shadow-xl shadow-blue-600/40 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <svg className="w-4 h-4 text-white mb-0.5" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white leading-none">Design</span>
                </div>
              </div>

              {/* Floating circle badge — bottom right (Deployment) */}
              <div className="animate-slide-in-3 absolute -right-2 sm:-right-4 bottom-[8%] flex flex-col items-center gap-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1D4ED8] dark:bg-[#1E3A8A] shadow-xl shadow-blue-600/40 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <svg className="w-4 h-4 text-white mb-0.5" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white leading-none">Deployment</span>
                </div>
              </div>

              {/* Floating circle badge — top right (Strategy) */}
              <div className="animate-slide-in-4 absolute -right-2 sm:-right-4 top-[10%] flex flex-col items-center gap-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1E40AF] dark:bg-[#172554] shadow-xl shadow-blue-600/40 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <svg className="w-4 h-4 text-white mb-0.5" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white leading-none">Strategy</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. 4 VALUE PILLARS — pink highlight cards
         ================================================================ */}
      <section className="bg-[#EFF6FF] dark:bg-[#06112B] py-16 border-y border-[#BFDBFE] dark:border-[#172554]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users,  value: 'Client-first',    label: 'Every solution starts with listening' },
              { icon: Shield, value: 'Secure by design', label: 'Practical systems built to protect data' },
              { icon: Layers, value: 'One team',         label: 'Technology, finance and operations together' },
              { icon: Award,  value: 'Long-term',        label: 'Support beyond the launch date' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={value} className="highlight-card pink-glow-hover group rounded-2xl p-5 bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] text-center hover:border-[#1D4ED8] dark:hover:border-[#1D4ED8] transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] dark:bg-[#0A1E3F] text-[#1D4ED8] dark:text-[#60A5FA] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-extrabold text-[#0A1E3F] dark:text-white">{value}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#2D4A8A] dark:text-[#93C5FD]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. WHO WE ARE + SMART COMMITMENT
         ================================================================ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — story */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] dark:text-white">
                Who We Are & <span className="text-[#1D4ED8] dark:text-[#60A5FA]">What Drives Us</span>
              </h2>
              <p className="text-sm text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed">
                SMART Pvt Ltd was established with a clear mission: to bridge the gap between technical software development and actual business management. Many companies receive software that looks flashy but fails to adapt to their real-world billing, inventory bottlenecks, or accounting compliance needs.
              </p>
              <p className="text-sm text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed">
                We design and implement custom systems, cloud ERPs, and automation pipelines that are inherently practical, secure, and built to scale alongside your organization's growth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="highlight-card p-4 rounded-2xl bg-[#EFF6FF] dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] transition-all duration-300">
                  <Target className="w-5 h-5 text-[#1D4ED8] dark:text-[#60A5FA] mb-2" />
                  <h4 className="text-sm font-bold text-[#0A1E3F] dark:text-white">Our Vision</h4>
                  <p className="text-xs text-[#2D4A8A] dark:text-[#93C5FD] mt-1 leading-relaxed">
                    To be the most trusted technology and business automation partner for enterprises and entrepreneurs.
                  </p>
                </div>
                <div className="highlight-card p-4 rounded-2xl bg-[#EFF6FF] dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] transition-all duration-300">
                  <Lightbulb className="w-5 h-5 text-[#1D4ED8] dark:text-[#60A5FA] mb-2" />
                  <h4 className="text-sm font-bold text-[#0A1E3F] dark:text-white">Our Approach</h4>
                  <p className="text-xs text-[#2D4A8A] dark:text-[#93C5FD] mt-1 leading-relaxed">
                    Understand first, blueprint carefully, code cleanly, deploy securely, and support long-term.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — SMART Commitment card */}
            <div className="highlight-card rounded-3xl p-8 bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] shadow-xl hover:shadow-blue-600/15 hover:border-[#1D4ED8] dark:hover:border-[#1D4ED8] transition-all duration-300">
              <h3 className="text-xl font-extrabold text-[#0A1E3F] dark:text-white mb-6">
                The <span className="text-[#1D4ED8] dark:text-[#60A5FA]">SMART</span> Commitment
              </h3>
              <ul className="space-y-5">
                {[
                  { title: "No Invented Claims",         desc: "We pride ourselves on transparent scopes, verified case studies, and honest pricing." },
                  { title: "Enterprise Grade Reliability", desc: "Built with modern frameworks (React, PostgreSQL, Spring Boot, Firebase) and zero bloat." },
                  { title: "Unified Service Suite",       desc: "From domain setup and mobile apps to IRD tax schedules and independent audits under one roof." },
                  { title: "Complete Data Privacy",       desc: "Your proprietary customer data and financial records are never shared or compromised." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <span className="p-1.5 rounded-lg bg-[#EFF6FF] dark:bg-[#0A1E3F] text-[#1D4ED8] dark:text-[#60A5FA] shrink-0 mt-0.5 group-hover/item:bg-[#1D4ED8] group-hover/item:text-white transition-all duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <strong className="text-sm text-[#0A1E3F] dark:text-white block">{item.title}</strong>
                      <span className="text-xs text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-5 border-t border-[#BFDBFE] dark:border-[#172554] flex items-center justify-between">
                <span className="text-xs text-[#2D4A8A] dark:text-[#93C5FD]">Want to discuss your requirements?</span>
                <button
                  onClick={onOpenClientRequest}
                  className="btn-pink px-4 py-2 text-xs"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          4. 3 CORE VALUE CARDS — pink highlight animation
         ================================================================ */}
      <section className="py-6 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: HeartHandshake, title: 'Built around people',     text: 'We make technology approachable for owners, managers and frontline teams—not just technical teams.' },
              { icon: Cpu,            title: 'Practical engineering',    text: 'Every workflow is designed around the day-to-day work that keeps a business moving.' },
              { icon: Sparkles,       title: 'Clear partnership',        text: 'Honest communication, transparent scopes and support that stays with you as your business grows.' },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="highlight-card pink-glow-hover group rounded-3xl p-7 bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] dark:hover:border-[#1D4ED8] hover:shadow-xl hover:shadow-blue-600/12 transition-all duration-300"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[#EFF6FF] dark:bg-[#0A1E3F] p-3 text-[#1D4ED8] dark:text-[#60A5FA] group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0A1E3F] dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors duration-300">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2D4A8A] dark:text-[#93C5FD]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. 9-STEP DELIVERY PROCESS
         ================================================================ */}
      <section className="bg-[#EFF6FF] dark:bg-[#0D1F4A] py-16 border-y border-[#BFDBFE] dark:border-[#172554]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] dark:text-white">
              Our 9-Step <span className="text-[#1D4ED8] dark:text-[#60A5FA]">Delivery Standard</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#2D4A8A] dark:text-[#93C5FD] mt-3 leading-relaxed">
              How we take your idea from initial requirement discovery to production deployment and ongoing support.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* ================================================================
          6. BOTTOM CTA
         ================================================================ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E40AF] p-12 sm:p-16 text-center">
            <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5" />
            <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-blue-200 mb-3">
              Let's build something remarkable
            </p>
            <h2 className="relative text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to make your business smarter?
            </h2>
            <p className="relative text-sm text-blue-100 mt-3 max-w-lg mx-auto">
              From software to accounting — we handle everything so you can focus on growing your business.
            </p>
            <button
              onClick={onOpenQuote}
              className="relative mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1E3A8A] font-extrabold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
