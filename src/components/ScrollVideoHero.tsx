"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { Snowflake, Phone, ChevronRight, Star, Loader2 } from "lucide-react";
import Link from "next/link";

const FRAME_COUNT = 240;

const currentFrame = (index: number) => 
  `/ezgif-84199cbc701b8229-jpg/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (i === 1) {
          // Draw first frame immediately when it loads
          const canvas = canvasRef.current;
          const ctx = canvas?.getContext('2d');
          if (canvas && ctx && img) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderImage(canvas, ctx, img);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);

    const handleResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      // Read current scroll progress to know which frame to redraw
      if (canvas && ctx && loadedImages.length > 0) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderImage = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    // Fill background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Scale image to cover canvas (object-cover equivalent)
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    // Maximize image rendering quality
    ctx.imageSmoothingEnabled = true;
    (ctx as CanvasRenderingContext2D & { imageSmoothingQuality: string }).imageSmoothingQuality = "high";
    
    // Draw the high-quality vibrant image at full opacity
    ctx.globalAlpha = 1.0;
    ctx.drawImage(img, 0, 0, img.width, img.height,
                  centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length > 0) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * FRAME_COUNT))
      );
      
      requestAnimationFrame(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        // Ensure the current frame is loaded before drawing
        const img = images[frameIndex];
        if (canvas && ctx && img && img.complete) {
          renderImage(canvas, ctx, img);
        }
      });
    }
  });

  const loadProgress = Math.round((imagesLoaded / FRAME_COUNT) * 100);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center">
        
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
            <p className="text-xl font-bold">Loading 3D Experience...</p>
            <p className="text-gray-400 mt-2">{loadProgress}%</p>
          </div>
        )}

        {/* Background Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtle vignette gradient to keep text readable but keep AC bright in middle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80 pointer-events-none z-0" />
        
        {/* Overlay Content 1 - Intro */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10 text-center"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]) }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Snowflake size={16} />
              Sales & Services
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-md">
            <span className="text-black">Mechanical Wings</span>
            <br />
            <span className="text-amber-600 drop-shadow-xl">
              Air Condition
            </span>
          </h1>
          {/* <p className="text-lg md:text-2xl max-w-2xl text-black drop-shadow-sm font-medium">
            Scroll to explore the cutting-edge 3D anatomy of our premium cooling solutions.
          </p> */}
        </motion.div>

        {/* Part 1 - Compressor */}
        <motion.div 
          className="absolute right-[5%] md:right-[10%] top-[30%] bg-black/50 p-6 rounded-2xl border border-blue-500/40 max-w-sm backdrop-blur-md text-white shadow-2xl z-20"
          style={{ 
            opacity: useTransform(scrollYProgress, [0.30, 0.35, 0.48, 0.53], [0, 1, 1, 0]),
            x: useTransform(scrollYProgress, [0.30, 0.35], [50, 0])
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/50">
              <span className="text-blue-300 font-bold">01</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-300 shadow-sm">High-Tech Compressor</h3>
          </div>
          <p className="text-gray-200 leading-relaxed">
            The heart of the AC system. Our advanced compressors ensure powerful, energy-efficient cooling even in extreme temperatures, completely transforming indoor climates.
          </p>
        </motion.div>

        {/* Part 2 - Evaporator Coils */}
         <motion.div 
          className="absolute left-[5%] md:left-[10%] bottom-[25%] bg-black/50 p-6 rounded-2xl border border-sky-500/40 max-w-sm backdrop-blur-md text-white shadow-2xl z-20"
          style={{ 
            opacity: useTransform(scrollYProgress, [0.52, 0.57, 0.70, 0.75], [0, 1, 1, 0]),
            x: useTransform(scrollYProgress, [0.52, 0.57], [-50, 0])
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400/50">
              <span className="text-sky-300 font-bold">02</span>
            </div>
            <h3 className="text-2xl font-bold text-sky-300 shadow-sm">Copper Evaporator Coils</h3>
          </div>
          <p className="text-gray-200 leading-relaxed">
            100% pure copper coils maximize heat transfer, instantly absorbing warm air from your space. Easy to maintain and built for long-lasting durability.
          </p>
        </motion.div>

        {/* Part 3 - Condenser Fans */}
        <motion.div 
          className="absolute right-[5%] md:right-[15%] top-[40%] bg-black/50 p-6 rounded-2xl border border-amber-500/40 max-w-sm backdrop-blur-md text-white shadow-2xl z-20"
          style={{ 
            opacity: useTransform(scrollYProgress, [0.74, 0.79, 0.88, 0.93], [0, 1, 1, 0]),
            x: useTransform(scrollYProgress, [0.74, 0.79], [50, 0])
          }}
        >
          <div className="flex items-center gap-3 mb-3">
             <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/50">
              <span className="text-amber-300 font-bold">03</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 shadow-sm">Aerodynamic Condenser Fan</h3>
          </div>
          <p className="text-gray-200 leading-relaxed">
            Silent yet powerful. The precision-engineered fan blades effectively dissipate heat outside, ensuring your system runs smoothly under heavy loads.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 bg-black/40 backdrop-blur-sm"
          style={{ opacity: useTransform(scrollYProgress, [0.93, 0.98], [0, 1]) }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg">Experience Premium Cooling</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-xl text-center">
            With over 10 years of experience, we provide end-to-end AC solutions tailored to your unique needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
             <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 shadow-lg transition-all hover:scale-105"
                >
                  <Phone size={18} />
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 backdrop-blur-md transition-all hover:scale-105"
                >
                  Our Services
                  <ChevronRight size={18} />
                </Link>
          </div>
          
           {/* Trust Badges */}
           <div className="flex items-center gap-6 mt-12 justify-center">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">5.0 Rating</span>
                </div>
                <div className="w-px h-6 bg-gray-500" />
                <span className="text-sm text-gray-300">
                  GST Registered Business
                </span>
              </div>
        </motion.div>

      </div>
    </div>
  )
}
