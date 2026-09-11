function Footer() {
  const columns = [
    { title: "Features", items: ["Link Editor", "Link Management", "Branded Links", "Short URL Tracking", "QR Code Generator", "Short URL API"] },
    { title: "Resources", items: ["Blog", "For Developers", "Our Proven Process", "About Us"] },
    { title: "Contact Us", items: ["Help Desk", "Contact Sales", "Contact Support", "Report Abuse"] },
    { title: "Legal", items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility Statement", "Privacy Manager"] },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0e3a5c] to-[#002342] text-white px-10 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-bold uppercase text-sm mb-4">{col.title}</h4>
            {col.items.map((item, j) => (
              <p key={j} className="text-slate-300 text-sm mb-2">{item}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-slate-600 pt-6 text-center text-sm text-slate-400">
        © 2026 TinyURL LLC. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;