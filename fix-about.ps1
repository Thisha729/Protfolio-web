$file = "C:\Users\thishalini\OneDrive\Desktop\Office (work)\SMART-PVT-LTD - Copy\src\pages\HomePage.jsx"
$content = [System.IO.File]::ReadAllText($file)

# Find start and end markers
$startMarker = "      {/* =========================================================================" + "`r`n" + "          3. ABOUT SMART PVT LTD"
$endMarker = "      {/* =========================================================================" + "`r`n" + "          4. OUR PRODUCT"

$startIdx = $content.IndexOf("3. ABOUT SMART PVT LTD")
$endIdx = $content.IndexOf("4. OUR PRODUCT")

Write-Output "Start at char: $startIdx"
Write-Output "End at char: $endIdx"

# Extract the section to remove (go back to find the comment start)
$sectionStart = $content.LastIndexOf("{/*", $startIdx)
$sectionEnd = $content.LastIndexOf("{/*", $endIdx)

Write-Output "Section start: $sectionStart"
Write-Output "Section end: $sectionEnd"

$before = $content.Substring(0, $sectionStart)
$after = $content.Substring($sectionEnd)

$newSection = @'
      {/* =========================================================================
          3. ABOUT SMART PVT LTD — image hero + floating stats + animated cards
         ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#EFF6FF] dark:bg-[#06112B] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA] mb-3">
            About SMART PVT LTD
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT - headline + animated checklist + CTA */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-[#0A1E3F] dark:text-white leading-[1.08] tracking-tight">
                Your Trusted Partner for <br />
                Technology &{' '}
                <span className="text-[#1D4ED8] dark:text-[#60A5FA]">Business Growth</span>
              </h2>
              <p className="text-sm text-[#2D4A8A] dark:text-[#93C5FD] leading-relaxed max-w-lg">
                We combine technology, financial expertise and industry knowledge to deliver reliable, innovative and scalable solutions for businesses of all sizes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Experienced & professional team",
                  "Modern technology & secure systems",
                  "Trusted across multiple industries",
                  "End-to-end business solutions",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="highlight-card group flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] dark:hover:border-[#60A5FA] hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#EFF6FF] dark:bg-[#1D4ED8]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1D4ED8] transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] dark:text-[#60A5FA] group-hover:text-white transition-colors duration-300" />
                    </span>
                    <span className="text-xs font-semibold text-[#0A1E3F] dark:text-white group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-pink inline-flex items-center gap-2 px-6 py-3 text-sm">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RIGHT - image + floating stat cards + mini cards */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/15 border border-[#BFDBFE] dark:border-[#172554] group">
                <img
                  src="/images/team_collaboration.webp"
                  alt="SMART Team collaboration"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06112B]/80 via-[#06112B]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0D1F4A]/95 backdrop-blur-md shadow-xl border border-[#BFDBFE] dark:border-[#172554] text-center">
                  <p className="text-xs font-bold text-[#0A1E3F] dark:text-white italic">
                    "People + Technology = A Smarter Tomorrow"
                  </p>
                  <span className="text-[11px] font-bold text-[#1D4ED8] dark:text-[#60A5FA] mt-0.5 block">— SMART Pvt Ltd</span>
                </div>
              </div>
              <div className="animate-slide-in-1 absolute -top-5 -right-3 sm:-right-6 bg-white dark:bg-[#0D1F4A] rounded-2xl p-4 shadow-xl border border-[#BFDBFE] dark:border-[#172554] min-w-[120px] hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300">
                <p className="text-2xl font-extrabold text-[#1D4ED8] dark:text-[#60A5FA] leading-none">50+</p>
                <p className="text-[10px] font-semibold text-[#2D4A8A] dark:text-[#93C5FD] mt-1">Projects Delivered</p>
                <div className="mt-2 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1 flex-1 rounded-full bg-[#1D4ED8]" style={{ opacity: 0.15 + i * 0.18 }} />
                  ))}
                </div>
              </div>
              <div className="animate-slide-in-2 absolute -bottom-5 -left-3 sm:-left-6 bg-white dark:bg-[#0D1F4A] rounded-2xl p-4 shadow-xl border border-[#BFDBFE] dark:border-[#172554] min-w-[120px] hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300">
                <p className="text-2xl font-extrabold text-[#1D4ED8] dark:text-[#60A5FA] leading-none">3</p>
                <p className="text-[10px] font-semibold text-[#2D4A8A] dark:text-[#93C5FD] mt-1">Branch Locations</p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                  <span className="text-[9px] text-[#1D4ED8] dark:text-[#60A5FA] font-semibold">Sri Lanka</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-8">
                {[
                  { icon: Users, label: 'Mission', text: 'Empower businesses for a smarter future.' },
                  { icon: Globe, label: 'Vision',  text: 'Most trusted solutions provider.' },
                  { icon: Award, label: 'Values',  text: 'Integrity, Innovation, Success.' },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="highlight-card group p-3 rounded-xl bg-white dark:bg-[#0D1F4A] border border-[#BFDBFE] dark:border-[#172554] hover:border-[#1D4ED8] dark:hover:border-[#60A5FA] hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 text-center">
                    <div className="mx-auto mb-1.5 w-7 h-7 rounded-lg bg-[#EFF6FF] dark:bg-[#1D4ED8]/15 flex items-center justify-center text-[#1D4ED8] dark:text-[#60A5FA] group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-[10px] font-extrabold text-[#0A1E3F] dark:text-white uppercase tracking-wider group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors">{label}</p>
                    <p className="text-[9px] text-[#2D4A8A] dark:text-[#93C5FD] mt-0.5 leading-snug line-clamp-2">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

'@

$newContent = $before + $newSection + $after
[System.IO.File]::WriteAllText($file, $newContent)
Write-Output "Done"
