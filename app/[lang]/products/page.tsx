import Products from "../../../components/Products";
import { getDictionary } from "../../dictionaries";

export const metadata = {
  title: 'Tienda - Sierra Negra'
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');

  return (
    <main className="min-h-screen pt-28 flex flex-col w-full">
      <div className="w-full px-4 lg:px-8 flex-1">
        <div className="max-w-none mx-auto py-8" style={{width: '100%'}}>
          <Products lang={lang as 'es' | 'en'} dict={dict.shop} />
        </div>
      </div>
    </main>
  );
}
