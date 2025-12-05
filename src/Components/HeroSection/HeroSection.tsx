import img from "../../assets/img/Rectangle22.png";

export default function HeroSection() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-20 mt-6 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center max-w-7xl mx-auto">
      {/* Conteúdo do lado esquerdo */}
      <div className="flex flex-col gap-6 lg:gap-8 text-[#2e2e2e] order-2 lg:order-1 w-full lg:w-1/2">
        {/* Navegação */}
        <ul className="flex flex-row text-base sm:text-lg overflow-x-auto pb-2 scrollbar-hide">
          {["Hosting", "Domain", "SEO", "Email"].map((item, index) => (
            <li
              key={item}
              className={`relative px-4 py-2 cursor-pointer transition-all duration-300 
                ${
                  index === 0
                    ? "text-red-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-primary after:transition-all"
                    : "text-gray-600 hover:text-gray-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-300"
                }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Título */}
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
          Premium Web Hosting for{" "}
          <span className="text-red-primary relative">
            Your Website
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-primary to-red-500 opacity-30 rounded-full"></span>
          </span>
        </h1>

        {/* Descrição */}
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
          Blazing fast web hosting for individuals and businesses of all sizes
          backed by{" "}
          <span className="font-semibold text-gray-800">24x7x365 Support</span>.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-red-primary hover:bg-red-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95 shadow-md">
            Create an Account
          </button>
          <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:text-gray-900 px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg active:scale-95">
            Choose your plan
            <span className="ml-2 text-red-primary">→</span>
          </button>
        </div>
      </div>

      {/* Imagem do lado direito */}
      <div className="order-1 lg:order-2 w-full lg:w-1/2 relative mt-4 lg:mt-10">
        <div className="relative">
          <img
            src={img}
            alt="Dashboard illustration showing web hosting services"
            className="w-full max-w-2xl mx-auto lg:max-w-none transform lg:translate-x-4 hover:scale-[1.02] transition-transform duration-500 rounded-xl shadow-2xl"
          />

          {/* Elementos decorativos */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-primary/10 to-red-500/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
}
