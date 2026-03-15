"use client";

import { useEffect, useState } from "react";

export default function HeroGraphic() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'slideGrid 20s linear infinite'
        }} />
      </div>

      {/* Main Graphic Container */}
      <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

        {/* Central PCB Board Representation */}
        <svg width="600" height="400" viewBox="0 0 600 400" className="drop-shadow-2xl">
          {/* PCB Background */}
          <defs>
            {/* Gradient for PCB */}
            <linearGradient id="pcbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Scanning line gradient */}
            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>

          {/* PCB Board */}
          <rect x="50" y="50" width="500" height="300" rx="10" fill="url(#pcbGradient)" opacity="0.9"/>
          <rect x="50" y="50" width="500" height="300" rx="10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

          {/* Circuit Traces - Animated */}
          <g className="circuit-traces">
            {/* Horizontal traces */}
            <line x1="80" y1="100" x2="520" y2="100" stroke="#60a5fa" strokeWidth="3" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="80" y1="150" x2="520" y2="150" stroke="#60a5fa" strokeWidth="2" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
            </line>
            <line x1="80" y1="200" x2="520" y2="200" stroke="#60a5fa" strokeWidth="3" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite"/>
            </line>
            <line x1="80" y1="250" x2="520" y2="250" stroke="#60a5fa" strokeWidth="2" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite"/>
            </line>
            <line x1="80" y1="300" x2="520" y2="300" stroke="#60a5fa" strokeWidth="3" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite"/>
            </line>

            {/* Vertical traces */}
            <line x1="150" y1="80" x2="150" y2="320" stroke="#60a5fa" strokeWidth="2" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.7s" repeatCount="indefinite"/>
            </line>
            <line x1="250" y1="80" x2="250" y2="320" stroke="#60a5fa" strokeWidth="3" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.1s" repeatCount="indefinite"/>
            </line>
            <line x1="350" y1="80" x2="350" y2="320" stroke="#60a5fa" strokeWidth="2" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.9s" repeatCount="indefinite"/>
            </line>
            <line x1="450" y1="80" x2="450" y2="320" stroke="#60a5fa" strokeWidth="3" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
            </line>
          </g>

          {/* Components on PCB */}
          {/* IC Chips */}
          <g filter="url(#glow)">
            <rect x="120" y="120" width="60" height="60" rx="3" fill="#1e40af" stroke="#3b82f6" strokeWidth="2">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="220" y="180" width="80" height="50" rx="3" fill="#1e40af" stroke="#3b82f6" strokeWidth="2">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.3s" repeatCount="indefinite"/>
            </rect>
            <rect x="380" y="140" width="70" height="70" rx="3" fill="#1e40af" stroke="#3b82f6" strokeWidth="2">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.7s" repeatCount="indefinite"/>
            </rect>
          </g>

          {/* SMD Components */}
          <g>
            {[
              [100, 220], [180, 260], [280, 120], [320, 280],
              [400, 200], [460, 260], [140, 300], [480, 120]
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="20" height="12" rx="2" fill="#3b82f6" opacity="0.7">
                <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2 + i * 0.2}s`} repeatCount="indefinite"/>
              </rect>
            ))}
          </g>

          {/* Inspection Scan Line - Animated */}
          <rect x="50" y="50" width="500" height="8" fill="url(#scanGradient)">
            <animate attributeName="y" values="50;342;50" dur="4s" repeatCount="indefinite"/>
          </rect>

          {/* Measurement Points - Pulsing */}
          {[
            [150, 150], [250, 200], [350, 170], [420, 180]
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="6" fill="#10b981" opacity="0.8">
                <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`}/>
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`}/>
              </circle>
              <circle cx={cx} cy={cy} r="3" fill="#fff"/>
            </g>
          ))}

          {/* Crosshairs - Inspection Focus Points */}
          {[
            [150, 150], [250, 200], [350, 170], [420, 180]
          ].map(([cx, cy], i) => (
            <g key={`cross-${i}`} opacity="0.6">
              <line x1={cx - 15} y1={cy} x2={cx - 8} y2={cy} stroke="#10b981" strokeWidth="1.5"/>
              <line x1={cx + 15} y1={cy} x2={cx + 8} y2={cy} stroke="#10b981" strokeWidth="1.5"/>
              <line x1={cx} y1={cy - 15} x2={cx} y2={cy - 8} stroke="#10b981" strokeWidth="1.5"/>
              <line x1={cx} y1={cy + 15} x2={cx} y2={cy + 8} stroke="#10b981" strokeWidth="1.5"/>
            </g>
          ))}

          {/* Data Visualization - Right Side */}
          <g transform="translate(420, 240)">
            {/* Mini chart bars */}
            {[30, 45, 35, 50, 40].map((height, i) => (
              <rect
                key={i}
                x={i * 15}
                y={50 - height}
                width="10"
                height={height}
                fill="#10b981"
                opacity="0.7"
              >
                <animate
                  attributeName="height"
                  values={`${height};${height + 10};${height}`}
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.2}s`}
                />
                <animate
                  attributeName="y"
                  values={`${50 - height};${50 - height - 10};${50 - height}`}
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.2}s`}
                />
              </rect>
            ))}
          </g>

          {/* Status Indicators */}
          <g transform="translate(480, 80)">
            <circle cx="0" cy="0" r="8" fill="#10b981">
              <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="25" r="8" fill="#10b981">
              <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" begin="0.3s"/>
            </circle>
            <circle cx="0" cy="50" r="8" fill="#10b981">
              <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" begin="0.6s"/>
            </circle>
          </g>

          {/* Floating Data Points */}
          {[...Array(8)].map((_, i) => {
            const x = 100 + Math.random() * 400;
            const y = 80 + Math.random() * 240;
            return (
              <g key={`data-${i}`} opacity="0.4">
                <circle cx={x} cy={y} r="2" fill="#60a5fa">
                  <animate
                    attributeName="cy"
                    values={`${y};${y - 20};${y}`}
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Floating Feature Icons */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* 3D SPI Icon */}
          <div className="absolute top-[10%] left-[-5%] animate-float-slow">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-blue-200">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <div className="text-xs font-semibold text-blue-600 mt-1">3D SPI</div>
            </div>
          </div>

          {/* AOI Icon */}
          <div className="absolute top-[60%] left-[-8%] animate-float-medium">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-blue-200">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <div className="text-xs font-semibold text-blue-600 mt-1">AOI</div>
            </div>
          </div>

          {/* X-Ray Icon */}
          <div className="absolute top-[25%] right-[-5%] animate-float-fast">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-blue-200">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="text-xs font-semibold text-blue-600 mt-1">X-Ray</div>
            </div>
          </div>

          {/* Quality Check Icon */}
          <div className="absolute bottom-[15%] right-[-8%] animate-float-slow">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-green-200">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-xs font-semibold text-green-600 mt-1">Pass</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideGrid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(3deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
