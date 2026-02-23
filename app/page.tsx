"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isLoaded) return null;

  const menuItems = [
    { label: "VIBE", id: "hero-video" },
    { label: "RITUAL", id: "ritual" },
    { label: "ART", id: "art" },
    { label: "GALLERY", id: "gallery" },
    { label: "FLAVOR", id: "shop" },
    { label: "POP?", id: "cta" },
  ];

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-white pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-between items-center bg-background border-b-[6px] border-foreground">
        <div className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/breon/breonpop-logo.png" alt="Breonpop Logo" className="h-6 md:h-10 object-contain animate-wiggle cursor-pointer" />
        </div>

        {/* Pop-art Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-foreground font-black text-sm md:text-lg uppercase px-4 py-2 border-[3px] border-transparent hover:border-foreground hover:bg-yellow-200 hover:pop-shadow transition-all duration-300 transform hover:-rotate-2"
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button variant="accent" size="sm" onClick={() => scrollTo("shop")} className="text-sm md:text-base animate-pulse">
          Shop Now
        </Button>
      </nav>

      {/* Video Presentation Section - Full Blend Mode Interaction */}
      <section id="hero-video" className="relative w-full h-[100vh] min-h-[800px] border-b-[6px] border-foreground overflow-hidden bg-black flex items-center justify-center">
        {/* Background Full Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/breon/breonpop-teaser-20s.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-full object-cover opacity-90 scale-105"
          />
        </div>

        {/* Foreground Content with Mix-Blend Mode */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center pointer-events-none mix-blend-difference">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[15vw] md:text-[180px] font-black uppercase text-white leading-[0.8] tracking-tighter text-center"
          >
            POP<br />YOUR<br />SMILE.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-12 md:mt-24 pointer-events-auto"
          >
            <div className="flex flex-col items-center justify-center animate-spin-slow cursor-pointer">
              <span className="text-white font-black text-4xl md:text-6xl uppercase leading-none mb-2 mix-blend-normal">BREON</span>
              <span className="text-white font-black text-4xl md:text-6xl uppercase leading-none mix-blend-normal">POP</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Scroller Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center w-full z-20 pointer-events-none">
          <div className="h-32 w-2 bg-gradient-to-b from-white/0 via-white to-white/0 pop-shadow-sm opacity-50"></div>
        </div>
      </section>

      {/* Hero Section - Asymmetrical & Bold */}
      <section id="ritual" className="relative min-h-screen flex items-center justify-center pt-24 px-6 border-b-[6px] border-foreground">
        {/* Background dotted pattern for pure pop-art feel */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, black 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="space-y-6"
          >
            <h2 className="text-7xl md:text-[140px] font-black leading-[0.85] text-foreground uppercase mix-blend-multiply">
              POP<br />
              YOUR<br />
              <span className="text-primary pop-shadow inline-block bg-white border-[6px] border-foreground px-4 mt-4">RITUAL</span>
            </h2>
            <p className="text-2xl md:text-3xl font-black bg-accent text-foreground inline-block p-4 border-[4px] border-foreground pop-shadow mt-6 transform -rotate-2">
              정화가 예술이 되는 순간.
            </p>
            <div className="pt-12 flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="w-full sm:w-auto">Buy Now</Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">Discover</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
            className="relative h-[500px] md:h-[800px] w-full flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* Cropped Asymmetric Background shape */}
            <div className="absolute w-[80%] h-[70%] bg-warning pop-border pop-shadow top-10 right-0 transform rotate-6 z-0"></div>

            <img
              src="/breon/promo-wide.png"
              alt="Breonpop Toothpaste object"
              className="object-contain w-full h-full max-h-[850px] z-10 drop-shadow-[20px_20px_0px_rgba(17,17,17,1)] hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature Section - Bold Colors & Cropped Art */}
      <section id="art" className="relative py-32 bg-primary border-b-[6px] border-foreground overflow-hidden">
        <motion.div
          style={{ y: yParallax }}
          className="absolute -top-20 -left-20 text-[15rem] md:text-[30rem] font-black text-foreground opacity-10 pointer-events-none leading-none tracking-tighter"
        >
          ART.
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-24"
          >
            <h3 className="text-6xl md:text-9xl font-black uppercase text-background pop-shadow-deep mix-blend-overlay">
              The Art <br /> Behind
            </h3>
            <div className="w-full h-2 bg-foreground mt-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-[600px] pop-border pop-shadow-deep bg-background p-4 flex items-center justify-center transform hover:-rotate-2 transition-transform duration-300 z-20"
            >
              <img
                src="/breon/list3/list3.png"
                alt="Breonpop Details"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-[600px] pop-border pop-shadow-deep bg-background flex items-center justify-center transform rotate-3 hover:translate-x-4 transition-transform duration-300 z-10"
            >
              <img
                src="/breon/detail-set-gif-2.gif"
                alt="Breonpop Feature GIF"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 bg-background border-b-[6px] border-foreground">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
          <motion.div
            style={{ y: yParallaxSlow }}
            className="lg:w-1/2 space-y-10"
          >
            <h3 className="text-5xl md:text-8xl font-black uppercase text-foreground leading-[0.9] tracking-tighter">
              BOUFFANTS <br />
              &amp; BROKEN <br />
              HEARTS.
            </h3>
            <p className="text-3xl md:text-5xl font-black text-background bg-secondary inline-block p-4 pop-border pop-shadow">
              POP, CONFIDENCE, ICON.
            </p>
            <div className="w-24 h-[6px] bg-foreground pop-shadow"></div>
            <p className="text-xl md:text-3xl font-bold text-foreground leading-tight bg-yellow-100 p-6 pop-border">
              브레온팝은 아무 작품이나 사용하지 않습니다. 선택된 컬렉션 중에서, 당신의 순간에 가장 어울리는 단 하나의 아트를 고릅니다.
            </p>
          </motion.div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, black 2px, transparent 0)', backgroundSize: '20px 20px' }}></div>
            <img src="/breon/list3/papa.png" alt="Art 1" className="w-full aspect-square object-cover pop-border pop-shadow z-10 transform -rotate-3 hover:rotate-0 transition-all" />
            <img src="/breon/promo-wide.png" alt="Art 2" className="w-full aspect-square object-cover pop-border pop-shadow z-10 transform translate-y-12 rotate-3 hover:rotate-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Horizontal Swiping Banner (Marquee Gallery) */}
      <section id="gallery" className="w-full overflow-hidden relative border-y-[6px] border-foreground bg-accent py-24 px-6 cursor-grab active:cursor-grabbing">
        <div className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
          <h3 className="text-5xl md:text-7xl font-black text-background uppercase tracking-tighter pop-shadow-deep">THE GALLERY</h3>
          <span className="text-lg md:text-2xl font-black bg-background text-foreground border-[4px] border-foreground px-6 py-3 pop-shadow">
            ← SWIPE →
          </span>
        </div>

        <motion.div
          className="flex gap-12 w-max px-6"
          drag="x"
          dragConstraints={{ right: 0, left: -4500 }}
          dragElastic={0.1}
          initial={{ x: 0 }}
        >
          {[
            "/breon/psd/BBH_Cheetahinredshades_JEWEL.jpg",
            "/breon/psd/BBH_CHEETAH_REUNION_JEWEL.jpg",
            "/breon/psd/BBH_Chic_Citrus_JEWEL.jpg",
            "/breon/psd/BBH_Citrus_Cheetah_2_JEWEL.jpg",
            "/breon/psd/BBH_Colorful_Chic_2_JEWEL.jpg",
            "/breon/psd/BBH_Flower_kiss_JEWEL.jpg",
            "/breon/psd/BBH_Heart_Girl_Cheetah_JEWEL.jpg",
            "/breon/psd/BBH_Lipstick_Venus_JEWEL.jpg",
            "/breon/psd/BBH_Tropical_vision_JEWEL.jpg",
            "/breon/psd/BBH_Tropicalworld_JEWEL.jpg",
            "/breon/psd/BBH_cheetahinshades_JEWEL.jpg",
            "/breon/psd/BBH_cocktailcitrus_JEWEL.jpg",
            "/breon/psd/BBH_shellsquad_JEWEL.jpg",
            "/breon/psd/BBH_tropicalglamcat_JEWEL.jpg"
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative group w-[300px] md:w-[450px] flex-shrink-0"
            >
              <div className="bg-background p-4 md:p-6 pop-border pop-shadow-deep transition-all duration-300 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
                <div className="overflow-hidden pop-border relative bg-foreground aspect-[4/5] flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Kendra Dandy Art ${idx}`}
                    className="w-full h-full object-cover mix-blend-screen opacity-90 transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-110"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="mt-6 flex justify-between items-center bg-yellow-100 p-3 pop-border">
                  <span className="text-xl md:text-2xl font-black text-foreground tracking-tighter uppercase">Kendra</span>
                  <span className="text-xl md:text-2xl font-black text-primary tracking-widest">.{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Products Section (Vending Machine Style) */}
      <section id="shop" className="min-h-screen flex flex-col justify-center py-24 bg-background border-b-[6px] border-foreground overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-6 mb-16 text-center">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-6xl md:text-[100px] font-black uppercase text-foreground leading-[0.85] tracking-tighter inline-block"
          >
            CHOOSE<br />YOUR <span className="text-white bg-primary px-4 pop-shadow-deep pop-border mt-6 inline-block transform -rotate-3 animate-wiggle">FLAVOR.</span>
          </motion.h3>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid lg:grid-cols-3 divide-y-[6px] lg:divide-y-0 lg:divide-x-[6px] divide-foreground w-full border-y-[6px] border-foreground bg-background">

          {/* Product 1: Spearmint */}
          <div className="bg-warning flex flex-col items-center p-8 md:p-12 relative group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-white/40 transform -skew-y-12 scale-150 rotate-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0 ease-out"></div>

            <div className="relative z-10 w-full text-center mb-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tighter mix-blend-multiply drop-shadow-md">SPEARMINT</h3>
              <p className="text-lg font-bold mt-2 uppercase tracking-widest pop-border bg-foreground text-background inline-block px-3 py-1">마일드 치약 (Mild Toothpaste)</p>
            </div>

            <div className="relative z-10 w-full aspect-[4/5] md:aspect-[3/4] max-h-[700px] flex items-end justify-center pop-border bg-foreground overflow-hidden rotate-2 group-hover:rotate-0 transition-all duration-500">
              <img src="/breon/list3/spearmint.jpg" alt="Spearmint Toothpaste" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
              <img src="/breon/list3/spearmint-hover.jpg" alt="Spearmint Hover Background" className="absolute inset-0 w-full h-full object-cover bg-[#B5E7D7] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* HTML Text Content & Stats overlay sliding up */}
              <div className="relative z-20 w-[90%] bg-white pop-border pop-shadow-deep p-4 md:p-6 translate-y-[120%] group-hover:translate-y-[-20px] transition-transform duration-500 ease-in-out flex flex-col justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">🍃</span>
                    <h4 className="text-xl md:text-2xl font-black uppercase text-foreground">마일드 스피아민트</h4>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-foreground/80 break-keep leading-relaxed border-t-4 border-foreground pt-4">
                    지중해의 온화한 바람을 머금은 듯한 와일드 스피어민트의 부드러운 향이 입안에 천천히 스며듭니다. 자극 없이 이어지는 마일드 민트의 여운과 은은하게 정돈되는 상쾌함을 남깁니다.
                  </p>
                </div>
                <div className="space-y-2 mt-4 bg-yellow-100 p-3 pop-border">
                  {[
                    { label: "COOLING", score: 2 },
                    { label: "FRESHNESS", score: 4 },
                    { label: "SUSTAINING", score: 3 },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-black text-sm uppercase">{stat.label}</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <span key={i} className={`text-lg leading-none ${i <= stat.score ? '' : 'opacity-20 grayscale'}`}>🍃</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full mt-8 flex justify-center">
              <Button variant="primary" size="lg" className="w-full shadow-none group-hover:translate-y-0 relative z-30">ADD TO CART</Button>
            </div>
          </div>

          {/* Product 2: Peppermint */}
          <div className="bg-primary flex flex-col items-center p-8 md:p-12 relative group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-white/20 transform -skew-y-12 scale-150 -rotate-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0 ease-out"></div>

            <div className="relative z-10 w-full text-center mb-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-background uppercase tracking-tighter mix-blend-overlay drop-shadow-md">PEPPERMINT</h3>
              <p className="text-lg font-bold mt-2 uppercase tracking-widest pop-border bg-background text-foreground inline-block px-3 py-1">프레시 치약 (Fresh Toothpaste)</p>
            </div>

            <div className="relative z-10 w-full aspect-[4/5] md:aspect-[3/4] max-h-[700px] flex items-end justify-center pop-border bg-foreground overflow-hidden -rotate-2 group-hover:rotate-0 transition-all duration-500">
              <img src="/breon/list3/peppermint.jpg" alt="Peppermint Toothpaste" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
              <img src="/breon/list3/peppermint-hover.jpg" alt="Peppermint Hover Background" className="absolute inset-0 w-full h-full object-cover bg-[#1F8FC9] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* HTML Text Content & Stats overlay sliding up */}
              <div className="relative z-20 w-[90%] bg-white pop-border pop-shadow-deep p-4 md:p-6 translate-y-[120%] group-hover:translate-y-[-20px] transition-transform duration-500 ease-in-out flex flex-col justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">🍬</span>
                    <h4 className="text-xl md:text-2xl font-black uppercase text-foreground">프레쉬 페퍼민트</h4>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-foreground/80 break-keep leading-relaxed border-t-4 border-foreground pt-4">
                    차가운 공기를 가르듯 선명하게 펼쳐지는 프레쉬 페퍼민트의 쿨링 노트. 첫 순간의 강렬한 상쾌함 뒤로 깨끗하게 정제된 시트러스 터치가 스쳐 지나가며 입안에 또렷한 리프레시감을 남깁니다.
                  </p>
                </div>
                <div className="space-y-2 mt-4 bg-cyan-100 p-3 pop-border">
                  {[
                    { label: "COOLING", score: 4 },
                    { label: "FRESHNESS", score: 5 },
                    { label: "SUSTAINING", score: 4 },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-black text-sm uppercase">{stat.label}</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <span key={i} className={`text-lg transition-all leading-none ${i <= stat.score ? '' : 'opacity-20 grayscale'}`}>🍬</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full mt-8 flex justify-center">
              <Button variant="accent" size="lg" className="w-full shadow-none bg-background text-foreground hover:bg-warning hover:text-foreground relative z-30">ADD TO CART</Button>
            </div>
          </div>

          {/* Product 3: Icemint */}
          <div className="bg-accent flex flex-col items-center p-8 md:p-12 relative group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-white/20 transform skew-y-12 scale-150 rotate-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0 ease-out"></div>

            <div className="relative z-10 w-full text-center mb-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-background uppercase tracking-tighter drop-shadow-md">ICEMINT</h3>
              <p className="text-lg font-bold mt-2 uppercase tracking-widest pop-border bg-background text-foreground inline-block px-3 py-1">스노우 글로스 (Snow Gloss)</p>
            </div>

            <div className="relative z-10 w-full aspect-[4/5] md:aspect-[3/4] max-h-[700px] flex items-end justify-center pop-border bg-foreground overflow-hidden rotate-1 group-hover:rotate-0 transition-all duration-500">
              <img src="/breon/list3/snowglass.jpg" alt="Icemint Toothpaste" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
              <img src="/breon/list3/snowglass-hover.jpg" alt="Icemint Hover Background" className="absolute inset-0 w-full h-full object-cover bg-[#BAA7F5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* HTML Text Content & Stats overlay sliding up */}
              <div className="relative z-20 w-[90%] bg-white pop-border pop-shadow-deep p-4 md:p-6 translate-y-[120%] group-hover:translate-y-[-20px] transition-transform duration-500 ease-in-out flex flex-col justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">❄️</span>
                    <h4 className="text-xl md:text-2xl font-black uppercase text-foreground">스노우글라스 아이스민트</h4>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-foreground/80 break-keep leading-relaxed border-t-4 border-foreground pt-4">
                    설원 위를 스치는 아이스 민트의 맑은 숨결이 투명한 공기처럼 산뜻하게 퍼지며 감각적인 향을 전달합니다. 깨끗한 사용감을 느낄 수 있는 클린&프레시 무드.
                  </p>
                </div>
                <div className="space-y-2 mt-4 bg-purple-100 p-3 pop-border">
                  {[
                    { label: "COOLING", score: 3 },
                    { label: "FRESHNESS", score: 4 },
                    { label: "SUSTAINING", score: 4 },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-black text-sm uppercase">{stat.label}</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <span key={i} className={`text-lg transition-all leading-none ${i <= stat.score ? '' : 'opacity-20 grayscale'}`}>❄️</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full mt-8 flex justify-center">
              <Button variant="secondary" size="lg" className="w-full shadow-none bg-background text-foreground hover:bg-primary hover:text-white relative z-30">ADD TO CART</Button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="min-h-screen flex items-center justify-center py-32 px-6 bg-warning text-foreground relative overflow-hidden border-b-[6px] border-foreground">
        {/* Huge repeating background text */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-10 overflow-hidden pointer-events-none">
          <h2 className="text-[20vw] font-black uppercase leading-none break-all">POP POP POP POP POP</h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            className="text-7xl md:text-[120px] font-black uppercase tracking-tighter text-foreground bg-white p-6 pop-border pop-shadow-deep transform rotate-3"
          >
            READY TO <span className="text-primary italic animate-wiggle inline-block">POP?</span>
          </motion.h2>

          <div className="w-full max-w-xl bg-background pop-border pop-shadow-deep p-8 md:p-12 transform -rotate-1 mt-16">
            <h3 className="text-4xl font-black mb-8 uppercase text-left border-b-[4px] border-foreground pb-4">Join the Club</h3>
            <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="YOUR NAME" className="w-full pop-border p-6 focus:outline-none focus:bg-yellow-100 bg-background font-black text-2xl uppercase placeholder:text-foreground/30 transition-colors" />
              <input type="email" placeholder="YOUR EMAIL" className="w-full pop-border p-6 focus:outline-none focus:bg-yellow-100 bg-background font-black text-2xl uppercase placeholder:text-foreground/30 transition-colors" />
              <Button type="submit" variant="accent" className="w-full mt-6 py-8 text-3xl hover:-translate-y-2">CLAIM OFFER</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
          <div className="space-y-4 flex flex-col items-start">
            <div className="bg-white px-4 py-2 pop-border inline-block">
              <img src="/breon/breonpop-logo.png" alt="Breonpop Logo" className="h-10 md:h-16 object-contain animate-wiggle hover:scale-105 transition-transform cursor-pointer" />
            </div>
            <p className="font-bold text-xl uppercase tracking-widest text-background/50">The Art of Dental Care</p>
          </div>
          <div className="text-left md:text-right space-y-2">
            <p className="font-black text-2xl uppercase">© 2026 Breonpop.</p>
            <p className="font-bold text-lg uppercase text-background/50">All ARTWORKS property of Kendra Dandy.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
