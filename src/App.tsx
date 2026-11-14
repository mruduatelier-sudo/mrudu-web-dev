import React from "react";
import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { motion } from 'motion/react';
import { Suspense } from 'react';
import * as THREE from 'three';

function Cookie() {
  return <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.65}>
    <group rotation={[0.18, 0.25, -0.12]}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.22, 1.22, 0.28, 64]} />
        <meshStandardMaterial color="#b97843" roughness={0.82} />
      </mesh>
      {Array.from({ length: 17 }).map((_, i) => {
        const a = i * 2.399; const r = 0.22 + (i % 4) * 0.22;
        return <mesh key={i} position={[Math.cos(a)*r, 0.16, Math.sin(a)*r]} rotation={[0.2, a, 0.3]} castShadow>
          <sphereGeometry args={[0.095 + (i%3)*0.018, 16, 12]} />
          <meshStandardMaterial color={i%3===0 ? '#42261d' : '#573024'} roughness={0.5} />
        </mesh>
      })}
      <mesh position={[0.1,0.17,0.2]}><sphereGeometry args={[0.13,16,12]}/><meshStandardMaterial color="#3b2118" roughness={0.5}/></mesh>
    </group>
  </Float>;
}
function Scene() {
  return <Canvas camera={{ position: [0, 0.5, 5.4], fov: 38 }} dpr={[1, 1.25]} shadows>
    <ambientLight intensity={1.2} />
    <directionalLight position={[4,5,4]} intensity={2.2} castShadow shadow-mapSize={[1024,1024]} />
    <pointLight position={[-3,1,2]} intensity={1.1} color="#e8b78d" />
    <Suspense fallback={null}><Cookie /><Environment preset="studio" /></Suspense>
    <ContactShadows position={[0,-1.1,0]} opacity={0.32} scale={5} blur={2.5} far={3} />
    <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.1} maxPolarAngle={2.1} autoRotate autoRotateSpeed={0.45} />
  </Canvas>;
}

export default function App() {
  return <main>
    <nav className="nav"><a className="brand" href="#top">MRUDU<span> ATELIER</span></a><div className="navlinks"><a href="#menu">The menu</a><a href="#story">Our little story</a><a href="#visit">Find us</a></div><a className="nav-cta" href="#visit">Come say hello ↗</a></nav>
    <section className="hero" id="top">
      <div className="hero-copy"><motion.p className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7}}>A LITTLE CORNER. A LOT OF COMFORT.</motion.p>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>Make room<br/>for <em>the good</em><br/>things.</motion.h1>
        <motion.p className="sub" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}>Slow-crafted coffee. Warm, molten cookies.<br/>And moments that taste like a deep breath.</motion.p>
        <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6}}><a className="button dark" href="#menu">Explore the menu <span>↗</span></a><a className="text-link" href="#story">A little about Mrudu</a></motion.div>
        <div className="hero-note"><span className="dot"/> YOUR DAILY PAUSE, IN Dombivli</div>
      </div>
      <div className="hero-visual"><div className="visual-halo"/><div className="scene"><Scene/></div><div className="floating-label label-top">made with<br/><i>a little love</i></div><div className="floating-label label-bottom">THE MOL TEN<br/><b>COOKIE MOMENT</b></div><div className="round-stamp">PAUSE<br/><span>✳</span><br/>INDULGE</div></div>
      <div className="vertical-note">GOOD THINGS TAKE A MOMENT — SCROLL TO SLOW DOWN</div>
    </section>
    <section className="ticker"><div>GOOD COFFEE · SOFT MOMENTS · MELTY COOKIES · GOOD COFFEE · SOFT MOMENTS · MELTY COOKIES ·</div></section>
    <section className="intro" id="story"><p className="eyebrow">THE MRUDU FEELING</p><h2>Not just a café.<br/><em>Your softer place.</em></h2><p className="intro-text">A pause between the plans. A treat after a long day. A familiar little corner where every sip and bite is made to feel special.</p><a className="text-link" href="#visit">Come find your moment ↗</a></section>
    <section className="menu-section" id="menu"><div className="section-head"><div><p className="eyebrow">A FEW HOUSE FAVOURITES</p><h2>Worth slowing<br/><em>down for.</em></h2></div><p>Made in-house. Served with warmth.<br/>Always a little indulgent.</p></div><div className="menu-grid"><article className="menu-card cookie-card"><div className="card-art cookie-art">✦</div><p>01 / THE SIGNATURE</p><h3>Molten Cookie</h3><span>Warm. Gooey. Gone too soon.</span></article><article className="menu-card coffee-card"><div className="card-art coffee-art"><div className="cup"><span>m.</span></div></div><p>02 / THE DAILY RITUAL</p><h3>Slow Bar Coffee</h3><span>Your favourite kind of pause.</span></article><article className="menu-card toast-card"><div className="card-art toast-art">✳</div><p>03 / THE SAVOURY SIDE</p><h3>Mrudu Toasts</h3><span>Little bites, big comfort.</span></article></div></section>
    <section className="quote"><span className="quote-mark">“</span><h2>Life can wait.<br/><em>Take the first bite.</em></h2><p>PAUSE. INDULGE.</p></section>
    <section className="visit" id="visit"><div><p className="eyebrow">YOUR TABLE IS WAITING</p><h2>Come as you are.<br/><em>Leave a little happier.</em></h2></div><div className="visit-info"><p>MRUDU ATELIER<br/>Dombivli, Maharashtra</p><p>OPEN DAILY<br/>10:30 AM — 10:30 PM</p><a className="button cream" href="https://www.instagram.com/mrudu.atelier/" target="_blank" rel="noreferrer">Find us on Instagram ↗</a></div></section>
    <footer><a className="brand" href="#top">MRUDU<span> ATELIER</span></a><p>PAUSE. INDULGE.</p><span>© MRUDU ATELIER · MADE WITH A LITTLE LOVE</span></footer>
  </main>;
}
