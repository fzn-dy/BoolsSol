const Partnership = () => {
  const partners = [
    {
      name: "CoinGecko",
      imgSrc: "/assets/part/coingecko.png",
      link: "https://www.coingecko.com",
    },
    {
      name: "CoinMarketCap",
      imgSrc: "/assets/part/coinmarketcap.svg",
      link: "https://www.coinmarketcap.com",
    },
    {
      name: "Raydium",
      imgSrc: "/assets/part/raylogo_2x.png",
      link: "https://raydium.io/",
    },
    {
      name: "DexScreener",
      imgSrc: "/assets/part/dexslogo.png",
      link: "https://dexscreener.com",
    },
    {
      name: "Jupiter",
      imgSrc: "/assets/part/jupiterlogo.png",
      link: "https://www.jup.ag/",
    },
    {
      name: "Magic Eden",
      imgSrc: "/assets/part/magiceden.png",
      link: "https://magiceden.io/",
    },
  ];
  const marqueeContent = Array.from({ length: 10 }, () => (
    <span key={Math.random()} className="text-3xl mx-4 text-white font-bold">
      $BUL
    </span>
  ));

  return (
    <section
      id="partnership"
      className="relative flex flex-col text-center justify-center py-24"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #4a68e4, #3D98B1, #2CD76D)",
        minHeight: "100vh",
      }}
    >
      <div className="varsity z-10 absolute top-0 left-0 w-full flex overflow-x-hidden bg-gradient-to-r from-black to-gray-900 shadow-lg">
        <div className="py-4 animate-marquee whitespace-nowrap">
          {marqueeContent}
          {marqueeContent}
        </div>

        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>

      <div className="pt-24">
        <h2 className="varsity text-5xl lg:text-7xl font-bold text-white mb-8">
          PARTNERSHIP
        </h2>

        <div className="mx-auto max-w-2xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {" "}
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center rounded-2xl justify-center shadow-md hover:shadow-xl hover:translate-y-[-10px] transition-shadow duration-300 transform mx-auto"
                  style={{
                    width: "150px",
                    height: "150px",
                    background: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={partner.imgSrc}
                    alt={partner.name}
                    className="h-2/3 w-2/3 object-contain rounded-full"
                  />
                  <span className="oswald text-white font-semibold text-lg mt-2">
                    {partner.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
