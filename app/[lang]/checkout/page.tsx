import Checkout from "../../../components/Checkout";
import { getDictionary } from "../../dictionaries";

export const metadata = {
  title: 'Checkout - Sierra Negra'
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');

  return (
    <main className="pt-28 container-custom py-12">
      <h1 className="text-2xl font-bold mb-6">{dict.checkout.steps.shipping}</h1>
      <Checkout dict={dict.checkout} lang={lang as 'es' | 'en'} />
      <div className="mt-6 text-sm text-gray-500">
        {lang === 'es' 
          ? 'Nota: para pagar con Stripe configura `STRIPE_SECRET_KEY` en `.env.local` y ejecuta `npm install stripe`.' 
          : 'Note: to pay with Stripe configure `STRIPE_SECRET_KEY` in `.env.local` and run `npm install stripe`.'}
      </div>
    </main>
  );
}
