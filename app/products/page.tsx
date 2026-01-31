import Products from "../../components/Products";


export const metadata = {
  title: 'Tienda - Sierra Negra'
};

export default function Page() {
  return (
    <main className="min-h-screen pt-28 flex flex-col w-full">
      <div className="w-full px-4 lg:px-8 flex-1">
        <div className="max-w-none mx-auto py-8" style={{width: '100%'}}>
          <Products />
        </div>
      </div>
    </main>
  );
}
