function CTA() {
  return (
    <section className="bg-[#002342] text-white text-center py-16 px-6">
      <h2 className="text-2xl font-bold mb-4">Ready for Shorter, Smarter Links?</h2>
      <p className="text-slate-300 max-w-xl mx-auto mb-6">
        Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-[#002342] px-5 py-2 rounded-md font-semibold">View Plans</button>
        <button className="bg-[#1a7fa0] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#4fd1c5] hover:text-[#0a2540] transition">Create Free Account</button>
      </div>
    </section>
  );
}

export default CTA;