import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = body.items || [];
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const line_items = items.map((it: any) => ({
      price_data: {
        currency: process.env.STRIPE_CURRENCY || 'mxn',
        product_data: {
          name: it.name,
          description: it.description || undefined,
        },
        unit_amount: Math.round((it.price || 0) * 100),
      },
      quantity: it.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${origin}/sierra-negra/checkout?success=true`,
      cancel_url: `${origin}/sierra-negra/checkout?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe error', err);
    return NextResponse.json({ error: err.message || 'error' }, { status: 500 });
  }
}
