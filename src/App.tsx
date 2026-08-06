import React, { useState, useRef, memo } from 'react';
import { 
  motion, 
  AnimatePresence,
  useMotionValue, 
  useSpring, 
  useTransform,
  useMotionTemplate
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import { 
  CreditCard, 
  Wallet, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Zap,
  Activity
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animation configs
const springConfig = { type: "spring" as const, stiffness: 300, damping: 30 };
const staggerConfig: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

// 1. Editorial Word-Level Text Reveal
const EditorialHeadline = memo(({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight text-white flex flex-wrap justify-center gap-x-4">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden relative">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0, rotate: 5 }}
            animate={{ y: "0%", opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08
            }}
          >
            {word === "Teams." ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-200">
                {word}
              </span>
            ) : (
              word
            )}
          </motion.span>
        </span>
      ))}
    </h1>
  );
});
EditorialHeadline.displayName = 'EditorialHeadline';

// 2. Interactive 3D Mouse Parallax Card (HTML)
const ParallaxCard = memo(({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(213, 179, 112, 0.08) 0%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={springConfig}
      className={`relative group overflow-hidden ${className} will-change-transform`}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
});
ParallaxCard.displayName = 'ParallaxCard';

// 3. Magnetic CTA Button
const MagneticButton = memo(({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.2); 
    y.set(offsetY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={`relative group ${className} will-change-transform`}
    >
      {children}
    </motion.button>
  );
});
MagneticButton.displayName = 'MagneticButton';

// 4. Dynamic Number Counter
const AnimatedCounter = memo(({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const count = useMotionValue(0);
  const springCount = useSpring(count, { stiffness: 50, damping: 20 });
  const display = useTransform(springCount, (latest) => `${prefix}${Math.round(latest).toLocaleString()}${suffix}`);

  return (
    <motion.span 
      className="font-variant-numeric tabular-nums font-bold"
      onViewportEnter={() => count.set(value)}
      viewport={{ once: true, margin: "-100px" }}
    >
      {display}
    </motion.span>
  );
});
AnimatedCounter.displayName = 'AnimatedCounter';

// 5. Global 3D Scene Background (Memoized to prevent React re-renders)
const Scene3D = memo(() => {
  const groupRef = useRef<THREE.Group>(null);
  const layer1Ref = useRef<THREE.Mesh>(null); 
  const layer2Ref = useRef<THREE.Mesh>(null); 
  const layer3Ref = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!layer1Ref.current || !layer2Ref.current || !layer3Ref.current || !groupRef.current) return;

    // Initial exploded state (Chaos)
    gsap.set(layer1Ref.current.position, { z: -8, x: -5, y: 3 });
    gsap.set(layer1Ref.current.rotation, { x: 1, y: 2 });
    
    gsap.set(layer2Ref.current.position, { z: -2, x: 5, y: -4 });
    gsap.set(layer2Ref.current.rotation, { x: -1, y: -1 });
    
    gsap.set(layer3Ref.current.position, { z: 6, x: 0, y: 6 });
    gsap.set(layer3Ref.current.rotation, { x: 0.5, y: -0.5 });
    
    gsap.set(groupRef.current.rotation, { y: Math.PI / 3, x: Math.PI / 6 });
    gsap.set(groupRef.current.position, { z: -5 });

    // GSAP Scroll Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // PHASE 1: Hero Convergence
    tl.to([layer1Ref.current.position, layer2Ref.current.position, layer3Ref.current.position], {
      x: 0, y: 0, z: (i) => (i === 0 ? 0 : 0.026),
      duration: 1.5,
      ease: "power2.inOut"
    }, 0);
    
    tl.to([layer1Ref.current.rotation, layer2Ref.current.rotation, layer3Ref.current.rotation], {
      x: 0, y: 0, z: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0);

    tl.to(groupRef.current.position, {
      z: 0, y: 1.5, x: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0);
    
    tl.to(groupRef.current.rotation, {
      y: 0, x: 0.2, z: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0);

    // PHASE 2: Features Section
    tl.to(groupRef.current.position, {
      x: 3, y: 0, z: -1,
      duration: 3,
      ease: "none"
    }, 1.5);

    tl.to(groupRef.current.rotation, {
      y: -Math.PI / 6, x: 0.1, z: -0.1,
      duration: 3,
      ease: "none"
    }, 1.5);

    // PHASE 3: Pricing Section
    tl.to(groupRef.current.position, {
      x: 0, y: -2, z: -2,
      duration: 3,
      ease: "power1.inOut"
    }, 4.5);

    tl.to(groupRef.current.rotation, {
      y: 0, x: -0.4, z: 0,
      duration: 3,
      ease: "power1.inOut"
    }, 4.5);

    // PHASE 4: FAQ / Footer
    tl.to(groupRef.current.position, {
      y: 10, z: -10,
      duration: 2.5,
      ease: "power2.in"
    }, 7.5);

  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#D5B370" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#0B132B" />

      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          {/* Layer 1: Debit Card Body (Obsidian Matte + Clearcoat) */}
          <RoundedBox ref={layer1Ref} args={[5.06, 3.18, 0.05]} radius={0.15} smoothness={4}>
            <meshPhysicalMaterial 
              color="#050505" 
              metalness={0.9} 
              roughness={0.1} 
              clearcoat={1} 
              clearcoatRoughness={0.1} 
            />
          </RoundedBox>

          {/* Layer 2: Gold EMV Chip */}
          <RoundedBox ref={layer2Ref} args={[0.7, 0.5, 0.01]} radius={0.05} smoothness={2}>
            <meshStandardMaterial color="#D5B370" roughness={0.2} metalness={1} />
          </RoundedBox>

          {/* Layer 3: Embossed Text & Details */}
          <group ref={layer3Ref}>
            {/* ONYX Logo */}
            <Text position={[1.5, -0.9, 0.03]} fontSize={0.4} color="#ffffff" letterSpacing={0.3} fontStyle="italic" fontWeight="bold">
              ONYX
            </Text>
            {/* Card Number */}
            <Text position={[-1.2, -0.2, 0.03]} fontSize={0.28} color="#D5B370" letterSpacing={0.15} material-roughness={0.1} material-metalness={0.9}>
              4123 8900 5678 9012
            </Text>
            {/* Expiry */}
            <Text position={[-0.8, -0.6, 0.03]} fontSize={0.12} color="#A0ABC0" letterSpacing={0.1}>
              VALID THRU 12/28
            </Text>
            {/* Cardholder */}
            <Text position={[-1.2, -0.9, 0.03]} fontSize={0.22} color="#D5B370" letterSpacing={0.15} material-roughness={0.1} material-metalness={0.9}>
              ALEXANDER WRIGHT
            </Text>
            {/* Payment Network */}
            <Text position={[1.6, 1.1, 0.03]} fontSize={0.35} color="#A0ABC0" fontStyle="italic" fontWeight="bold">
              VISA
            </Text>
          </group>
        </Float>
      </group>
    </>
  );
});
Scene3D.displayName = 'Scene3D';

// 6. Extracted FAQ Component to isolate re-renders
const FaqSection = memo(() => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  return (
    <section id="faq" className="py-40 px-6 md:px-12 bg-transparent">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center space-y-4"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white drop-shadow-xl">Frequently Asked Questions</h2>
        </motion.div>
         
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerConfig}
           className="flex flex-col gap-4"
         >
           {[
             { q: "Is my money safe with Onyx?", a: "Yes. Your funds are held by our partner banks, which are FDIC members. This means your deposits are insured up to $250,000." },
             { q: "How long does it take to get approved?", a: "Most businesses are approved and ready to issue virtual cards within 5 minutes of completing the application." },
             { q: "Do you require a personal guarantee?", a: "No. Onyx relies on your business's cash flow and cash reserves, not your personal credit score. No personal guarantee is required." },
             { q: "Can I integrate with QuickBooks or Xero?", a: "Absolutely. We offer real-time, two-way sync with QuickBooks Online, Xero, and NetSuite on our Growth and Enterprise plans." }
           ].map((faq, i) => (
             <motion.div 
               key={i} 
               variants={fadeUp}
               className="w-full bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-sm hover:border-brand/40 transition-colors"
             >
               <button 
                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
                 className="w-full px-6 py-5 flex items-center justify-between text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand group text-white"
               >
                 {faq.q}
                 <motion.div
                   animate={{ rotate: openFaq === i ? 180 : 0 }}
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   className="bg-canvas/50 p-1.5 rounded-full group-hover:bg-brand/20 group-hover:text-brand transition-colors border border-border"
                 >
                   <ChevronDown className="w-5 h-5 text-text-secondary group-hover:text-brand transition-colors" />
                 </motion.div>
               </button>
               <AnimatePresence initial={false}>
                 {openFaq === i && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     className="px-6 bg-surface/40 backdrop-blur-lg"
                   >
                     <p className="text-text-secondary text-sm leading-relaxed pb-5 pt-2">{faq.a}</p>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
           ))}
         </motion.div>
      </div>
    </section>
  );
});
FaqSection.displayName = 'FaqSection';


function App() {
  const container = useRef<HTMLDivElement>(null);

  // Setup GSAP for HTML text reveal in Hero
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "15% top", 
        scrub: true
      }
    });

    tl.to('.act-1-text', { opacity: 0, y: -50, duration: 0.2 }, 0);
    tl.to('.act-2-text', { opacity: 1, y: 0, duration: 0.2 }, 0.3);
    tl.to('.act-2-text', { opacity: 0, y: -50, duration: 0.2 }, 0.6);
    tl.to('.act-3-ui', { opacity: 1, y: 0, duration: 0.2 }, 0.8);
    
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full font-sans text-text-primary selection:bg-brand selection:text-canvas overflow-x-hidden bg-canvas">
      
      {/* GLOBAL 3D BACKGROUND (Optimized Canvas) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[140px] mix-blend-screen will-change-transform" />
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen will-change-transform" />
        </div>
        
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false, alpha: true }} 
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* HTML CONTENT LAYER (Scrolls normally) */}
      <div className="relative z-10 w-full min-h-[400vh]">
        
        {/* 1. Glassmorphic Sticky Header */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-0 w-full z-50 h-16 bg-surface/30 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 md:px-12 shadow-sm"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(213,179,112,0.4)]">
              <Zap className="w-5 h-5 text-canvas" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">Onyx</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <motion.a whileHover={{ color: '#F4EFDF' }} href="#features" className="transition-colors">Features</motion.a>
            <motion.a whileHover={{ color: '#F4EFDF' }} href="#pricing" className="transition-colors">Pricing</motion.a>
            <motion.a whileHover={{ color: '#F4EFDF' }} href="#faq" className="transition-colors">FAQ</motion.a>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: '#c09c5a' }} 
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 text-sm font-semibold bg-brand text-canvas rounded-full transition-colors shadow-sm"
          >
            Get Started
          </motion.button>
        </motion.header>

        {/* 2. Scroll Storytelling Hero Section */}
        <section className="relative h-[200vh]">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 pointer-events-none">
            
            <div className="act-1-text absolute text-center flex flex-col items-center will-change-transform">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-xl">
                Your capital is fragmented.
              </h2>
              <p className="text-brand text-xl mt-4 font-medium uppercase tracking-widest text-shadow">Spreadsheets. Receipts. Chaos.</p>
            </div>

            <div className="act-2-text absolute text-center opacity-0 translate-y-10 will-change-transform">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-200 drop-shadow-xl">
                Bring clarity to the chaos.
              </h2>
            </div>

            <div className="act-3-ui absolute opacity-0 translate-y-20 w-full max-w-4xl mx-auto space-y-10 flex flex-col items-center mt-32 will-change-transform">
              <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/30 backdrop-blur-md border border-brand/20 text-xs font-medium text-brand shadow-xl">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_rgba(213,179,112,0.8)]"></span>
                Onyx Card is now available globally
              </div>
              
              <EditorialHeadline text="Financial Control, Redefined for Modern Teams." />
              
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed text-center">
                The operating system for your company's money. Issue corporate cards, manage spend, and automate accounting in one unified platform.
              </p>
              
              <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <MagneticButton className="px-8 py-4 text-base font-semibold bg-brand text-canvas rounded-xl shadow-[0_4px_25px_rgba(213,179,112,0.4)] flex items-center gap-2 hover:bg-[#c09c5a] transition-all">
                  Open Free Account
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                
                <MagneticButton className="px-8 py-4 text-base font-semibold bg-surface/30 backdrop-blur-md text-text-primary border border-brand/20 rounded-xl hover:bg-surface/50 transition-colors">
                  Book a Demo
                </MagneticButton>
              </div>
              <p className="text-xs text-text-secondary pt-4 text-center">No credit check required. Setup in 5 minutes.</p>
            </div>
          </div>
        </section>

        {/* 3. Trust Bar */}
        <section className="py-16 bg-surface/20 backdrop-blur-sm border-y border-white/5 flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <div className="flex flex-col items-center gap-2 mb-10">
            <h3 className="text-3xl font-display font-bold text-brand drop-shadow-md">
              <AnimatedCounter value={1000000000} prefix="$" suffix="+" />
            </h3>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest drop-shadow-md">Total Volume Processed</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-5xl flex flex-wrap justify-center md:justify-between items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <div className="flex items-center gap-2"><Layers className="w-6 h-6 text-brand"/> <span className="font-display font-bold text-xl text-white">Acme Corp</span></div>
            <div className="flex items-center gap-2"><Globe2 className="w-6 h-6 text-brand"/> <span className="font-display font-bold text-xl text-white">GlobalScale</span></div>
            <div className="flex items-center gap-2"><Activity className="w-6 h-6 text-brand"/> <span className="font-display font-bold text-xl text-white">Pulse</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-brand"/> <span className="font-display font-bold text-xl text-white">SecureNet</span></div>
          </motion.div>
        </section>

        {/* 4. Interactive Bento Grid */}
        <section id="features" className="py-40 px-6 md:px-12 bg-transparent pointer-events-none">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-20 pointer-events-auto">
            
            <div className="w-full md:w-2/3 flex flex-col gap-20">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="space-y-4 max-w-2xl"
              >
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white drop-shadow-xl">Stop fighting with your bank.</h2>
                <p className="text-lg text-text-secondary drop-shadow-md">Legacy banks were built for a different era. Onyx is engineered for speed, transparency, and global scale.</p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerConfig}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                <ParallaxCard className="md:col-span-2 min-h-[320px] bg-surface/30 backdrop-blur-xl rounded-3xl p-10 border border-white/5 flex flex-col justify-between shadow-lg">
                  <div className="w-14 h-14 bg-canvas/50 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(213,179,112,0.15)]">
                    <CreditCard className="w-7 h-7 text-brand" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold mb-3 text-white">Unlimited Virtual Cards</h3>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-md">Instantly issue unique virtual cards for every software subscription, vendor, and employee expense. Set hard limits and cancel anytime.</p>
                  </div>
                </ParallaxCard>

                <ParallaxCard className="min-h-[320px] bg-surface/30 backdrop-blur-xl rounded-3xl p-10 border border-white/5 flex flex-col justify-between shadow-lg">
                  <div className="w-14 h-14 bg-canvas/50 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(213,179,112,0.15)]">
                    <Wallet className="w-7 h-7 text-brand" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold mb-3 text-white">Zero Hidden Fees</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">No wire fees. No FX markup. Absolute transparency on every transaction.</p>
                  </div>
                </ParallaxCard>

                <ParallaxCard className="min-h-[320px] bg-surface/30 backdrop-blur-xl rounded-3xl p-10 border border-white/5 flex flex-col justify-between shadow-lg">
                  <div className="w-14 h-14 bg-canvas/50 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(213,179,112,0.15)]">
                    <Globe2 className="w-7 h-7 text-brand" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold mb-3 text-white">Global Reach</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">Hold balances in 30+ currencies and pay vendors across 150 countries instantly.</p>
                  </div>
                </ParallaxCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Pricing Tiers */}
        <section id="pricing" className="py-40 px-6 md:px-12 bg-transparent relative overflow-hidden">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center space-y-4 max-w-2xl mx-auto"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white drop-shadow-xl">Simple, transparent pricing.</h2>
              <p className="text-lg text-text-secondary drop-shadow-md">Start for free, upgrade when you need to scale.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerConfig}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
            >
              <motion.div variants={fadeUp} className="rounded-3xl p-8 bg-surface/20 backdrop-blur-2xl border border-white/5 flex flex-col relative shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-white">Starter</h3>
                <div className="text-4xl font-display font-bold mb-2 text-brand">$0<span className="text-lg text-text-secondary font-sans font-normal">/mo</span></div>
                <p className="text-text-secondary mb-8 text-sm">Perfect for founders and early-stage startups.</p>
                
                <ul className="space-y-4 mb-auto pb-8">
                  {['2 Physical Cards', 'Unlimited Virtual Cards', 'Basic Spend Controls', 'Standard Support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-text-secondary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#3A506B' }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl border border-border font-medium transition-colors backdrop-blur-md bg-canvas/30"
                >
                  Get Started
                </motion.button>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-3xl p-8 bg-surface/40 backdrop-blur-3xl border border-brand/30 flex flex-col relative shadow-[0_0_50px_rgba(213,179,112,0.15)] md:-translate-y-4 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand text-canvas text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                <div className="text-4xl font-display font-bold mb-2 text-brand">$49<span className="text-lg text-text-secondary font-sans font-normal">/mo</span></div>
                <p className="text-text-secondary mb-8 text-sm">For scaling teams that need advanced control.</p>
                
                <ul className="space-y-4 mb-auto pb-8">
                  {['Unlimited Physical Cards', 'Advanced Approval Workflows', 'Accounting Integrations', '2% Cashback on Tech', 'Priority 24/7 Support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#c09c5a' }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-brand text-canvas font-bold shadow-[0_4px_20px_rgba(213,179,112,0.3)] transition-colors"
                >
                  Start Free Trial
                </motion.button>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-3xl p-8 bg-surface/20 backdrop-blur-2xl border border-white/5 flex flex-col relative shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-white">Enterprise</h3>
                <div className="text-4xl font-display font-bold mb-2 text-brand">Custom</div>
                <p className="text-text-secondary mb-8 text-sm">For companies with complex financial operations.</p>
                
                <ul className="space-y-4 mb-auto pb-8">
                  {['Dedicated Account Manager', 'Custom API Rate Limits', 'Multiple Entities', 'SAML SSO', 'White-glove Onboarding'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-text-secondary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#3A506B' }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl border border-border font-medium transition-colors backdrop-blur-md bg-canvas/30"
                >
                  Contact Sales
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 6. FAQ (Optimized isolated component) */}
        <FaqSection />

        {/* 7. Footer */}
        <footer className="py-12 px-6 md:px-12 bg-surface/50 backdrop-blur-2xl border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand flex items-center justify-center shadow-lg">
              <Zap className="w-3 h-3 text-canvas" />
            </div>
            <span className="font-display font-bold text-lg text-white">Onyx</span>
          </div>
          <div className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Onyx Financial Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-text-secondary">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </footer>
        
      </div>
    </div>
  );
}

export default App;
