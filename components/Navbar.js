export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">

        <h1 className="text-white text-2xl font-bold">
          Disney+
        </h1>

        <nav className="flex items-center gap-8 text-gray-300 font-medium">
          <span className="hover:text-white transition cursor-pointer">Home</span>
          <span className="hover:text-white transition cursor-pointer">Movies</span>
          <span className="hover:text-white transition cursor-pointer">TV Shows</span>
          <span className="hover:text-white transition cursor-pointer">My List</span>
        </nav>

      </div>

    </header>
  );
}