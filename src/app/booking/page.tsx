"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  Wrench, 
  Shield, 
  CheckCircle2,
  RefreshCcw,
  ArrowRight,
  ArrowLeft,
  ScanQrCode,
  ShieldCheck,
  Plus,
  PenTool,
  Wind,
  Fan,
  FileText,
  Printer,
  Check,
  MessageCircle,
  Mail,
  Phone,
  User,
  Hash,
  Lock
} from "lucide-react";

const MAIN_SERVICES = [
  { id: "s1", name: "AC Deep Cleaning", price: 599, desc: "Thorough cleaning of indoor & outdoor units", icon: Shield },
  { id: "s2", name: "AC Installation", price: 1499, desc: "Standard split AC installation", icon: Wrench },
  { id: "s3", name: "AC Uninstallation", price: 799, desc: "Safe removal and packing of AC", icon: PenTool },
  { id: "s4", name: "Gas Refill", price: 2499, desc: "Leak fixing and full gas top-up", icon: Wind },
  { id: "s5", name: "PCB Repair", price: 1999, desc: "Circuit board diagnostics and repair", icon: Fan },
];

const ADD_ONS = [
  { id: "a1", name: "Outdoor Stand Fitting", price: 499, desc: "Heavy-duty wall bracket installation" },
  { id: "a2", name: "Extra Copper Pipe (per 3m box)", price: 899, desc: "Premium copper wiring extension" },
  { id: "a3", name: "Foam Insulation", price: 199, desc: "High-quality pipe insulation" },
];

