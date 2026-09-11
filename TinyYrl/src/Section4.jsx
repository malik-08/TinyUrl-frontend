function Section4() {
  return (
    <section className="flex flex-wrap bg-[#002342] text-white">
      <div className="flex-1 min-w-[300px] p-6 sm:p-10 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Transforming the Digital Landscape Since '02
        </h2>
        <p className="mb-6 text-slate-300 text-sm sm:text-base">
          TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.
        </p>
        <div className="grid grid-cols-2 gap-y-5 max-w-md">
          <p className="text-xl sm:text-2xl font-bold">Billions</p>
          <p className="text-slate-300 text-sm sm:text-base self-center">of redirects per month</p>
          <p className="text-xl sm:text-2xl font-bold">24 years</p>
          <p className="text-slate-300 text-sm sm:text-base self-center">of shortening URLs</p>
          <p className="text-xl sm:text-2xl font-bold">63,563,784,092</p>
          <p className="text-slate-300 text-sm sm:text-base self-center">TinyURLs created</p>
        </div>
      </div>
      <div className="flex-1 min-w-[300px]">
        <img
          src="/section4-image.png"
          alt=""
          className="w-full h-64 sm:h-80 md:h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Section4;