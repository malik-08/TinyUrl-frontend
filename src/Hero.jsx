import { useState } from "react";

function Hero() {
  // Shorten Link form ke states
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Recent links ki list
  const [recentLinks, setRecentLinks] = useState([]);

  // QR Code form ke states
  const [qrUrl, setQrUrl] = useState("");
  const [qrImage, setQrImage] = useState("");

  // Konsa tab active hai - "shorten" ya "qr"
  const [activeTab, setActiveTab] = useState("shorten");

  // Shorten Link form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tinyurl-backend-production-b4d3.up.railway.app/saveurl",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ longURL: longUrl, alias }),
        }
      );
      const data = await response.json();
      if (data.ok) {
        setShortUrl(data.shortURL);
        setRecentLinks(function (prev) {
          return [{ shortUrl: data.shortURL, longUrl: longUrl }].concat(prev);
        });
      } else {
        alert("Error , Try Again");
      }
    } catch (err) {
      alert("Backend se connect nahi ho paya.");
      console.error(err);
    }
  };

  // Form reset karke naya link banane ke liye
  const handleReset = () => {
    setLongUrl("");
    setAlias("");
    setShortUrl("");
    setCopied(false);
  };

  // Copy button
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 2000);
  };

  // Share button
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ url: shortUrl });
    } else {
      navigator.clipboard.writeText(shortUrl);
      alert("Link copy ho gaya (share supported nahi hai is browser mein).");
    }
  };

  // QR Code form submit handler
  const handleQrSubmit = (e) => {
    e.preventDefault();
    if (!qrUrl) {
      alert("Pehle URL daalo.");
      return;
    }
    const generatedQr =
      "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
      encodeURIComponent(qrUrl);
    setQrImage(generatedQr);
  };

  return (
    <section className="bg-[#0a2540] text-white px-10 py-16 flex flex-wrap justify-between items-start gap-10">
      {/* Left side - heading and recent links */}
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

        {recentLinks.length === 0 && (
          <div className="bg-white text-[#0a2540] rounded-md px-4 py-3 font-semibold">
            No links yet in your history
          </div>
        )}

        {recentLinks.length > 0 && (
          <div className="flex flex-col gap-2">
            {recentLinks.map(function (link, index) {
              return (
                <div key={index} className="bg-white text-[#0a2540] rounded-md px-4 py-3">
                  <a href={link.shortUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#1a7fa0] hover:underline break-all">
                    {link.shortUrl}
                  </a>
                  <p className="text-xs text-slate-500 break-all">{link.longUrl}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right side - card with tabs */}
      <div className="bg-white text-[#0a2540] rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Tab buttons */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("shorten")}
            className={`flex-1 text-center py-4 font-bold border-b-2 ${
              activeTab === "shorten"
                ? "bg-white border-[#0a2540]"
                : "bg-slate-100 text-slate-500 border-transparent"
            }`}
          >
            🔗 Shorten a Link
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`flex-1 text-center py-4 font-semibold border-b-2 ${
              activeTab === "qr"
                ? "bg-white border-[#0a2540]"
                : "bg-slate-100 text-slate-500 border-transparent"
            }`}
          >
            ▦ Generate QR Code
          </button>
        </div>

        {/* Shorten Link tab */}
        {activeTab === "shorten" && (
          <div className="p-6">
            {!shortUrl && (
              <form onSubmit={handleSubmit}>
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
            )}

            {shortUrl && (
              <div>
                <label className="block text-sm font-bold mb-1"> TinyURL Link</label>
                <div className="flex items-center border border-green-500 rounded-md px-3 py-2 mb-4">
                  <a href={shortUrl} target="_blank" rel="noreferrer" className="flex-1 text-[#1a7fa0] font-semibold break-all">
                    {shortUrl}
                  </a>
                  <button onClick={handleCopy} title="Copy">📋</button>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  <a href={shortUrl} target="_blank" rel="noreferrer" className="bg-[#1a7fa0] text-white text-xs font-semibold py-2 rounded-md text-center">
                    Visit URL
                  </a>
                  <button onClick={() => setActiveTab("qr")} className="bg-[#1a7fa0] text-white text-xs font-semibold py-2 rounded-md">
                    QR
                  </button>
                  <button onClick={handleShare} className="bg-[#1a7fa0] text-white text-xs font-semibold py-2 rounded-md">
                    Share
                  </button>
                  <button onClick={handleCopy} className="bg-[#0a2540] text-white text-xs font-semibold py-2 rounded-md">
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full bg-[#1e8e5a] text-white font-bold py-3 rounded-md hover:bg-[#24a76d] transition"
                >
                  Shorten Another Link
                </button>
              </div>
            )}
          </div>
        )}

        {/* QR Code tab */}
        {activeTab === "qr" && (
          <form onSubmit={handleQrSubmit} className="p-6">
            <label className="block text-sm font-bold mb-1">URL for QR Code *</label>
            <input
              type="url"
              placeholder="Paste URL here"
              value={qrUrl}
              onChange={(e) => setQrUrl(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-[#1a7fa0]"
            />

            <button
              type="submit"
              className="w-full bg-[#1e8e5a] text-white font-bold py-3 rounded-md hover:bg-[#24a76d] transition"
            >
              Generate QR Code
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Hero;