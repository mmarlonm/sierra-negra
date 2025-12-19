"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function Cart() {
  const { items, removeItem, updateQty, total, clearCart } = useCart();

  if (!items.length) return (
    <div className="cart-box">
      <h3 className="font-semibold">Tu carrito está vacío</h3>
      <p className="small-muted mt-4">Añade productos para verlos aquí.</p>
      <Link href="/sierra-negra/products" className="btn-secondary mt-6 inline-block">Ir a tienda</Link>
    </div>
  );

  return (
    <div className="cart-box">
      <h3 className="font-semibold">Tu carrito</h3>
      <ul className="mt-4">
        {items.map(i => (
          <li key={i.id} className="cart-item">
            <div className="flex-1">
              <div className="name">{i.name}</div>
              <div className="small-muted">${(i.price * i.quantity).toFixed(2)} • {i.quantity} unidad(es)</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" value={i.quantity} min={1} onChange={(e) => updateQty(i.id, Number(e.target.value) || 1)} className="form-input" style={{width:80}} />
              <button onClick={() => removeItem(i.id)} className="text-sm text-red-500">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <div>Total</div>
        <div>${total.toFixed(2)}</div>
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={() => clearCart()} className="btn-secondary">Vaciar</button>
        <Link href="/sierra-negra/checkout" className="btn-primary">Pagar</Link>
      </div>
    </div>
  );
}
