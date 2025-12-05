import { Check } from "lucide-react";
import "../../App.css";

export default function Prices() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-32 px-4">
      {/* HEADER */}
      <h2 className="text-5xl md:text-7xl font-bold text-center">
        Ready to get started with Lemon Wares?
      </h2>
      <span className="text-lg text-gray-600">
        Choose the package that suits you
      </span>

      {/* SWITCH MONTH/YEAR */}
      <div className="flex flex-row gap-5 items-center text-lg mt-3">
        <span>Monthly</span>
        <input type="checkbox" id="checkboxInput" />
        <label htmlFor="checkboxInput" className="toggleSwitch"></label>
        <span>Yearly</span>

        <span className="text-xs bg-yellow-200 px-3 py-1 rounded-lg">
          20% discount
        </span>
      </div>

      {/* TABS BASIC / PREMIUM */}
      <div className="flex items-center justify-center gap-20 text-2xl md:text-3xl font-semibold w-full mt-10">
        {/* Basic */}
        <div className="flex flex-col items-center">
          <span>Basic</span>
          <div className="w-40 md:w-64 border-b-4 border-red-primary mt-2"></div>
        </div>

        {/* Premium */}
        <div className="flex flex-col items-center">
          <span>Premium</span>
          <div className="w-40 md:w-64 border-b-4 border-gray-300 mt-2"></div>
        </div>
      </div>

      {/* PRICE CARDS */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* CARD 1 */}
        <article className="border-2 border-gray-300 p-8 rounded-2xl w-80 shadow-sm hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-1">Starter</h2>

          <p className="text-sm text-gray-500 mb-5 leading-snug">
            with all your customers via all conversation channels in one central
            dashboard.
          </p>

          <div className="flex items-end gap-1 mb-6">
            <span className="font-bold text-4xl">$2.80</span>
            <span className="text-xs text-gray-500 mb-1">/ Per month</span>
          </div>

          <button className="border-2 border-black rounded-lg w-full py-3 font-medium hover:bg-black hover:text-white transition">
            Choose this Plan
          </button>

          <ul className="text-gray-700 mt-6 space-y-3">
            {[
              "Unlimited Websites",
              "Unlimited Domains",
              "24/7 Support",
              "Free SSL Certificates",
              "Email Support",
              "More Security",
              "Daily Backups",
              "Priority Support",
              "Enhanced Protection",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="text-green-600" size={18} /> {item}
              </li>
            ))}
          </ul>
        </article>

        {/* CARD 2 */}
        <article className="border-2 border-gray-300 p-8 rounded-2xl w-80 shadow-sm hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-1">Standard</h2>

          <p className="text-sm text-gray-500 mb-5 leading-snug">
            with all your customers via all conversation channels in one central
            dashboard.
          </p>

          <div className="flex items-end gap-1 mb-6">
            <span className="font-bold text-4xl">$4.20</span>
            <span className="text-xs text-gray-500 mb-1">/ Per month</span>
          </div>

          <button className="border-2 border-black rounded-lg w-full py-3 font-medium hover:bg-black hover:text-white transition">
            Choose this Plan
          </button>

          <ul className="text-gray-700 mt-6 space-y-3">
            {[
              "Unlimited Websites",
              "Unlimited Domains",
              "24/7 Support",
              "Free SSL Certificates",
              "Email Support",
              "More Security",
              "Daily Backups",
              "Priority Support",
              "Enhanced Protection",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="text-green-600" size={18} /> {item}
              </li>
            ))}
          </ul>
        </article>

        {/* CARD 3 */}
        <article className="border-2 border-gray-300 p-8 rounded-2xl w-80 shadow-sm hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-1">Suprem</h2>

          <p className="text-sm text-gray-500 mb-5 leading-snug">
            with all your customers via all conversation channels in one central
            dashboard.
          </p>

          <div className="flex items-end gap-1 mb-6">
            <span className="font-bold text-4xl">$7.00</span>
            <span className="text-xs text-gray-500 mb-1">/ Per month</span>
          </div>

          <button className="border-2 border-black rounded-lg w-full py-3 font-medium hover:bg-black hover:text-white transition">
            Choose this Plan
          </button>

          <ul className="text-gray-700 mt-6 space-y-3">
            {[
              "Unlimited Websites",
              "Unlimited Domains",
              "24/7 Support",
              "Free SSL Certificates",
              "Email Support",
              "More Security",
              "Daily Backups",
              "Priority Support",
              "Enhanced Protection",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="text-green-600" size={18} /> {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
