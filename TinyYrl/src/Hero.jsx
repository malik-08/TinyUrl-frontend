import { useState } from "react";

function Hero() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl, alias }),
      });
      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      alert("Backend se connect nahi ho paya.");
      console.error(err);
    }
  };

  return (
    <section className="bg-[#0a2540] text-white px-10 py-16 flex flex-wrap justify-between items-start gap-10">
      <div className="max-w-lg">
        <h1 className="text-4xl font-extrabold leading-tight mb-6">
          URL Shortener, Branded Short Links & Analytics
        </h1>
        <p className="text-slate-300 mb-4">
          Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.
        </p>
        <p className="text-slate-300 mb-6">
          You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.
        </p>

        <div className="flex gap-4 mb-10">
          <button className="bg-white text-[#0a2540] px-5 py-2 rounded-md font-semibold">View Plans</button>
          <button className="bg-[#1a7fa0] px-5 py-2 rounded-md font-semibold hover:bg-[#4fd1c5] hover:text-[#0a2540] transition">Create Free Account</button>
        </div>

        <h3 className="font-bold mb-3">Your Recent Links:</h3>
        <div className="bg-white text-[#0a2540] rounded-md px-4 py-3 font-semibold">
          {shortUrl || "No links yet in your history"}
        </div>
      </div>

      <div className="bg-white text-[#0a2540] rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="flex">
          <div className="flex-1 text-center py-4 font-bold bg-white border-b-2 border-[#0a2540]">
            🔗 Shorten a Link
          </div>
          <div className="flex-1 text-center py-4 font-semibold bg-slate-100 text-slate-500">
            ▦ Generate QR Code
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <label className="block text-sm font-bold mb-1">Long URL *</label>
          <input
            type="url"
            placeholder="Paste long URL here"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            className="w-full border border-slate-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-[#1a7fa0]"
          />

          <div className="flex gap-3 mb-1">
            <div className="flex-1">
              <label className="block text-sm font-bold mb-1">Domain</label>
              <select className="w-full border border-slate-300 rounded-md px-3 py-2">
                <option>tinyurl.com</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold mb-1">Alias (optional)</label>
              <input
                type="text"
                placeholder="Add alias here"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <p className="text-xs text-slate-400 mb-4">Must be at least 5 characters</p>

          <button
            type="submit"
            className="w-full bg-[#1e8e5a] text-white font-bold py-3 rounded-md hover:bg-[#24a76d] transition"
          >
            Shorten Link
          </button>

          <p className="text-xs text-slate-400 mt-3">
            By clicking Shorten Link, you agree with our Terms of Service, Privacy Policy, and Use of Cookies.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Hero;