import { Link } from "@remix-run/react";
import { GrCopy } from "react-icons/gr";
import { RiShoppingCartLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";

const Hero = () => {
  const textToCopy = "Contract Address";
  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast("Copying Text Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const marqueeContent = Array.from({ length: 10 }, () => (
    <span key={Math.random()} className="text-3xl mx-4 text-white font-bold">
      $BUL
    </span>
  ));

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('./assets/hero.png')" }}
    >
      <div className="mt-32 flex flex-col items-center text-center justify-center text-white w-auto h-[80%]">
        <ToastContainer />
        <img
          src="assets/boolsh_round.png"
          alt="Logo"
          className="w-auto h-[20%] lg:h-[35%]"
        />
        <img
          src="assets/boolsh_sol.png"
          alt="Logo"
          className="-mt-12 lg:-mt-36 w-auto h-[35%] lg:h-[60%]"
        />
        <div className="flex lg:flex-row flex-col gap-2 lg:gap-4 -mt-6 lg:-mt-24 mb-4 mx-auto">
          <div className="text-black bg-[#FFF0D1] px-2 py-2 lg:px-6 lg:py-4 rounded-full text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold z-10 mb-0 lg:mb-10 max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-5xl xl:max-w-6xl truncate overflow-hidden">
            <p className="truncate">{textToCopy}</p>
          </div>
          <div
            className="flex items-center justify-center hover:scale-105 text-black bg-[#FFF0D1] px-4 py-2 rounded-full text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold z-10 mb-10"
            onClick={handleCopy}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCopy();
              }
            }}
          >
            <GrCopy />
          </div>
        </div>
        <Link to="#" target="_blank" rel="noopener noreferrer">
          <button className="-mt-12 flex flex-row gap-2 justify-center items-center bg-red-600 text-white px-4 py-2 lg:px-8 lg:py-4 border-2 text-2xl font-bold border-white shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl hover:bg-green-900">
            <span>BUY $BUL</span>
            <span className="font-bold text-3xl">
              <RiShoppingCartLine />
            </span>
          </button>
        </Link>
      </div>

      <div className="varsity absolute bottom-0 left-0 w-full flex overflow-x-hidden bg-gradient-to-r from-black to-gray-900 shadow-lg">
        <div className="py-4 animate-marquee whitespace-nowrap">
          {marqueeContent}
          {marqueeContent}
        </div>

        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </section>
  );
};

export default Hero;
