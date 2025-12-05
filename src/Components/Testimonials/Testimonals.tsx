import aspas from "../../assets/img/aspas.png";

// Importando logos
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";

export default function Testimonals() {
  return (
    <div className="px-20 mb-20 flex flex-col items-center justify-center">
      {/* Título */}
      <div>
        <h2 className="relative text-6xl font-bold max-w-xl">
          <span
            className="absolute -z-10 opacity-20"
            style={{
              left: "-90px",
              top: "-60px",
              width: "150px",
            }}
          >
            <img src={aspas} alt="aspas" className="w-full" />
          </span>
          Real stories from Real Customers
        </h2>

        <p className="text-gray-600 mt-3">Get inspired by these stories.</p>
      </div>

      {/* GRID dos cards */}
      <div className="mt-16 flex flex-row items-center gap-12 justify-center max-w-3xl">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-4 h-[500px]">
          <h2 className="text-3xl font-bold text-gray-900">CL!</h2>

          <p className="relative text-gray-600 leading-relaxed pl-6">
            <span className="absolute left-0 top-0 text-blue-400 text-3xl">
              “
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>

          <span className="text-lg font-bold text-gray-900">Floyd Miles</span>
          <span className="text-sm text-blue-600 font-medium">
            Vice President, CLI
          </span>
        </div>

        {/* Coluna com 2 cards */}
        <div className="flex flex-col gap-5">
          {/* Card 2 */}
          <div className="bg-white shadow-lg p-8 flex flex-col gap-4 w-96">
            <h2 className="text-3xl font-bold text-gray-900">JPNL</h2>

            <p className="relative text-gray-600 leading-relaxed pl-6">
              <span className="absolute left-0 top-0 text-blue-400 text-3xl">
                “
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>

            <span className="text-lg font-bold text-gray-900">Jane Cooper</span>
            <span className="text-sm text-blue-600 font-medium">CEO, JPNL</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg p-8 flex flex-col gap-4 w-80">
            <h2 className="text-3xl font-bold text-gray-900">
              Leevon Branding
            </h2>

            <p className="relative text-gray-600 leading-relaxed pl-6">
              <span className="absolute left-0 top-0 text-blue-400 text-3xl">
                “
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>

            <span className="text-lg font-bold text-gray-900">
              Kristin Watson
            </span>
            <span className="text-sm text-blue-600 font-medium">
              Co-Founder, Leevon Branding
            </span>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="flex flex-row w-full mt-20 items-center justify-evenly">
        <div className="flex flex-col gap-5 text-left max-w-xl">
          <h2 className="text-5xl font-bold">
            We serve over 100 Nigerian Websites
          </h2>

          <p className="text-gray-600 max-w-96">
            Connect LemonWares with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-3 gap-10">
          <img src={logo1} alt="logo" className="h-22 object-contain" />
          <img src={logo2} alt="logo" className="h-22 object-contain" />
          <img src={logo3} alt="logo" className="h-22 object-contain" />
          <img src={logo4} alt="logo" className="h-22 object-contain" />
          <img src={logo5} alt="logo" className="h-22 object-contain" />
          <img src={logo6} alt="logo" className="h-22 object-contain" />
        </div>
      </div>
    </div>
  );
}
