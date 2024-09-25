import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-black-20 p-3">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white-700 mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