export default function CalculatorPage() {
  const [step, setStep] = useState(1);

  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [adminCode, setAdminCode] = useState("");

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const totalAmount = useMemo(() => {
    let sum = 0;
    selectedServices.forEach(id => { sum += MAIN_SERVICES.find(s => s.id === id)?.price || 0; });
    selectedAddons.forEach(id => { sum += ADD_ONS.find(a => a.id === id)?.price || 0; });
    return sum;
  }, [selectedServices, selectedAddons]);

  const getUpiUrl = (price: number) => {
    const upiStr = `upi://pay?pa=jainilvyas1414@oksbi&pn=Mechanical%20Wings&am=${price}&cu=INR`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=1e3a5f&data=${encodeURIComponent(upiStr)}`;
  };

  const nextStep = () => {
    if (step === 1 && selectedServices.length === 0) return;
    if (step === 2 && (!customerName || !customerPhone || utrNumber.length !== 12)) return;
    if (step === 3) {
      // Secret Admin Formula: First 2 digits + Last 2 digits of the user's UTR
      const expectedCode = utrNumber.slice(0, 2) + utrNumber.slice(-2);
      if (adminCode !== expectedCode) {
        alert("Invalid Approval Code! Please check the code provided by the Admin.");
        return;
      }
    }
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const resetCalc = () => {
    setStep(1);
    setSelectedServices([]);
    setSelectedAddons([]);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
    setUtrNumber("");
    setAdminCode("");
  };

  const handlePrint = () => {
    window.print();
  };

  const getAdminMessage = () => {
    const servicesText = selectedServices.map(id => MAIN_SERVICES.find(s => s.id === id)?.name).join(", ");
    const addonsText = selectedAddons.map(id => ADD_ONS.find(a => a.id === id)?.name).join(", ");
    
    return encodeURIComponent(
      `New Verification Request!\n\n` +
      `Customer: ${customerName}\n` +
      `Phone: ${customerPhone}\n` +
      (customerEmail ? `Email: ${customerEmail}\n` : '') +
      `\nAmount Paid: ₹${totalAmount}\n` +
      `Transaction UTR: ${utrNumber}\n\n` +
      `Services Booked: ${servicesText}\n` +
      (addonsText ? `Add-ons: ${addonsText}\n` : '') +
      `\nHello Admin, I have paid the amount and attached my UTR. Please verify this.`
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24 pb-20 print:bg-white print:pt-0 print:pb-0">
      
      {/* Page Header (Hidden on Print) */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center print:hidden">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mb-3">
          Service Estimator & Fast Checkout
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Build your custom AC service package, get an instant estimate, and complete your booking directly.
        </p>
      </div>

      <div className={`mx-auto transition-all ${step === 4 ? 'w-full max-w-4xl print:max-w-full' : 'max-w-6xl px-4 sm:px-6'} print:px-0`}>
        
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Select Services & Addons */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="grid lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Selection */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                
                {/* Main Services */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6 border-b pb-4">
                    <div className="bg-blue-50 p-2 rounded-lg text-[#1e3a5f]">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Core Services</h2>
                      <p className="text-sm text-gray-500">Select one or more services</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {MAIN_SERVICES.map((srv) => (
                      <div 
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          selectedServices.includes(srv.id) 
                          ? 'border-[#1e3a5f] bg-blue-50/50' 
                          : 'border-gray-100 hover:border-blue-100 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                           <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-colors ${selectedServices.includes(srv.id) ? 'bg-[#1e3a5f] border-[#1e3a5f] text-white' : 'border-gray-300'}`}>
                            {selectedServices.includes(srv.id) && <Check size={14} />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 leading-tight">{srv.name}</h3>
                            <p className="text-xs text-gray-500 line-clamp-1">{srv.desc}</p>
                          </div>
                        </div>
                        <div className="font-bold text-[#1e3a5f]">
                          ₹{srv.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add-ons */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6 border-b pb-4">
                    <div className="bg-amber-50 p-2 rounded-lg text-amber-600">
                      <Plus size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Optional Add-ons</h2>
                      <p className="text-sm text-gray-500">Hardware & extra materials</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {ADD_ONS.map((addon) => (
                      <label 
                        key={addon.id}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedAddons.includes(addon.id) ? 'border-amber-400 bg-amber-50/30' : 'border-gray-100 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                           <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-colors ${selectedAddons.includes(addon.id) ? 'bg-amber-500 border-amber-500 text-white' : 'border-gray-300'}`}>
                            {selectedAddons.includes(addon.id) && <Check size={14} />}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-gray-800 leading-tight">{addon.name}</span>
                          </div>
                        </div>
                        <div className="font-bold text-amber-600">₹{addon.price}</div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Summary */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-28 bg-[#1e3a5f] rounded-3xl p-6 text-white shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
                  
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-blue-400/30 pb-4">
                    <FileText size={20} /> Order Estimate
                  </h3>

                  <div className="space-y-4 min-h-[150px]">
                    {selectedServices.length === 0 && selectedAddons.length === 0 ? (
                      <div className="text-blue-200/60 text-sm text-center pt-8">
                        Select services on the left to build your quote.
                      </div>
                    ) : (
                      <>
                        {selectedServices.map(id => {
                          const srv = MAIN_SERVICES.find(s => s.id === id);
                          return (
                            <div key={id} className="flex justify-between text-blue-100 text-sm">
                              <span>{srv?.name}</span>
                              <span className="font-medium text-white">₹{srv?.price}</span>
                            </div>
                          )
                        })}
                        {selectedAddons.length > 0 && <div className="border-t border-blue-400/20 my-2" />}
                        {selectedAddons.map(id => {
                          const addon = ADD_ONS.find(a => a.id === id);
                          return (
                            <div key={id} className="flex justify-between text-amber-200/80 text-sm">
                              <span>+ {addon?.name}</span>
                              <span className="font-medium text-amber-400">₹{addon?.price}</span>
                            </div>
                          )
                        })}
                      </>
                    )}
                  </div>

                  <div className="mt-8 border-t border-blue-400/30 pt-4 flex items-end justify-between">
                    <span className="text-blue-200">Estimated Total</span>
                    <span className="text-3xl font-black text-amber-400">₹{totalAmount}</span>
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={selectedServices.length === 0}
                    className="w-full mt-6 bg-amber-500 hover:bg-amber-400 text-[#1e3a5f] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    Proceed to Payment 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Checkout / Contact Details & Payment in one panel */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Side: Contact Form */}
                <div className="flex-1 p-8 lg:p-12 lg:border-r border-gray-100">
                  <button onClick={prevStep} className="text-gray-500 hover:text-gray-800 text-sm font-medium flex items-center gap-1 mb-8">
                    <ArrowLeft size={16} /> Back to Services
                  </button>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Customer Details</h2>
                  <p className="text-gray-500 mb-8 text-sm">Please fill this out so we know where to send the invoice and who to contact.</p>

                  <div className="space-y-5">
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input 
                        type="text" 
                        placeholder="Full Name *" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1e3a5f] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input 
                        type="tel" 
                        placeholder="Phone Number *" 
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1e3a5f] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input 
                        type="email" 
                        placeholder="Email Address (Optional)" 
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1e3a5f] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="mt-8 bg-amber-50 p-4 rounded-xl border border-amber-100 flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-amber-800 text-sm">Secure Booking</h4>
                      <p className="text-xs text-amber-700/80 mt-1">We do not use automated payment gateways to save you extra fees. Please scan the QR code on the right and input your UTR exactly.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: QR & Payment Confirm */}
                <div className="w-full lg:w-[400px] bg-linear-to-br from-[#1e3a5f] to-[#152a45] p-8 lg:p-12 text-center text-white flex flex-col justify-center">
                  <div className="mb-6 flex justify-between items-end">
                    <span className="text-blue-200 text-sm">Total Amount</span>
                    <span className="text-3xl font-bold text-amber-400">₹{totalAmount}</span>
                  </div>

                  <div className="bg-white p-4 rounded-2xl mx-auto w-fit mb-4 shadow-xl">
                    <img 
                      src={getUpiUrl(totalAmount)} 
                      alt="UPI Payment QR Code" 
                      className="w-[180px] h-[180px] rounded-lg mb-3"
                    />
                    <div className="flex items-center justify-center gap-2 text-[#1e3a5f] font-bold text-sm bg-gray-50 py-2 rounded-lg">
                      <ScanQrCode size={16} />
                      Scan to Pay
                    </div>
                  </div>

                  <div className="text-sm text-blue-200 mb-8 border-b border-white/10 pb-6">
                    Pay securely via GPay, PhonePe, or Paytm.<br/>
                    <div className="font-mono mt-2 bg-black/20 py-1 px-3 rounded inline-block">UPI: jainilvyas1414@oksbi</div>
                  </div>

                  <div className="text-left mb-6 relative">
                    <label className="block text-xs font-semibold mb-2 text-amber-300 flex items-center gap-2">
                      <Hash size={14} /> Enter 12-Digit UTR/Reference No. *
                    </label>
                    <input 
                      type="text" 
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value.replace(/\D/g, ''))}
                      maxLength={12}
                      placeholder="e.g. 312345678901"
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-white/5 text-white placeholder-white/30 tracking-widest outline-none transition-all font-mono ${
                        utrNumber.length > 0 && utrNumber.length < 12 
                          ? 'border-red-400 focus:bg-white/10' 
                          : 'border-white/20 focus:border-amber-400 focus:bg-white/10'
                      }`}
                    />
                    {utrNumber.length > 0 && utrNumber.length < 12 && (
                      <p className="text-red-400 text-xs mt-2 absolute -bottom-5 left-0">UTR must be exactly 12 numeric digits.</p>
                    )}
                  </div>

                  <button 
                    onClick={nextStep}
                    disabled={!customerName || !customerPhone || utrNumber.length !== 12}
                    className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-[#1e3a5f] py-4 rounded-xl font-bold flex flex-col items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Submit for Verification</span>
                  </button>
                </div>
                
              </div>
            </motion.div>
          )}

          {/* STEP 3: Admin Verification Wall */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center max-w-2xl mx-auto"
            >
              <div className="mx-auto w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Awaiting Admin Verification</h2>
              <p className="text-gray-500 mb-8">To confirm your booking, your invoice is temporarily locked. Please follow the two steps below.</p>
               
              <div className="bg-gray-50 rounded-2xl p-6 text-left mb-6 border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1e3a5f]" />
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="bg-[#1e3a5f] text-white w-6 h-6 rounded-full inline-flex justify-center items-center text-xs">1</span> 
                  Send details to Admin via SMS
                </h3>
                <p className="text-sm text-gray-600 mb-5 pl-8">Send your generated payment UTR directly to the admin via SMS. They will check the bank and reply to you with a 4-digit code.</p>
                <div className="pl-8">
                  <a 
                    href={`sms:+916359257718?body=${getAdminMessage()}`}
                    className="inline-flex justify-center bg-[#1e3a5f] text-white px-6 py-3 rounded-xl text-sm font-bold items-center gap-2 hover:bg-[#152a45] transition-all shadow-md hover:-translate-y-1"
                  >
                    <MessageCircle size={20} />
                    Send SMS Request
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1e3a5f]" />
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="bg-[#1e3a5f] text-white w-6 h-6 rounded-full inline-flex justify-center items-center text-xs">2</span> 
                  Enter Approval Code
                </h3>
                <p className="text-sm text-gray-600 mb-5 pl-8">Once the admin replies with "Done" and your 4-digit Approval Code, enter it below to generate the invoice.</p>
                <div className="pl-8 flex flex-col sm:flex-row gap-3">
                   <div className="relative">
                    <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value={adminCode}
                      onChange={(e) => setAdminCode(e.target.value.replace(/\D/g, ''))}
                      maxLength={4}
                      placeholder="****"
                      className="w-full sm:w-32 pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all font-mono text-center text-lg tracking-[0.5em]"
                    />
                   </div>
                   <button 
                     onClick={nextStep}
                     disabled={adminCode.length !== 4}
                     className="flex-1 bg-[#1e3a5f] hover:bg-[#152a45] text-white py-3 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                   >
                     Unlock Invoice <ArrowRight size={18} />
                   </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Invoice UI (Printable) */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden print:shadow-none print:border-none"
            >
              <div className="bg-green-50 border-b border-green-100 p-4 sm:p-6 print:hidden flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-2 rounded-full text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900">Payment Verified ✅</h3>
                    <p className="text-sm text-green-700">Your invoice is ready. Keep it for your records.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button 
                    onClick={handlePrint}
                    className="flex-1 sm:flex-none justify-center bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    <Printer size={16} /> Print / Save PDF
                  </button>
                </div>
              </div>

              <div className="p-8 sm:p-12 print:p-0 print:border-none w-full bg-white">
                {/* Invoice Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-gray-100 pb-8 mb-8 gap-6">
                  <div>
                    <img src="/logo-transparent.png" alt="Mechanical Wings" className="h-16 mb-4 filter contrast-100 grayscale-0" />
                    <h2 className="text-4xl font-black text-[#1e3a5f] tracking-tight">INVOICE</h2>
                    <p className="text-sm text-gray-500 font-mono mt-1">Receipt No: #{Math.floor(Math.random() * 90000) + 10000}</p>
                    <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString('en-IN')}</p>
                    <p className="text-sm font-bold text-green-700 mt-2 bg-green-50 border border-green-100 px-3 py-1 rounded inline-flex items-center gap-1"><Hash size={14}/> UTR Verified: {utrNumber}</p>
                  </div>
                  <div className="text-left sm:text-right bg-gray-50 p-4 rounded-xl w-full sm:w-auto">
                    <div className="font-bold text-xl text-gray-800 mb-1">Mechanical Wings</div>
                    <p className="text-sm text-gray-600">Premium AC Services</p>
                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-1 sm:justify-end"><Phone size={14}/> +91 78019 29198</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 sm:justify-end"><Mail size={14}/> mechanicalwings3008@gmail.com</p>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="mb-10">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Invoice Billed To</h4>
                  <div className="border-l-4 border-[#1e3a5f] pl-4">
                    <p className="font-bold text-xl text-gray-800">{customerName}</p>
                    <p className="text-gray-600 flex items-center gap-2 mt-1"><Phone size={14}/> {customerPhone}</p>
                    {customerEmail && <p className="text-gray-600 flex items-center gap-2 mt-1"><Mail size={14}/> {customerEmail}</p>}
                  </div>
                </div>

                {/* Table */}
                <div className="rounded-2xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="py-4 px-6 text-gray-600 font-bold text-sm uppercase tracking-wider">Item Description</th>
                        <th className="py-4 px-6 text-gray-600 font-bold text-sm uppercase tracking-wider text-right w-32">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedServices.map(id => {
                        const srv = MAIN_SERVICES.find(s => s.id === id);
                        return (
                          <tr key={id} className="bg-white">
                            <td className="py-4 px-6">
                              <div className="font-bold text-gray-800">{srv?.name}</div>
                              <div className="text-sm text-gray-500 mt-0.5">{srv?.desc}</div>
                            </td>
                            <td className="py-4 px-6 text-right font-medium text-gray-800">₹{srv?.price}</td>
                          </tr>
                        )
                      })}
                      {selectedAddons.map(id => {
                        const addon = ADD_ONS.find(a => a.id === id);
                        return (
                          <tr key={id} className="bg-gray-50/50">
                            <td className="py-4 px-6">
                              <div className="font-semibold text-gray-700">{addon?.name} <span className="text-xs font-normal text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Add-on</span></div>
                              <div className="text-sm text-gray-500 mt-0.5">{addon?.desc}</div>
                            </td>
                            <td className="py-4 px-6 text-right font-medium text-gray-700">₹{addon?.price}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end mt-6">
                  <div className="w-64 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex justify-between py-1 text-gray-600 text-sm">
                      <span>Subtotal</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between py-1 text-gray-600 text-sm border-b border-gray-200 pb-3 mb-3">
                      <span>Tax / Fees</span>
                      <span>₹0</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-black text-[#1e3a5f]">
                      <span>Total Paid</span>
                      <span>₹{totalAmount}</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-200 text-center">
                  <div className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full font-bold text-sm mb-4">
                    <CheckCircle2 size={16} /> PAYMENT RECEIVED & VERIFIED
                  </div>
                  <p className="text-gray-500 text-sm">
                    Thank you for choosing Mechanical Wings! We appreciate your business.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-center print:hidden">
                <button onClick={resetCalc} className="text-gray-500 hover:text-gray-800 text-sm font-medium flex items-center gap-2 transition-colors">
                  <RefreshCcw size={16} /> Start New Booking
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}