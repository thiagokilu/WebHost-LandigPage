import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-primary p-8 md:p-14 text-white relative overflow-hidden">
      <div className="relative z-10">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          {/* Logo + Description column */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-700 font-bold text-xl">L</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Logo<span className="text-white/80">.</span>
              </h2>
            </div>
            <p className="text-white/90 leading-relaxed mb-8 text-lg">
              We transform ideas into exceptional digital experiences. We offer
              complete hosting and development solutions to boost your online
              business.
            </p>

            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-semibold text-xl mb-3">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your best email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-colors"
                />
                <button className="bg-white text-red-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  Subscribe
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Responsive grid links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 flex-1">
            {/* Services */}
            <div>
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b border-white/20">
                Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Custom Domains",
                  "Shared Hosting",
                  "Cloud Hosting",
                  "Dedicated Servers",
                  "SSL & Security",
                ].map((item, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hosting */}
            <div>
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b border-white/20">
                Hosting
              </h3>
              <ul className="space-y-4">
                {[
                  "Economy Hosting",
                  "Optimized WordPress",
                  "Business Email",
                  "Unlimited Hosting",
                  "Automatic Backup",
                ].map((item, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b border-white/20">
                Company
              </h3>
              <ul className="space-y-4">
                {["About Us", "Careers", "Contact", "Blog", "Portfolio"].map(
                  (item, index) => (
                    <li key={index} className="group">
                      <a
                        href="#"
                        className="text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                      >
                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b border-white/20">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <FiMapPin className="mt-1 text-white flex-shrink-0" />
                  <span>Digital Ave, 1234 - São Paulo, SP</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <FiPhone className="text-white flex-shrink-0" />
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <FiMail className="text-white flex-shrink-0" />
                  <span>contact@logo.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-white/70 text-sm">
            <span>© {currentYear} Logo. All rights reserved.</span>
            <span className="hidden sm:block mx-2">•</span>
            <span>
              Made by <span className="text-white font-semibold">Thiago</span>{" "}
              with ❤️
            </span>
          </div>

          {/* Social Links + Policies */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span>100% Secure Site</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span>SSL Certificate</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
