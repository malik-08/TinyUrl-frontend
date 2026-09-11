function Section3() {
  return (
    <section className="flex flex-wrap bg-[#0D7693] text-white">
      <div className="flex-1 min-w-[300px]">
        <img
          src="/section3-image.png"
          alt=""
          className="w-full h-64 sm:h-80 md:h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-[300px] p-6 sm:p-10 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Link Shortening Done Quick and Easy
        </h2>
        <p className="mb-4 text-sm sm:text-base">
          Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.
        </p>
        <p className="mb-6 text-sm sm:text-base">
          Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online. Wave goodbye to long, clunky links and give your audiences the experiences they deserve!
        </p>
        <div className="flex gap-4">
          <button className="bg-slate-100 text-[#002342] px-5 py-2 rounded-md font-semibold">
            View Plans
          </button>
          <button className="bg-[#002342] text-white px-5 py-2 rounded-md font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section3;