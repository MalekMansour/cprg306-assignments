import NewItem from './new-item';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Week 4 - New Item</h1>
      <NewItem />
    </div>
  );
};

export default Page;
