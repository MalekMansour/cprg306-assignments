export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
        <h2><a href="/week-2" className="text-xl hover:text-green-500 transition">Week 2 Assignment</a></h2> 
        <h2><a href="/week-3" className="text-xl hover:text-green-500 transition">Week 3 Assignment</a></h2> 
        <h2><a href="/week-4" className="text-xl hover:text-green-500 transition">Week 4 Assignment</a></h2> 
        <h2><a href="/week-5" className="text-xl hover:text-green-500 transition">Week 5 Assignment</a></h2>
        <h2><a href="/week-6" className="text-xl hover:text-green-500 transition">Week 6 Assignment</a></h2>
        <h2><a href="/week-7" className="text-xl hover:text-green-500 transition">Week 7 Assignment</a></h2>
        <h2><a href="/week-8" className="text-xl hover:text-green-500 transition">Week 8 Assignment</a></h2>

      </div>

      {/* Footer Section */}
      <footer className="mt-8 py-4 text-center bg-gray-800 text-white">
        <a 
          href="https://github.com/malekmansour" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-200 hover:text-white transition"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}
