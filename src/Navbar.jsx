function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-10 py-4 bg-gradient-to-r from-[#0e3a5c] to-[#14577e] text-white">
      <h1 className="text-lg sm:text-2xl font-black tracking-wide">TINYURL</h1>
      <ul className="hidden md:flex gap-8 text-sm font-semibold">
        <li>Plans</li>
        <li>Features</li>
        <li>Domains</li>
        <li>Resources</li>
      </ul>
      <div className="flex items-center gap-3 sm:gap-5 text-sm">
        <span className="hidden sm:inline">Log In</span>
        <button className="bg-[#1a7fa0] px-3 sm:px-5 py-2 rounded-md font-semibold hover:bg-[#4fd1c5] hover:text-[#0a2540] transition text-xs sm:text-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;