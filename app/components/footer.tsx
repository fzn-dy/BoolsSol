import { Link, NavLink } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-black text-white p-0 m-0">
      <div className="md:w-1/4 w-full md:h-auto h-64 flex-shrink-0">
        <img
          src="./assets/footer_boolsh.png"
          alt="Footer Background"
          className="object-cover h-full w-full block"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between md:p-6 p-4">
        <div className="oswald flex flex-row justify-center md:justify-end space-x-4 text-lg mt-4 md:mt-0">
          <div className="hover:text-gray-400 cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="hover:text-gray-400 cursor-pointer">
            <NavLink to="#about">About</NavLink>
          </div>
          <div className="hover:text-gray-400 cursor-pointer">
            <NavLink to="#tokenomics">Tokenomics</NavLink>
          </div>
          <div className="hover:text-gray-400 cursor-pointer">
            <NavLink to="#partnership">Partnership</NavLink>
          </div>
        </div>

        <div className="flex justify-center items-center md:justify-end space-x-4 mt-4">
          <div>Follow Us</div>
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

        <div className="oswald flex flex-col items-center lg:items-end mt-4 text-lg text-center md:text-right">
          <p className="text-red-500">Disclaimer:</p>
          <p className="max-w-lg">
            This website is for entertainment only. Meme coins are risky, so
            DYOR and only invest what you can afford to lose.
          </p>
          <p className="varsity mt-2 text-lg">
            © 2024 $BUL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
