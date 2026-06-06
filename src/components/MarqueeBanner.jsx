import { memo } from 'react';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Framer Motion',
  'REST API'
];

const MarqueeBanner = memo(function MarqueeBanner() {
  return (
    <div className="relative z-20 cursor-default select-none overflow-hidden">
      <div className="bg-neutral-950 border-y border-neutral-900">
        {/* ── Row 1: Solid White Text, scrolling left ── */}
        <div className="py-4 md:py-5 overflow-hidden relative group border-b border-neutral-900">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-14 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-left 30s linear infinite' }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-14 text-sm md:text-xl font-bold uppercase items-center tracking-widest text-white/90">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-14">
                    <span className="hover:text-[#A3FF3F] transition-colors duration-300">
                      {skill}
                    </span>
                    <span className="text-[#A3FF3F]/40 text-xs">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Row 2: Green background, scrolling right ── */}
        <div className="py-3 md:py-4 bg-[#A3FF3F] overflow-hidden relative group">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-12 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-right 35s linear infinite' }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-12 text-xs md:text-lg font-bold uppercase items-center tracking-widest text-neutral-950">
                {skills.reverse().map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-12">
                    <span className="hover:text-white transition-colors duration-300">{skill}</span>
                    <span className="text-neutral-950/30 text-xs">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#A3FF3F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#A3FF3F] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
});

export default MarqueeBanner;
