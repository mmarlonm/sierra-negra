"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

interface CheckoutProps {
  lang: 'es' | 'en';
  dict: {
    steps: {
      shipping: string;
      payment: string;
      ready: string;
    };
    empty: {
      title: string;
      subtitle: string;
      button: string;
    };
    shipping: {
      title: string;
      name: string;
      zip: string;
      state: string;
      address: string;
      phone: string;
      phone_hint: string;
      continue: string;
    };
    payment: {
      title: string;
      card_number: string;
      card_holder: string;
      card_holder_hint: string;
      expiration: string;
      cvv: string;
      cvv_hint: string;
      secure: string;
      back: string;
      pay: string;
      processing: string;
    };
    success: {
      title: string;
      subtitle: string;
      order_id: string;
      button: string;
    };
    summary: {
      title: string;
      quantity: string;
      subtotal: string;
      shipping_cost: string;
      free: string;
      total: string;
    };
  };
}

export default function Checkout({ lang, dict }: CheckoutProps) {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Datos, 2: Pago, 3: Éxito
  const [loading, setLoading] = useState(false);
  
  // Form States
  const [shippingName, setShippingName] = useState("");
  const [shippingZip, setShippingZip] = useState("");
  const [shippingState, setShippingState] = useState("Puebla");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [orderId, setOrderId] = useState("");
  
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      setOrderId(`SN-${Math.floor(Math.random() * 1000000)}`);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const isShippingValid = shippingName.trim() !== "" && shippingZip.trim() !== "" && shippingAddress.trim() !== "" && shippingPhone.trim().length > 9;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
    }, 2500); // Un poco más de tiempo para apreciar la animación
  };

  // Scroll to top on step change
  useEffect(() => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  if(!items.length && step !== 3) return (
     <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
       <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
         <span className="text-4xl">🛒</span>
       </div>
       <h2 className="text-3xl font-bold text-[#2D5016] mb-2">{dict.empty.title}</h2>
       <p className="text-gray-500 text-lg mb-8 max-w-md">{dict.empty.subtitle}</p>
       <a href={`/${lang}/#products`} className="bg-[#2D5016] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3d6b1f] hover:shadow-lg hover:shadow-green-900/20 transition-all transform hover:-translate-y-1">
         {dict.empty.button}
       </a>
     </div>
  );

  return (
    <div className="bg-[#FDFCF9] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded-full" />
             <div 
               className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#2D5016] z-0 rounded-full transition-all duration-700 ease-in-out" 
               style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
             />
             
             {[1, 2, 3].map((s) => (
               <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-4 ${step >= s ? 'bg-[#2D5016] text-white border-[#2D5016]' : 'bg-white text-gray-400 border-gray-200'}`}>
                   {s < step ? '✓' : s}
                 </div>
                 <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s ? 'text-[#2D5016]' : 'text-gray-400'}`}>
                   {s === 1 ? dict.steps.shipping : s === 2 ? dict.steps.payment : dict.steps.ready}
                 </span>
               </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-12 xl:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 min-h-[500px] relative">
              
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              {step === 1 && (
                <div className="p-8 lg:p-12 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <span className="bg-green-100 text-[#2D5016] p-2 rounded-lg text-xl">📍</span>
                    {dict.shipping.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="md:col-span-2 space-y-2">
                       <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">{dict.shipping.name}</label>
                       <input 
                         className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all" 
                         placeholder="Ej. Juan Pérez"
                         value={shippingName}
                         onChange={(e) => setShippingName(e.target.value)}
                       />
                     </div>
                     
                     <div className="space-y-2">
                       <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">{dict.shipping.zip}</label>
                       <input 
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all" 
                          placeholder="Ej. 75700"
                          value={shippingZip}
                          onChange={(e) => setShippingZip(e.target.value)}
                       />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">{dict.shipping.state}</label>
                        <select 
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all text-gray-600"
                          value={shippingState}
                          onChange={(e) => setShippingState(e.target.value)}
                        >
                          <option>Puebla</option>
                          <option>Veracruz</option>
                          <option>Oaxaca</option>
                          <option>{lang === 'es' ? 'Otro' : 'Other'}</option>
                        </select>
                     </div>

                     <div className="md:col-span-2 space-y-2">
                       <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">{dict.shipping.address}</label>
                       <input 
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all" 
                          placeholder={lang === 'es' ? "Calle, número, colonia..." : "Street, number, neighborhood..."}
                          value={shippingAddress}
                          onChange={(e) => setShippingAddress(e.target.value)}
                       />
                     </div>

                     <div className="md:col-span-2 space-y-2">
                       <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">{dict.shipping.phone}</label>
                       <input 
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all" 
                          placeholder={dict.shipping.phone_hint}
                          value={shippingPhone}
                          onChange={(e) => setShippingPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                       />
                     </div>
                  </div>

                  <div className="flex justify-end mt-12">
                    <button 
                      onClick={() => setStep(2)} 
                      disabled={!isShippingValid}
                      className={`group bg-[#2D5016] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#3d6b1f] hover:shadow-lg hover:shadow-green-900/20 transition-all flex items-center gap-3 ${!isShippingValid ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                    >
                      {dict.shipping.continue}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="p-8 lg:p-12 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <span className="bg-green-100 text-[#2D5016] p-2 rounded-lg text-xl">💳</span>
                    {dict.payment.title}
                  </h2>

                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Visual Card */}
                    <div className="w-full lg:w-1/2 perspective-1000">
                      <div className={`relative w-full aspect-[1.586/1] transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
                         {/* Front */}
                         <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f1c08] via-[#2D5016] to-[#4a8c2a] rounded-2xl shadow-2xl p-6 text-white backface-hidden flex flex-col justify-between overflow-hidden border border-white/10 ring-1 ring-white/20">
                            {/* Glass effect elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute top-20 -left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                            
                            <div className="flex justify-between items-center relative z-10">
                              <div className="w-12 h-8 bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-md shadow-lg border border-yellow-500/40 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-30"></div>
                              </div>
                              <span className="text-lg font-bold italic opacity-90 font-serif tracking-wider">SIERRA CARD</span>
                            </div>

                            <div className="relative z-10 mt-4">
                              <div className="text-2xl tracking-[0.15em] font-mono mb-1 drop-shadow-md text-white/90">
                                {cardNumber || "•••• •••• •••• ••••"}
                              </div>
                            </div>

                            <div className="flex justify-between items-end relative z-10">
                              <div>
                                <div className="text-[9px] uppercase opacity-70 mb-0.5 tracking-widest">{lang === 'es' ? 'Titular' : 'Holder'}</div>
                                <div className="text-sm font-medium uppercase tracking-wide text-white/90 truncate max-w-[180px]">{cardName || (lang === 'es' ? "NOMBRE Y APELLIDO" : "FULL NAME")}</div>
                              </div>
                              <div>
                                <div className="text-[9px] uppercase opacity-70 mb-0.5 tracking-widest text-right">{lang === 'es' ? 'Expira' : 'Expires'}</div>
                                <div className="text-sm font-mono text-white/90">{expDate || "MM/AA"}</div>
                              </div>
                            </div>
                         </div>

                         {/* Back */}
                         <div className="absolute inset-0 w-full h-full bg-gradient-to-bl from-[#1a2e10] to-[#0f0f0f] rounded-2xl shadow-2xl backface-hidden rotate-y-180 overflow-hidden border border-white/10">
                            <div className="w-full h-12 bg-black/80 mt-6 relative z-10"></div>
                            <div className="px-6 mt-6 relative z-10">
                              <div className="bg-white h-10 rounded-sm flex items-center justify-end px-3 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]">
                                <span className="font-mono text-gray-800 font-bold text-lg tracking-widest">{cvv || "•••"}</span>
                              </div>
                              <p className="text-[10px] text-white/50 mt-2 text-right">{dict.payment.cvv_hint}</p>
                            </div>
                            <div className="absolute bottom-6 right-6 opacity-30">
                               <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                            </div>
                         </div>
                      </div>
                      
                      <div className="mt-8 text-center space-y-2">
                         <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                           <span>🔒 {dict.payment.secure}</span>
                         </div>
                      </div>
                    </div>

                    {/* Pay Form */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">{dict.payment.card_number}</label>
                        <div className="relative">
                           <input 
                             className="w-full p-4 pl-12 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all font-mono text-gray-700 shadow-sm placeholder:text-gray-300" 
                             placeholder="0000 0000 0000 0000"
                             maxLength={19}
                             value={cardNumber}
                             onChange={(e) => {
                               const v = e.target.value.replace(/\D/g, '').slice(0, 16);
                               const formatted = v.match(/.{1,4}/g)?.join(' ') || v;
                               setCardNumber(formatted);
                             }}
                             onFocus={() => setFlipped(false)}
                           />
                           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">💳</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">{dict.payment.card_holder}</label>
                        <input 
                          className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all shadow-sm placeholder:text-gray-300" 
                          placeholder={dict.payment.card_holder_hint}
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value.toUpperCase())}
                          onFocus={() => setFlipped(false)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                           <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">{dict.payment.expiration}</label>
                           <input 
                             className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all text-center font-mono shadow-sm placeholder:text-gray-300" 
                             placeholder="MM/AA"
                             maxLength={5}
                             value={expDate}
                             onChange={(e) => {
                               let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                               if (v.length >= 2) v = `${v.slice(0, 2)}/${v.slice(2)}`;
                               setExpDate(v);
                             }}
                             onFocus={() => setFlipped(false)}
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-xs font-bold uppercase text-gray-500 tracking-wider ml-1">{dict.payment.cvv}</label>
                           <div className="relative">
                             <input 
                               type="text"
                               className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-transparent outline-none transition-all text-center font-mono shadow-sm placeholder:text-gray-300" 
                               placeholder="123"
                               maxLength={4}
                               value={cvv}
                               onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                               onFocus={() => setFlipped(true)}
                               onBlur={() => setFlipped(false)}
                             />
                             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs cursor-help" title={dict.payment.cvv_hint}>?</span>
                           </div>
                        </div>
                      </div>

                      <div className="pt-8 flex justify-between items-center bg-gray-50 -mx-8 -mb-8 lg:-mx-12 lg:-mb-12 p-8 lg:p-12 border-t border-gray-100 rounded-b-3xl mt-4">
                         <button onClick={() => setStep(1)} className="text-gray-500 hover:text-[#2D5016] font-medium transition-colors px-4 flex items-center gap-2">
                           ← {dict.payment.back}
                         </button>
                         <button 
                           onClick={handlePay} 
                           disabled={loading || cardNumber.length < 19 || expDate.length < 5 || cvv.length < 3}
                           className={`bg-[#2D5016] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#3d6b1f] hover:shadow-xl hover:shadow-green-900/30 transition-all flex items-center gap-3 transform active:scale-95 ${loading || cardNumber.length < 19 || expDate.length < 5 || cvv.length < 3 ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                         >
                           {loading ? (
                             <>
                               <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/> 
                               {dict.payment.processing}
                             </>
                           ) : (
                             <>
                               {dict.payment.pay} <span className="text-green-200 bg-white/10 px-2 py-0.5 rounded text-sm">${total.toFixed(2)}</span>
                             </>
                           )}
                         </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="p-12 lg:p-20 text-center animate-fade-in-up flex flex-col items-center justify-center min-h-[500px]">
                   <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 relative">
                     <span className="text-5xl text-[#2D5016] relative z-10">✓</span>
                     <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-20"></div>
                   </div>
                   <h2 className="text-3xl font-bold text-gray-800 mb-4">{dict.success.title}</h2>
                   <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
                     {dict.success.subtitle}
                   </p>
                     <div className="bg-gray-50 p-6 rounded-2xl max-w-md mx-auto mb-8 border border-gray-100">
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">{dict.success.order_id}</p>
                        <p className="text-xl font-mono text-gray-800">{mounted ? orderId : '...'}</p>
                     </div>
                   <button 
                     onClick={() => window.location.reload()} 
                     className="bg-[#2D5016] text-white px-10 py-4 rounded-full font-bold hover:bg-[#3d6b1f] transition-all hover:shadow-xl hover:shadow-green-900/10"
                   >
                     {dict.success.button}
                   </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Order Summary */}
          {step < 3 && (
            <div className="lg:col-span-12 xl:col-span-4">
               <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-32">
                 <h3 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">{dict.summary.title}</h3>
                 
                 <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                   {items.map(i => (
                     <div key={i.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 relative">
                          {i.images?.[0] ? 
                            <Image src={i.images[0]} fill className="object-cover" alt={i.name} /> :
                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-300">Img</div>
                          }
                        </div>
                       <div className="flex-1">
                         <h4 className="text-sm font-medium text-gray-800 line-clamp-2">{i.name}</h4>
                         <p className="text-xs text-gray-500 mt-1">{dict.summary.quantity}: {i.quantity}</p>
                       </div>
                       <div className="text-right">
                         <p className="text-sm font-bold text-gray-800">${(i.price * i.quantity).toFixed(2)}</p>
                       </div>
                     </div>
                   ))}
                 </div>

                 <div className="space-y-3 py-4 border-t border-gray-100">
                   <div className="flex justify-between text-gray-500 text-sm">
                     <span>{dict.summary.subtotal}</span>
                     <span>${total.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between text-gray-500 text-sm">
                     <span>{dict.summary.shipping_cost}</span>
                     <span className="text-green-600 font-medium">{dict.summary.free}</span>
                   </div>
                 </div>

                 <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-2">
                   <span className="text-lg font-bold text-gray-800">{dict.summary.total}</span>
                   <span className="text-2xl font-bold text-[#2D5016]">${total.toFixed(2)}</span>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
