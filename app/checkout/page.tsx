import Checkout from "../../components/Checkout";

export const metadata = {
  title: 'Checkout - Sierra Negra'
};

export default function Page() {
  return (
    <main className="pt-28 container-custom py-12">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <Checkout />
      <div className="mt-6 text-sm text-gray-500">Nota: para pagar con Stripe configura `STRIPE_SECRET_KEY` en `.env.local` y ejecuta `npm install stripe`.</div>
    </main>
  );
}
