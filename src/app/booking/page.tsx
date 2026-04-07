/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
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
  Download,
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

export default function CalculatorPage() {
  const [step, setStep] = useState(1);

  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  
  const [paymentId, setPaymentId] = useState("");
  const [receiptNo, setReceiptNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const totalAmount = useMemo(() => {
    let sum = 0;
    selectedServices.forEach(id => { sum += MAIN_SERVICES.find(s => s.id === id)?.price || 0; });
    return sum;
  }, [selectedServices]);

  const nextStep = () => {
    if (step === 1 && selectedServices.length === 0) return;
    setStep(s => s + 1);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(s => Math.max(1, s - 1));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const resetCalc = () => {
    setStep(1);
    setSelectedServices([]);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
    setPaymentId("");
    setReceiptNo("");
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const emailSentRef = useRef(false);

  useEffect(() => {
    if (step === 4 && paymentId && !emailSentRef.current) {
      emailSentRef.current = true;
      
      setTimeout(async () => {
        const element = document.getElementById("invoice-container");
        if (!element) return;
        
        const container = document.createElement("div");
        container.className = "pdf-export-container";
        container.style.position = "absolute";
        container.style.top = "-9999px";
        container.style.left = "-9999px";
        container.style.width = "800px";
        container.style.padding = "0";

        const clonedElement = element.cloneNode(true) as HTMLElement;
        const hideElements = clonedElement.querySelectorAll(".print\\:hidden");
        hideElements.forEach(el => (el as HTMLElement).style.display = "none");
        
        container.appendChild(clonedElement);
        document.body.appendChild(container);

        try {
          const canvas = await html2canvas(clonedElement, { 
            windowWidth: 800, 
            scale: 1.5, 
            useCORS: true 
          });
          const imgData = canvas.toDataURL("image/jpeg", 0.7);
          const pdfWidth = 210; // A4 width in mm
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          const finalHeight = Math.max(297, pdfHeight);
          const pdf = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: [pdfWidth, finalHeight]
          });
          
          pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
          const pdfBase64 = pdf.output('datauristring');
          
          await fetch('/api/send-invoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              customerName,
              customerEmail,
              paymentId,
              pdfData: pdfBase64
            })
          });
        } catch (err) {
          console.error("Failed to automatically send invoice:", err);
        } finally {
          document.body.removeChild(container);
        }
      }, 1000); // 1 second delay to ensure the UI has finished animating and rendering
    }
  }, [step, paymentId, customerName, customerEmail]);

  const downloadPDF = async () => {
    const element = document.getElementById("invoice-container");
    if (!element) return;
    
    // Create an off-screen container for rendering
    const container = document.createElement("div");
    container.className = "pdf-export-container";
    container.style.position = "absolute";
    container.style.top = "-9999px";
    container.style.left = "-9999px";
    container.style.width = "800px";
    container.style.padding = "0";

    // Clone the node deeply
    const clonedElement = element.cloneNode(true) as HTMLElement;
    
    // Hide elements we don't want printed in the clone
    const hideElements = clonedElement.querySelectorAll(".print\\:hidden");
    hideElements.forEach(el => (el as HTMLElement).style.display = "none");
    
    // Temporarily append to body to render
    container.appendChild(clonedElement);
    document.body.appendChild(container);

    try {
      const canvas = await html2canvas(clonedElement, { 
        windowWidth: 800, 
        scale: 2, 
        useCORS: true 
      });
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const finalHeight = Math.max(297, pdfHeight);
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [pdfWidth, finalHeight]
      });
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Mechanical_Wings_Invoice.pdf");
    } catch (error) {
      console.error("Could not generate PDF", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      // Clean up the off-screen element
      document.body.removeChild(container);
    }
  };

  const handlePayment = async () => {
    if (!customerName || !customerPhone || !customerEmail) {
      alert("Please fill in your name, phone number, and email address");
      return;
    }
    
    // Validating basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      alert("Please enter a valid email address");
      return;
    }
    
    setIsProcessing(true);
    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });
      
      const order = await res.json();
      if (order.error) throw new Error(order.error);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_dummy",
        amount: order.amount,
        currency: order.currency,
        name: "Mechanical Wings",
        description: "AC Services Booking",
        order_id: order.id,
        handler: async function (response: { razorpay_payment_id: string }) {
          const newReceiptNo = Math.floor(Math.random() * 90000) + 10000 + "";
          const newInvoiceDate = new Date().toLocaleDateString('en-IN');

          setPaymentId(response.razorpay_payment_id);
          setReceiptNo(newReceiptNo);
          setInvoiceDate(newInvoiceDate);
          setStep(4); // Skip to invoice
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        },
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        theme: {
          color: "#1e3a5f"
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as unknown as { Razorpay: any }).Razorpay(options);
      rzp.on("payment.failed", function (response: { error: { description: string } }) {
        alert("Payment Failed: " + response.error.description);
      });
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment initialization failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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
            
            {/* STEP 1: Select Services */}
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
                </div>

                {/* Right Column: Sticky Summary */}
                <div className="lg:col-span-4 relative">
                  <div className="sticky top-28 bg-[#1e3a5f] rounded-3xl p-6 text-white shadow-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
                    
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-blue-400/30 pb-4">
                      <FileText size={20} /> Order Estimate
                    </h3>

                    <div className="space-y-4 min-h-[150px]">
                      {selectedServices.length === 0 ? (
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
                          placeholder="Email Address *" 
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1e3a5f] outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="mt-8 bg-amber-50 p-4 rounded-xl border border-amber-100 flex items-start gap-3">
                      <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-amber-800 text-sm">Secure Checkout by Razorpay</h4>
                        <p className="text-xs text-amber-700/80 mt-1">Your payment is encrypted and processed securely. We don&apos;t store your card or bank details.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Payment Confirm */}
                  <div className="w-full lg:w-[400px] bg-linear-to-br from-[#1e3a5f] to-[#152a45] p-8 lg:p-12 text-center text-white flex flex-col justify-center">
                    <div className="mb-6 flex justify-between items-end">
                      <span className="text-blue-200 text-sm">Total Amount</span>
                      <span className="text-3xl font-bold text-amber-400">₹{totalAmount}</span>
                    </div>

                    <div className="text-sm text-blue-200 mb-8 border-b border-white/10 pb-6">
                      <p className="font-semibold text-white mb-2">Pay securely with Razorpay</p>
                      <p>Use Credit Card, UPI, NetBanking, or Wallets. You will receive a standard Razorpay invoice upon successful payment.</p>
                    </div>

                    <button 
                      onClick={handlePayment}
                      disabled={!customerName || !customerPhone || !customerEmail || isProcessing}
                      className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-[#1e3a5f] py-4 rounded-xl font-bold flex flex-col items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      <span className="flex items-center gap-2">
                        {isProcessing ? "Processing..." : (
                          <><CheckCircle2 size={18} /> Pay Securely with Razorpay</>
                        )}
                      </span>
                    </button>
                  </div>
                  
                </div>
              </motion.div>
            )}

            {/* STEP 4: Invoice UI (Printable) */}
            {step === 4 && (
              <motion.div
                key="step4"
                id="invoice-container"
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
                  <button
                    onClick={downloadPDF}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
                  >
                    <Download size={18} /> Download PDF
                  </button>
                </div>

                <div className="p-4 sm:p-12 print:p-0 print:border-none w-full bg-white">
                  {/* Invoice Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-gray-100 pb-8 mb-8 gap-6">
                    <div>
                      <img src="/logo-transparent.png" alt="Mechanical Wings" className="h-16 mb-4 filter contrast-100 grayscale-0" />
                      <h2 className="text-4xl font-black text-[#1e3a5f] tracking-tight">INVOICE</h2>
                      <p className="text-sm text-gray-500 font-mono mt-1">Receipt No: #{receiptNo}</p>
                      <p className="text-sm text-gray-500">Date: {invoiceDate}</p>
                      <p className="text-sm font-bold text-green-700 mt-2 bg-green-50 border border-green-100 px-3 py-1 rounded inline-flex items-center gap-1 max-w-full"><Hash size={14}/> <span className="truncate">Payment ID: {paymentId}</span></p>
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
                  <div className="rounded-2xl border border-gray-200 overflow-hidden overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[300px] sm:min-w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Item Description</th>
                          <th className="py-2 sm:py-4 px-3 sm:px-6 text-gray-600 font-bold text-xs sm:text-sm uppercase tracking-wider text-right w-24 sm:w-32">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {selectedServices.map(id => {
                          const srv = MAIN_SERVICES.find(s => s.id === id);
                          return (
                            <tr key={id} className="bg-white">
                              <td className="py-3 sm:py-4 px-3 sm:px-6">
                                <div className="font-bold text-gray-800 text-sm sm:text-base">{srv?.name}</div>
                                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{srv?.desc}</div>
                              </td>
                              <td className="py-3 sm:py-4 px-3 sm:px-6 text-right font-medium text-gray-800">₹{srv?.price}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Totals */}
                  <div className="flex justify-end mt-6 flex-col sm:flex-row items-end">
                    <div className="w-full sm:w-64 bg-gray-50 rounded-xl p-4 border border-gray-100">
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
    </>
  );
}