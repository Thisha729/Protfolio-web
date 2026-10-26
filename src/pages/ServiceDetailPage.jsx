import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../config/services';
import { company } from '../config/company';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import {
  CheckCircle2, ArrowRight, ArrowLeft, 
  MessageSquare, Clock, ShieldCheck, DollarSign, Layers
} from 'lucide-react';

export default function ServiceDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredDeliverable, setHoveredDeliverable] = useState(null);

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

  const getWhatsAppUrl = () => {
    const text = `Hi SMART Pvt Ltd, I am interested in your ${service.title} service.`;
    return `https://wa.me/${company.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white dark:bg-[#06112B] min-h-screen pt-28 pb-20 space-y-16">
      <SEO title={service.title} description={service.shortDesc} />

      {/* ================================================================
          1. HERO
         ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A8A] dark:text-[#93C5FD] hover:text-[#1D4ED8] dark:hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all services
        </Link>

        {/* Hero card */}
        <div className="highlight-card relative overflow-hidden rounded-3xl border border-[#BFDBFE] dark:border-[#172554] bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE] dark:from-[#0D1F4A] dark:via-[#06112B] dark:to-[#0D1F4A] p-8 sm:p-12 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">

          {/* Animated blue glow blob */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#1D4ED8]/8 blur-3xl animate-float" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#60A5FA]/6 blur-2xl" />

          <div className="relative z-10 max-w-3xl space-y-5">

            {/* Category + badge tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="animate-slide-in-1 inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DBEAFE] dark:bg-[#1D4ED8]/20 text-[#1D4ED8] dark:text-[#93C5FD] border border-[#BFDBFE] dark:border-[#1D4ED8]/40">
                {service.category}
              </span>
              {service.badge && (
                <span className="animate-slide-in-2 inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DCFCE7] dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  {service.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1E3F] dark:text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            {/* Subtitle — blue highlight */}
            <p className="text-base sm:text-lg font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
              {service.subtitle}
            </p>

            {/* Overview */}
            <p className="text-sm sm:text-base text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed">
              {service.overview}
            </p>

            {/* Price + Timeline badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="highlight-card flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] shadow-sm hover:border-[#1D4ED8] dark:hover:border-[#60A5FA] transition-all duration-200">
                <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-[#2D4A8A] dark:text-[#93C5FD] block uppercase tracking-wider">Starting Investment</span>
                  <strong className="text-sm text-[#0A1E3F] dark:text-white">{service.startingPrice}</strong>
                </div>
              </div>
              <div className="highlight-card flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] shadow-sm hover:border-[#1D4ED8] dark:hover:border-[#60A5FA] transition-all duration-200">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[10px] text-[#2D4A8A] dark:text-[#93C5FD] block uppercase tracking-wider">Estimated Timeline</span>
                  <strong className="text-sm text-[#0A1E3F] dark:text-white">{service.timeline}</strong>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onOpenQuote(service.title)}
                className="btn-pink inline-flex items-center gap-2 px-6 py-3 text-sm"
              >
                Request Quotation & Scope <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                Quick Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. KEY FEATURES
         ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-3">
            Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] dark:text-white">
            Key Features &{' '}
            <span className="text-[#1D4ED8] dark:text-[#60A5FA]">Functional Capabilities</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2D4A8A] dark:text-[#93C5FD] mt-2 leading-relaxed">
            Every component is engineered for reliability, security, and measurable operational value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredFeature(idx)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="highlight-card pink-glow-hover group relative rounded-2xl p-5 bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] dark:hover:border-[#60A5FA] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* Blue left accent bar on hover */}
              <div className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-[#1D4ED8] dark:bg-[#60A5FA] transition-all duration-300 ${hoveredFeature === idx ? 'opacity-100' : 'opacity-0'}`} />

              <div className="flex items-start gap-3.5">
                <span className={`p-2 rounded-xl border shrink-0 transition-all duration-300 ${
                  hoveredFeature === idx
                    ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white'
                    : 'bg-[#EFF6FF] dark:bg-[#1D4ED8]/20 border-[#BFDBFE] dark:border-[#1D4ED8]/40 text-[#1D4ED8] dark:text-[#93C5FD]'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <div>
                  <h3 className={`text-sm font-extrabold transition-colors duration-300 ${
                    hoveredFeature === idx ? 'text-[#1D4ED8] dark:text-[#60A5FA]' : 'text-[#0A1E3F] dark:text-white'
                  }`}>{feat.name}</h3>
                  <p className="text-xs text-[#2D4A8A] dark:text-[#93C5FD] mt-1.5 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================
          3. DELIVERABLES + PRICING
         ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Deliverables */}
          <div className="lg:col-span-7 highlight-card rounded-3xl p-8 bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] shadow-sm hover:shadow-xl hover:shadow-blue-500/8 hover:border-[#1D4ED8]/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold text-[#0A1E3F] dark:text-white flex items-center gap-2 mb-6">
              <span className="p-2 rounded-xl bg-[#EFF6FF] dark:bg-[#1D4ED8]/20 text-[#1D4ED8] dark:text-[#60A5FA]">
                <Layers className="w-5 h-5" />
              </span>
              What You Receive
            </h3>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setHoveredDeliverable(idx)}
                  onMouseLeave={() => setHoveredDeliverable(null)}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 cursor-default ${
                    hoveredDeliverable === idx
                      ? 'bg-[#EFF6FF] dark:bg-[#1D4ED8]/15 border-[#1D4ED8]/40 dark:border-[#60A5FA]/30'
                      : 'bg-[#F8FAFF] dark:bg-[#06112B] border-[#DBEAFE] dark:border-[#172554]'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-200 ${
                    hoveredDeliverable === idx ? 'text-[#1D4ED8] dark:text-[#60A5FA]' : 'text-emerald-500'
                  }`} />
                  <span className="text-xs text-[#0A1E3F] dark:text-[#93C5FD] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="lg:col-span-5 highlight-card rounded-3xl p-8 bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] shadow-sm hover:shadow-xl hover:shadow-blue-500/8 hover:border-[#1D4ED8]/50 transition-all duration-300 space-y-5">
            <h3 className="text-xl font-extrabold text-[#0A1E3F] dark:text-white flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#EFF6FF] dark:bg-[#1D4ED8]/20 text-[#1D4ED8] dark:text-[#60A5FA]">
                <ShieldCheck className="w-5 h-5" />
              </span>
              Pricing & Scope Guidelines
            </h3>

            <div className="p-4 rounded-2xl bg-[#EFF6FF] dark:bg-[#172554]/40 border border-[#BFDBFE] dark:border-[#172554] space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#2D4A8A] dark:text-[#93C5FD]">Pricing Baseline:</span>
                <span className="text-base font-extrabold text-[#1D4ED8] dark:text-[#60A5FA]">{service.startingPrice}</span>
              </div>
              <p className="text-xs text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed">{service.priceNote}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-extrabold text-[#0A1E3F] dark:text-white uppercase tracking-wider">
                What Factors Affect Final Cost?
              </p>
              <ul className="space-y-2">
                {[
                  'Number of custom workflow roles & approval levels',
                  'Third-party API connectors and hardware integrations',
                  'Initial data migration volume (items, past ledgers)',
                  'On-site vs. remote training and dedicated SLA tier',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#2D4A8A] dark:text-[#93C5FD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] dark:bg-[#60A5FA] shrink-0 mt-1.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenQuote(service.title)}
              className="btn-pink w-full py-3 text-sm flex items-center justify-center gap-2"
            >
              Get Itemized Quotation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. FAQS
         ================================================================ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] dark:text-white">
              Frequently Asked <span className="text-[#1D4ED8] dark:text-[#60A5FA]">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#2D4A8A] dark:text-[#93C5FD] mt-1">
              Common questions regarding {service.title}
            </p>
          </div>
          <FAQAccordion items={service.faqs} />
        </section>
      )}

      {/* ================================================================
          5. RELATED SERVICES
         ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#BFDBFE] dark:border-[#172554]">
        <h3 className="text-lg font-extrabold text-[#0A1E3F] dark:text-white mb-6">
          Explore Related Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedServices.map((rel, idx) => (
            <Link
              key={rel.id}
              to={`/services/${rel.slug}`}
              className="highlight-card pink-glow-hover group p-5 rounded-2xl bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] dark:hover:border-[#60A5FA] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] dark:text-[#60A5FA]">
                {rel.category}
              </span>
              <h4 className="text-sm font-extrabold text-[#0A1E3F] dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors mt-1 leading-snug">
                {rel.title}
              </h4>
              <p className="text-xs text-[#2D4A8A] dark:text-[#93C5FD] mt-1.5 line-clamp-2 leading-relaxed">
                {rel.shortDesc}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#1D4ED8] dark:text-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
