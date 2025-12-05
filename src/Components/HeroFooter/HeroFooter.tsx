import { BsWhatsapp } from "react-icons/bs";

export default function HeroFooter() {
  return (
    <div className="bg-[#f7fafe] flex flex-col p-10 items-center justify-center m-20 rounded-lg gap-6 shadow-sm">
      {/* Badge */}
      <span className="bg-white text-red-primary px-4 py-1 rounded-full text-sm font-semibold shadow">
        24/7 Support
      </span>

      <h2 className="text-gray-900 font-bold text-5xl text-center max-w-3xl">
        We're here to make your website awesome.
      </h2>

      {/* Subtítulo */}
      <p className="text-gray-600 text-lg max-w-xl text-center">
        From setup to full optimization — our team is ready to help you grow
        online.
      </p>

      {/* Botão */}
      <button className="bg-red-primary p-4 px-6 text-white text-xl rounded-lg flex flex-row gap-3 items-center justify-center transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95">
        <BsWhatsapp className="text-2xl animate-pulse" />
        Get in touch with us
      </button>

      {/* Microtexto */}
      <span className="text-gray-500 text-sm mt-1">
        Response time: usually under 5 minutes
      </span>
    </div>
  );
}
