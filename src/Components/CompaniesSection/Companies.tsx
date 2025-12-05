import { ChartLine, Clock, Cloud, Headset } from "lucide-react";

// IMPORTS DAS LOGOS
import cpanel from "../../assets/logos/cPanel_orange_RGB 1.png";
import litespeed from "../../assets/logos/litespeed-logo 1.png";
import rect11 from "../../assets/logos/Rectangle 11.png";
import rect12 from "../../assets/logos/Rectangle 12.png";
import rect13 from "../../assets/logos/Rectangle 13.png";
import immunify from "../../assets/logos/secured-by-Imunify360-green 1.png";

export default function Companies() {
  return (
    <div className="flex flex-col gap-20 mt-20 px-10 mb-20 items-center justify-center">
      {/* ----------- Texto + Logos ----------- */}
      <div className="flex flex-col lg:flex-row justify-between gap-x-20">
        {/* Texto */}
        <div className="flex flex-col gap-5 max-w-xl ">
          <h1 className="text-5xl font-bold">True cloud web hosting</h1>
          <p className="text-gray-600 leading-relaxed">
            True Cloud Web Hosting — all of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don’t use dedicated
            servers that rely on a single piece of hardware. Our entire
            infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          <img src={cpanel} className="h-12 object-contain" />
          <img src={litespeed} className="h-12 object-contain" />
          <img src={rect11} className="h-12 object-contain" />
          <img src={rect12} className="h-12 object-contain" />
          <img src={rect13} className="h-12 object-contain" />
          <img src={immunify} className="h-12 object-contain" />
        </div>
      </div>

      {/* ----------- Cards de Feature ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <article className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-red-secondary rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <Clock className="text-red-primary" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-2">99.9% Uptime</h2>
          <p className="text-gray-600">
            We keep your website online 24x7x365. Downtime costs visitors and
            damages your SEO.
          </p>
        </article>

        <article className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-red-secondary rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <Cloud className="text-red-primary" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-2">Blazing Fast Web Hosting</h2>
          <p className="text-gray-600">
            Speed matters. Our cloud hosting ensures every website loads
            extremely fast.
          </p>
        </article>

        <article className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-red-secondary rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <ChartLine className="text-red-primary" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-2">Free SSL Certificates</h2>
          <p className="text-gray-600">
            Every site gets free SSL automatically for better security and SEO.
          </p>
        </article>

        <article className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-red-secondary rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <Headset className="text-red-primary" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-2">24/7 Friendly Support</h2>
          <p className="text-gray-600">
            Our expert team is always available to help you with anything you
            need.
          </p>
        </article>
      </div>
    </div>
  );
}
