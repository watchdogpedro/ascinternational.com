"use client";

import { useEffect, useState } from "react";

interface VideoHeroProps {
  videoSrc?: string;
  posterImage?: string;
}

export default function VideoHero({
  videoSrc = "/videos/hero-inspection.mp4",
  posterImage = "/images/hero-poster.jpg"
}: VideoHeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload video
    const video = document.createElement('video');
    video.src = videoSrc;
    video.onloadeddata = () => setVideoLoaded(true);
  }, [videoSrc]);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />

        {/* Video element - hidden until real video is available */}
        {/* Uncomment when you have real footage:
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          className="w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        */}

        {/* Placeholder: Subtle animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'slideGrid 30s linear infinite'
            }}
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/80 to-blue-900/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-sm font-semibold text-blue-100">
                Industry Leading Solutions Since 1992
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ASC International
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-blue-100 font-medium">
              Quality Inspection & Measurement Systems for Electronics Manufacturing
            </p>

            <p className="text-lg mb-8 text-blue-50">
              Your partner for quality and yield improvement with cutting-edge inspection technology
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">3D SPI & AOI Systems</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">X-Ray Inspection</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">Expert Technical Support</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">34+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                View Products
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="bg-blue-700/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all border border-blue-400/30 hover:border-blue-300 hover:shadow-xl inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column - Feature Highlights / Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl font-bold text-white mb-2">34+</div>
                <div className="text-blue-100 font-medium">Years of Excellence</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl font-bold text-white mb-2">1000+</div>
                <div className="text-blue-100 font-medium">Global Customers</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-2xl font-bold text-white">ISO</span>
                </div>
                <div className="text-blue-100 font-medium">Certified Quality</div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <div className="text-blue-100 font-medium">Expert Support</div>
              </div>
            </div>

            {/* Additional visual element */}
            <div className="mt-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Live Production Support</div>
                  <div className="text-blue-100 text-sm">Real-time assistance for your manufacturing line</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideGrid {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(60px) translateX(60px);
          }
        }
      `}</style>
    </section>
  );
}
