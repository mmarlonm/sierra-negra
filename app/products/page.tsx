import Products from "../../components/Products";
import Cart from "../../components/Cart";

export const metadata = {
  title: 'Tienda - Sierra Negra'
};

export default function Page() {
  return (
    <main className="min-h-screen pt-28 flex flex-col w-full">
      <div className="w-full px-4 lg:px-8 flex-1">
        <div className="max-w-none mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-8" style={{width: '100%'}}>
          <div className="lg:col-span-2">
            <Products />
          </div>
          <aside className="cart-aside">
            <Cart />
          </aside>
        </div>
      </div>
    </main>
  );
}
