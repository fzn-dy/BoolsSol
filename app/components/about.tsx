import { Link } from "@remix-run/react";

const About = () => {
  return (
    <section
      id="about"
      className="h-auto py-8 bg-[#304FAC] flex items-center justify-center"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <div className="w-10/12 md:w-8/12 h-4/5 bg-gradient-to-b from-[#1172c7] from-10% via-30% to-[#5273f4] to-90% shadow-2xl border-4 border-blue-900 rounded-3xl flex flex-col md:flex-row p-8 md:p-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 items-center md:items-start">
          <div>
            <div className="varsity text-5xl lg:text-7xl font-extrabold mb-2 text-white">
              ABOUT
            </div>
            <img
              src="assets/boolsh_white.png"
              alt="Logo"
              className="w-[30%] lg:w-[40%] h-auto"
            />
          </div>
          <p className="oswald text-md md:text-lg leading-relaxed text-justify md:text-justify text-white">
            $BUL is a distinctive token that combines sports and blockchain,
            showcasing a basketball-playing bull character. Operating on the
            Solana ecosystem, it offers fast transactions and a fun experience
            for basketball fans and investors. The token aims to foster an
            inclusive community where holders can participate in events and
            competitions, promoting growth and enjoyment together with $BUL.
          </p>
          <div className="flex space-x-4 mb-2">
            {/* <Link
              to="https://t.me/your-telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center"
            >
              <img
                src="assets/logo_telegram_white.png"
                alt="Logo"
                className="w-[100%] h-auto"
              />
            </Link> */}
            <Link
              to="https://x.com/your-x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 text-white rounded-full flex items-center justify-center"
            >
              <img
                src="assets/logo_x_white.png"
                alt="Logo"
                className="w-[100%] h-auto"
              />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <img
            src="./assets/boolsh_rocket.png"
            alt="Company Logo"
            className="w-2/3 md:w-3/4 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
