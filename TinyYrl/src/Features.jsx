function Features() {
  const plans = [
    {
      title: "Detailed Link Analytics",
      desc: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
      img: "/feature-1.webp",
    },
    {
      title: "Fully Branded Domains",
      desc: "Customize every part of your links with branded domains — say goodbye to default link shortening!",
      img: "/feature-2.webp",
    },
    {
      title: "Bulk Short URLs",
      desc: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
      img: "/feature-3.webp",
    },
    {
      title: "Link Management",
      desc: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
      img: "/feature-4.webp",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-10 py-16">
      <h2 className="text-center text-2xl font-bold mb-12">TinyURL Plans Include:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, i) => (
          <div key={i}>
            <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{plan.desc}</p>
            <img
              src={plan.img}
              alt={plan.title}
              className="w-full max-w-[160px] sm:max-w-[180px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;