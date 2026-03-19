"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuAward, LuBadgeCheck, LuCloud, LuBrain, LuCpu, LuCode, LuUsers, LuGlobe, LuShoppingBag, LuHeart, LuCoffee, LuExternalLink, LuStar, LuTrophy, LuMedal, LuChevronRight } from "react-icons/lu";

const achievementsData = [
    {
        id: 0,
        title: "GATE 2026 - Qualified in Computer Science",
        issuer: "IIT Guwahati",
        date: "Feb 2026",
        description: "Secured a competitive rank of 9000 among 1.2 lakhs candidates in GATE 2026 Computer Science, demonstrating strong grasp of core CS concepts and problem-solving skills.",
        icon: LuTrophy,
        link: "/certificates/python.pdf",
        gradient: "from-white/20 via-white/10 to-transparent", 
        glow: "shadow-[0_0_40px_rgba(255,255,255,0.25)]", 
        border: "border-white/30", 
        text: "text-white", 
        bg: "bg-white/10"
    },
    {
        id: 1,
        title: "Software Engineering Virtual Experience - JPMorgan Chase & Co.",
        issuer: "JPMorgan Chase & Co.",
        date: "Jan 2026",
        description: "Completed JPMorgan's Software Engineering Virtual Experience, gaining insights into software development lifecycle, agile methodologies, and real-world project management in a global financial institution.",
        icon: LuMedal,
        link: "/certificates/JPMorgan.pdf",
        gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(37,99,235,0.3)]",
        border: "border-blue-600/50",
        text: "text-blue-600",
        bg: "bg-blue-600/10"
        
    },
    {
        id: 2,
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle Corporation",
        date: "Oct 2025",
        description: "Validated expertise in Oracle Cloud AI services, machine learning fundamentals, and AI/ML implementation strategies on cloud infrastructure.",
        icon: LuAward,
        link: "/certificates/OracleAI.pdf",
        gradient: "from-orange-200/20 via-amber-100/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(251,146,60,0.25)]",
        border: "border-orange-200/40",
        text: "text-orange-300",
        bg: "bg-orange-100/10"
    },
    {
        id: 3,
        title: "CodeClash 2.0 Finalist - Top 10 Among 20K+ Teams",
        issuer: "CodeClash Hackathon",
        date: "2025",
        description: "Developed Medicare-AI, an AI-powered healthcare platform with symptom diagnosis and prescription generation. Presented at Google Gurugram final round.",
        icon: LuTrophy,
        link: "ude.my/UC-074b6c96-0b50-4130-a50e-c17251d1d57e",
        gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(234,179,8,0.3)]",
        border: "border-yellow-500/50",
        text: "text-yellow-400",
        bg: "bg-yellow-500/10"
    },
    {
        id: 4,
        title: "Cloud Computing Certification",
        issuer: "NPTEL IIT Kharagpur",
        date: "Apr 2025",
        description: "Completed 12-week course in Cloud Computing with 58% consolidated score. Recognized among 29,703 certified candidates across India.",
        icon: LuCloud,
        link: "/certificates/NPTELCloud.pdf",
        gradient: "from-red-600/25 via-white/10 to-transparent",
        glow: "shadow-[0_0_50px_rgba(220,38,38,0.35)]",
        border: "border-red-500",
        text: "text-red-500",
        bg: "bg-red-500/10"
        
    },
    {
        id: 5,
        title: "Generative AI & Prompt Engineering Mastery",
        issuer: "Infosys Springboard",
        date: "Aug 2025",
        description: "Completed comprehensive training in Generative AI, ChatGPT-4 Prompt Engineering, and Large Language Models. Mastered no-code AI tools and applications.",
        icon: LuBrain,
        link: "/certificates/GENAI1.pdf",
        gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(34,197,94,0.3)]",
        border: "border-green-500/50",
        text: "text-green-400",
        bg: "bg-green-500/10"
    },
    {
        id: 6,
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        date: "Oct 2023",
        description: "300-hour comprehensive certification in modern responsive web design, HTML5, CSS3, and mobile-first development approaches.",
        icon: LuGlobe,
        link: "/certificates/RespWebDesign.pdf",
        gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(168,85,247,0.3)]",
        border: "border-purple-500/50",
        text: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        id: 7,
        title: "JavaScript (Intermediate)",
        issuer: "HackerRank",
        date: "Oct 2025",
        description: "Validated intermediate-level proficiency in JavaScript, covering design patterns, memory management, concurrency model, and event loop concepts through practical problem-solving.",
        icon: LuCode,
        link: "/certificates/JS.pdf", 
        gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(34,197,94,0.3)]",
        border: "border-green-500/50",
        text: "text-green-400",
        bg: "bg-green-500/10"
        
    },
    {
        id: 8,
        title: "Figma UI/UX Design Training",
        issuer: "Lovely Professional University",
        date: "July 2025",
        description: "Completed 20-hour intensive training in Figma, mastering UI/UX design principles, prototyping, and collaborative design workflows for web and mobile applications.",
        icon: LuBadgeCheck,
        link: "/certificates/Figma.pdf",
        gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]",
        border: "border-pink-500/50",
        text: "text-pink-400",
        bg: "bg-pink-500/10"

    },
    {
        id: 9,
        title: "Data Structures & Algorithms Certification",
        issuer: "iamneo Platform",
        date: "Dec 2024",
        description: "Completed 72-hour intensive course in Data Structures and Algorithms with hands-on implementation of complex data structures and algorithmic problem-solving.",
        icon: LuBrain,
        link: "/certificates/DSANeo.pdf",
        gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(249,115,22,0.3)]",
        border: "border-orange-500/50",
        text: "text-orange-400",
        bg: "bg-orange-500/10"
    },
    {
        id: 10,
        title: "TCP/IP and Advanced Topics",
        issuer: "University of Colorado (Coursera)",
        date: "Nov 2024",
        description: "Completed an in-depth course on Computer Networks covering TCP/IP protocols, routing, congestion control, and advanced networking concepts with real-world applications.",
        icon: LuCpu,
        link: "/certificates/TCPIP.pdf", 
        gradient: "from-blue-400/20 via-cyan-400/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(56,189,248,0.3)]",
        border: "border-cyan-400/50",
        text: "text-cyan-300",
        bg: "bg-cyan-400/10"
    },
    {
        id: 11,
        title: "Code-A-Haunt Hackathon Participant",
        issuer: "CodingBlocks LPU",
        date: "Feb-Mar 2024",
        description: "Participated in 24-hour hackathon showcasing exceptional coding and problem-solving skills in a competitive team environment.",
        icon: LuUsers,
        link: "ude.my/UC-074b6c96-0b50-4130-a50e-c17251d1d57e",
        gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]",
        border: "border-pink-500/50",
        text: "text-pink-400",
        bg: "bg-pink-500/10"
    },
    {
        id: 12,
        title: "Flipkart GRiD 6.0 - Software Development Track",
        issuer: "Flipkart",
        date: "2024",
        description: "Qualified Level 1 in E-Commerce & Tech Quiz, demonstrating strong understanding of e-commerce architecture and technology fundamentals.",
        icon: LuShoppingBag,
        link: "ude.my/UC-074b6c96-0b50-4130-a50e-c17251d1d57e",
        gradient: "from-yellow-600/20 via-amber-600/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(202,138,4,0.3)]",
        border: "border-yellow-600/50",
        text: "text-yellow-600",
        bg: "bg-yellow-600/10"
    },
    {
        id: 13,
        title: "Trinetra Web Hackathon Finalist",
        issuer: "Trinetra",
        date: "2024",
        description: "Top 10 recognition for developing an AI-powered mental health chatbot, showcasing expertise in AI integration and empathetic technology solutions.",
        icon: LuHeart,
        link: "ude.my/UC-074b6c96-0b50-4130-a50e-c17251d1d57e",
        gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(139,92,246,0.3)]",
        border: "border-violet-500/50",
        text: "text-violet-400",
        bg: "bg-violet-500/10"
    },
    {
        id: 14,
        title: "Java Programming Certification",
        issuer: "iamneo Platform",
        date: "May 2024",
        description: "72-hour comprehensive Java programming course covering core concepts, OOP implementation, and enterprise-level application development.",
        icon: LuCoffee,
        link: "ude.my/UC-074b6c96-0b50-4130-a50e-c17251d1d57e",
        gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
        glow: "shadow-[0_0_40px_rgba(37,99,235,0.3)]",
        border: "border-blue-600/50",
        text: "text-blue-600",
        bg: "bg-blue-600/10"
    }
];
const Certifications = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeData = achievementsData[activeIndex];
    const [viewerLink, setViewerLink] = useState(null);
    return (
        <section id="certifications" className="w-full bg-black px-6 py-24 text-white relative flex flex-col items-center overflow-hidden">
            {/* Background glowing orbs */}
            <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] bg-linear-to-bl ${activeData.gradient} rounded-full blur-[120px] pointer-events-none opacity-40 transition-all duration-1000`} />
            <div className={`absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-linear-to-tr ${activeData.gradient} rounded-full blur-[100px] pointer-events-none opacity-30 transition-all duration-1000`} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs tracking-widest uppercase text-white/80">
                            Milestones & Certifications
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Defining <span className="text-cyan-400">Excellence</span>
                    </h2>

                    <p className="text-white/60 text-lg max-w-2xl mb-12">
                        A curated spotlight on the technical milestones, global rankings, and certifications that forge my professional engineering path.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-full min-h-[550px]">

                    {/* Left Side: Spotlight Area */}
                    <div className={`w-full lg:w-3/5 relative rounded-[2.5rem] border border-white/10 bg-white/3 overflow-hidden group transition-all duration-500 ${activeData.glow} hover:border-white/20`}>

                        {/* Background gradient specifically for spotlight */}
                        <div className={`absolute inset-0 bg-linear-to-br ${activeData.gradient} opacity-40 transition-all duration-700`} />

                        {/* Huge floating icon background */}
                        <div className={`absolute -right-16 -bottom-16 sm:right-[-10%] sm:bottom-[-20%] opacity-10 pointer-events-none transition-all duration-1000 transform group-hover:scale-110 group-hover:-rotate-12`}>
                            <activeData.icon className={`w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] ${activeData.text}`} />
                        </div>

                        {/* Spotlight Content */}
                        <div
                            key={activeData.id}
                            className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between animate-in fade-in slide-in-from-bottom-4 duration-500"
                            style={{ animationFillMode: 'both' }}
                        >
                            <style jsx>{`
                                @keyframes slideFadeUp {
                                    from { opacity: 0; transform: translateY(15px); }
                                    to { opacity: 1; transform: translateY(0); }
                                }
                                .animate-slideFadeUp {
                                    animation: slideFadeUp 0.4s ease-out forwards;
                                }
                            `}</style>
                            <div className="animate-slideFadeUp">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-16 h-16 rounded-2xl ${activeData.bg} border ${activeData.border} flex items-center justify-center shadow-2xl`}>
                                        <activeData.icon className={`w-8 h-8 ${activeData.text}`} />
                                    </div>
                                    <div className={`px-4 py-1.5 rounded-full border border-white/10 bg-black/40 text-xs font-mono ${activeData.text} backdrop-blur-md`}>
                                        {activeData.date}
                                    </div>
                                </div>

                                <div className="overflow-hidden">
                                    <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${activeData.text} leading-tight drop-shadow-md`}>
                                        {activeData.title}
                                    </h3>
                                </div>

                                <h4 className="text-lg sm:text-xl font-medium text-white/80 mb-6 flex items-center gap-3">
                                    <span className={`w-8 h-[2px] ${activeData.bg} ${activeData.border} border-t`} />
                                    {activeData.issuer}
                                </h4>

                                <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
                                    {activeData.description}
                                </p>
                            </div>

                            <div className="mt-12 animate-slideFadeUp" style={{ animationDelay: '100ms' }}>
                        
                                
                                <button
  onClick={() => {
  if (activeData.link.endsWith(".pdf")) {
    setViewerLink(activeData.link);
  } else {
    window.open(activeData.link, "_blank");
  }
}}
  className={`inline-flex items-center gap-3 px-8 py-4 rounded-full ${activeData.bg} border ${activeData.border} ${activeData.text} hover:bg-white/10 hover:text-white transition-all duration-300 font-semibold text-sm group/btn backdrop-blur-md shadow-lg`}
  suppressHydrationWarning={true}
>
  <span>View Credential</span>
  <LuExternalLink className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
</button>

                            </div>
                        </div>
                    </div>

                    {/* Right Side: List Area */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-3 relative">
                        <div className="flex flex-col gap-3 overflow-y-auto max-h-[550px] pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 transition-all rounded-3xl">
                            {achievementsData.map((item, idx) => {
                                const isActive = idx === activeIndex;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 flex items-center gap-5 group
                                         ${isActive ? `bg-white/10 ${item.border} ${item.glow} scale-[1.02] -translate-x-1 lg:-translate-x-2` : 'bg-white/3 border-white/5 hover:bg-white/5 hover:border-white/20'}`}
                                        suppressHydrationWarning={true}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                                             ${isActive ? `${item.bg} text-white shadow-lg shadow-${item.border.split('-')[1]}/50` : 'bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110'}
                                         `}>
                                            <item.icon className={`w-6 h-6 ${isActive ? item.text : ''}`} />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-semibold truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-white/40 mt-1 font-mono uppercase tracking-wider truncate">{item.issuer}</p>
                                        </div>

                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? item.bg : 'group-hover:bg-white/5'}`}>
                                            <LuChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? `${item.text} opacity-100 translate-x-0.5` : 'text-white/20 opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'}`} />
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {viewerLink && (

  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setViewerLink(null)}
  >

    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-[50%] h-[85%] bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
    >

      {/* Close Button */}
      <button
        onClick={() => setViewerLink(null)}
        className="absolute top-4 right-4 z-50 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white"
        suppressHydrationWarning={true}
      >
        ✕
      </button>

      {/* Viewer */}
      <iframe
        src={viewerLink}
        className="w-full h-full"
      />

    </div>

  </div>

)}
        </section>
    );
};

export default Certifications;