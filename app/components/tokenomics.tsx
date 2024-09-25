const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="relative h-screen bg-[#304FAC] flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <div className="z-10 mt-10 md:mt-20">
        <img
          src="./assets/tokenomics.png"
          alt="Tokenomics Header"
          className="w-full max-w-6xl"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl z-10 mt-6">
        <div className="text-left font-semiboldp px-2">
          <table className="varsity text-sm lg:text-3xl font-bold lg:font-extrabold text-[#1ff6a1]">
            <tbody className="divided-x md:divide-y">
              <tr>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">
                  TOTAL SUPPLY
                </td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">:</td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap text-left">
                  1B
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">
                  LP BURNED
                </td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">:</td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap text-left">
                  100%
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">TAX</td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">:</td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap text-left">
                  0
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">SECURE</td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap">:</td>
                <td className="px-1 py-2 lg:py-4 whitespace-nowrap text-left">
                  MINT & FREEZE REVOKED
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center z-1 mt-0 lg:mt-0">
          <img
            src="./assets/boolsh.png"
            alt="Company Logo"
            className="mt-24 md:mt-0 object-fit: contain w-[60%] md:w-[50%] lg:w-[70%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
