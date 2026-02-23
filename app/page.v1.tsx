"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    // Simulate loading for Skeleton demo
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center space-y-12">
        <Skeleton className="w-64 h-24 mb-12" />
        <Skeleton className="w-full max-w-4xl h-[60vh]" />
        <Skeleton className="w-48 h-16" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-background/90 backdrop-blur-sm border-b-4 border-foreground">
        <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase">
          Breonpop
        </h1>
        <Button variant="outline" size="sm">
          Shop Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="absolute inset-0 bg-primary/10 -z-10 pattern-dots" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="space-y-8"
          >
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] text-foreground uppercase">
              Pop <br />
              <span className="text-primary italic">Your</span> <br />
              Daily Ritual
            </h2>
            <p className="text-xl md:text-2xl font-bold bg-secondary text-white inline-block p-2 px-4 pop-border transform -rotate-2">
              정화가 예술이 되는 순간.
            </p>
            <p className="text-lg md:text-xl max-w-md font-medium text-foreground/80 mt-6">
              치약이 아닌, 욕실에 놓이는 하나의 아트 오브제. 브레온팝과 함께 일상을 팝아트처럼 컬러풀하게 바꾸세요.
            </p>
            <div className="pt-8 flex gap-4">
              <Button size="lg" className="w-full md:w-auto">Buy Now</Button>
              <Button size="lg" variant="outline" className="hidden md:flex">Discover Art</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 }}
            className="relative h-[600px] w-full flex justify-center items-center"
          >
            <div className="absolute w-[120%] h-[120%] bg-accent rounded-full -z-10 blur-3xl opacity-20 animate-pulse" />
            <img
              src="/breon/111.png"
              alt="Breonpop Toothpaste object"
              className="object-contain w-full h-full max-h-[600px] drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* Feature / Parallax Section */}
      <section className="relative py-32 px-6 bg-primary text-white border-y-8 border-foreground overflow-hidden">
        <motion.div
          style={{ y: yParallax }}
          className="absolute -top-40 -right-40 text-[15rem] md:text-[20rem] font-black opacity-10 pointer-events-none mix-blend-overlay"
        >
          ART
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-5xl md:text-7xl font-black uppercase text-background pop-shadow-lg">
              The Art Behind <br /> Breonpop
            </h3>
            <p className="text-2xl font-bold max-w-2xl mx-auto text-yellow-100">
              Bouffants & Broken Hearts의 감성을 치약에 담았습니다. 당신의 욕실이 갤러리가 되는 팝아트 오브제.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full rounded-3xl overflow-hidden pop-border pop-shadow-lg bg-background p-4 flex items-center justify-center transform -rotate-1"
            >
              <img
                src="/breon/psd/BBH_lemonelixir_JEWEL.jpg"
                alt="Breonpop Details"
                className="w-full h-[500px] rounded-xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full rounded-3xl overflow-hidden pop-border pop-shadow-lg bg-background p-4 flex items-center justify-center transform rotate-1"
            >
              <img
                src="/breon/detail-set-gif-2.gif"
                alt="Breonpop Feature GIF"
                className="w-full h-[500px] rounded-xl object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl text-foreground text-left mt-16">
            {[
              { title: 'Joyful Image', text: '정화가 예술이 되는 순간. 지루한 일상 속 다채로운 향기를 느껴보세요.', img: '/breon/per.png' },
              { title: 'Selected Art', text: '세계적인 패턴 디자인 브랜드 BBH의 선택이 담긴 시그니처 팝아트 패키지.', img: '/breon/promo-wide.png' },
              { title: 'Daily Ritual', text: '단순한 양치를 넘어, 아침 저녁으로 마주하는 예술적인 정화의 시간을 선물합니다.', img: '/breon/111.png' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.2 }}
                className="bg-background pop-border pop-shadow p-8 rounded-2xl transform hover:-translate-y-2 transition-transform h-full flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-secondary mb-6 pop-border flex items-center justify-center text-white font-black text-2xl shrink-0">
                  0{i + 1}
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase">{feature.title}</h4>
                <p className="font-medium text-lg text-foreground/80 mb-6 flex-grow">
                  {feature.text}
                </p>
                <img src={feature.img} alt={feature.title} className="w-full h-40 object-cover pop-border rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Art Gallery Section (Kendra Dandy Collection) */}
      <section className="py-32 px-6 bg-gradient-to-b from-primary/5 to-white border-b-8 border-foreground">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          {/* 2-Column Desktop Layout for Text */}
          <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl text-left items-center px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-5xl lg:text-5xl font-black uppercase text-foreground leading-tight tracking-tighter">
                이 페이지에 소개된 작품은<br /> <span className="text-primary italic break-keep">Kendra Dandy</span>의 대표 시리즈,<br />
                <span className="bg-primary text-white px-2 mt-2 inline-block">‘Bouffants &amp; Broken Hearts’</span><br /> 컬렉션입니다.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-6 lg:border-l-4 border-foreground lg:pl-12"
            >
              <p className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-widest pop-shadow-sm inline-block bg-white p-2">
                Pop, Confidence, Icon.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground">
                이 시리즈는 자기 확신과 즐거움의 감정을 가장 선명하게 담아냅니다.
              </p>
              <div className="w-16 h-2 bg-foreground pop-shadow mt-6 mb-6 transform -skew-x-12"></div>
              <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed break-keep">
                브레온팝은 아무 작품이나 사용하지 않습니다. <br />
                선택된 컬렉션 중에서, 당신의 순간에 가장 어울리는 하나의 아트를 고릅니다.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Swiping Banner (Marquee) */}
          <div className="w-full mt-16 overflow-hidden relative border-y-8 border-foreground bg-white py-12 px-6 cursor-grab active:cursor-grabbing">
            <div className="max-w-7xl mx-auto mb-4 flex justify-end">
              <span className="text-sm font-bold bg-secondary text-white px-3 py-1 rounded-full pop-shadow-sm animate-bounce">
                ← Swipe to explore →
              </span>
            </div>

            <motion.div
              className="flex gap-8 w-max"
              drag="x"
              dragConstraints={{ right: 0, left: -3500 }}
              dragElastic={0.2}
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
                "/breon/psd/BBH_tropicalglamcat_JEWEL.jpg",
                "/breon/psd/BBH_wildflower_creature_JEWEL.jpg",
                "/breon/psd/BBH_winkroar_JEWEL.jpg"
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative group w-[280px] md:w-[350px] flex-shrink-0"
                >
                  <div className="bg-white p-3 md:p-4 pop-border pop-shadow transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:pop-shadow-lg relative z-10 pointer-events-none">
                    <div className="overflow-hidden pop-border relative bg-gray-100 aspect-[4/5] flex items-center justify-center">
                      <img
                        src={src}
                        alt={`Kendra Dandy Art ${idx}`}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <div className="mt-4 flex justify-between items-end">
                      <div className="h-2 w-10 md:w-16 bg-primary"></div>
                      <span className="text-[10px] md:text-sm font-black text-foreground/50 tracking-widest bg-yellow-100 px-1">
                        ART. {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h3 className="text-4xl md:text-6xl font-black uppercase text-foreground">
            Experience the <span className="text-secondary">Vibe</span>
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full aspect-video rounded-3xl overflow-hidden pop-border pop-shadow-lg mx-auto bg-black flex items-center justify-center"
          >
            <video
              src="/breon/breonpop-teaser-20s.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10 popup-container">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tight text-primary pop-shadow-lg"
          >
            Ready to <br /> Pop?
          </motion.h2>
          <p className="text-2xl font-bold max-w-xl">
            가장 힙한 덴탈 케어, 브레온팝을 지금 바로 만나보세요. 첫 구매 시 특별한 혜택이 제공됩니다.
          </p>

          <div className="w-full max-w-md bg-background pop-border pop-shadow-lg p-8 rounded-3xl mt-12 text-foreground">
            <h3 className="text-2xl font-black mb-6 uppercase text-center">Get Yours Now</h3>
            <form className="space-y-4 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full pop-border p-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background font-bold" />
              <input type="email" placeholder="Your Email" className="w-full pop-border p-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background font-bold" />
              <Button type="submit" className="w-full mt-4" size="lg">Claim Offer</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6 border-t-8 border-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl font-black uppercase tracking-widest text-primary">Breonpop</h2>
          <p className="font-bold">© 2026 Breonpop. All Art Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
