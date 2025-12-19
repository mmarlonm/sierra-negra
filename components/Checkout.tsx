"use client";

import React, { useState } from "react";
import { useCart } from "./CartContext";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = async () => {
    if (!items.length) return;
    setLoading(true);
    try {
      const res = await fetch('/sierra-negra/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      });
      const data = await res.json();
      if (data.url) {
        // redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error('No session URL', data);
        alert('No se pudo iniciar el pago. Revisa la consola.');
      }
    } catch (e) {
      console.error(e);
      alert('Error al iniciar el pago.');
    } finally {
      setLoading(false);
    }
  };

  if (success) return (
    <div className="p-8 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-semibold">Pago recibido</h2>
      <p className="mt-2 text-gray-600">Gracias {name || 'cliente'}. Se ha procesado tu pedido.</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-semibold text-lg">Datos de envío</h3>
        <div className="mt-4 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" className="w-full p-3 border rounded" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Dirección" className="w-full p-3 border rounded" />
          <button onClick={handlePay} disabled={loading || !items.length} className="w-full bg-[#2D5016] text-white px-4 py-3 rounded-full">
            {loading ? 'Procesando...' : `Pagar $${total.toFixed(2)}`}
          </button>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-semibold text-lg">Resumen del pedido</h3>
        <ul className="mt-4 space-y-3">
          {items.map(i => (
            <li key={i.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-gray-500">{i.quantity} × ${i.price.toFixed(2)}</div>
              </div>
              <div className="font-semibold">${(i.quantity * i.price).toFixed(2)}</div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between font-semibold">
          <div>Total</div>
          <div>${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
