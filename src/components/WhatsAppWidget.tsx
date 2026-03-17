"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // The phone number and pre-filled message
  const phoneNumber = "917801929198";
  const message = "Hi Mechanical Wings, I am looking to service my AC...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 250, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-[300px] overflow-hidden border border-gray-200"
            style={{ transformOrigin: "bottom right" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1EBEA5] to-[#00E676] p-4 flex items-center justify-between text-white shadow-sm relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/50">
                    <Image 
                      src="/logo-transparent.png" 
                      alt="Mechanical Wings" 
                      width={40} 
                      height={40} 
                      className="object-contain w-8 h-8 drop-shadow-sm"
                    />
                  </div>
                  {/* Online dot indicator */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Mechanical Wings</h3>
                  <p className="text-[11px] text-green-50 font-medium">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-black/10 p-1.5 rounded-full text-white transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Chat Area */}
            <div className="bg-[#E5DDD5] p-5 h-40 relative">
              {/* WhatsApp background pattern (subtle placeholder) */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-white p-3.5 rounded-b-xl rounded-tr-xl rounded-tl-sm shadow-sm text-[13px] text-gray-800 w-11/12 relative z-10"
              >
                <p className="leading-relaxed">
                  Hello! 👋 <br/> How can we help you with your Air Conditioner today?
                </p>
                <div className="text-[10px] text-gray-400 text-right mt-1.5">Just now</div>
              </motion.div>
            </div>

            {/* Footer/Action */}
            <div className="p-4 bg-white border-t border-gray-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <Send size={16} className="-ml-1" />
                Start Chat Setup
              </a>
              <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center gap-1">
                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Redirects to WhatsApp securely
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#1EBEA5] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/40 transition-colors z-[101]"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}