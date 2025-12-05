import { useState, useEffect } from "react";
import { Phone, Menu, X, User, ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    {
      label: "Our Services",
      href: "#services",
      submenu: [
        { label: "Web Development", href: "#web-dev" },
        { label: "UI/UX Design", href: "#design" },
        { label: "SEO Optimization", href: "#seo" },
        { label: "Digital Marketing", href: "#marketing" },
      ],
    },
    { label: "About", href: "#about" },
    { label: "Blog & News", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">
              Logo<span className="text-red-primary">.</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-red-primary font-medium transition-colors duration-300 flex items-center gap-1"
                    onMouseEnter={() => item.submenu && setServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setServicesOpen(false)}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Submenu para Services */}
                  {item.submenu && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden ${
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-primary transition-all duration-300 group"
                          >
                            <div className="w-2 h-2 bg-red-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="font-medium">{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span className="font-medium">EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {["EN", "ES", "PT"].map((lang) => (
                  <button
                    key={lang}
                    className="w-full px-4 py-2 text-left hover:bg-red-50 hover:text-red-primary transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Phone className="w-5 h-5 text-red-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Call us</span>
                  <span className="font-semibold text-gray-900">
                    +234 999 999 9999
                  </span>
                </div>
              </div>

              <div className="h-8 w-px bg-gray-200"></div>

              <button className="flex items-center gap-2 text-gray-700 hover:text-red-primary transition-colors">
                <div className="p-2 bg-gray-100 rounded-lg hover:bg-red-50 transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-medium">Account</span>
              </button>
            </div>

            <button className="bg-red-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-3 rounded-lg bg-gray-100 hover:bg-red-50 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`
          lg:hidden 
          transition-all duration-300 ease-out overflow-hidden
          ${open ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"}
          bg-white rounded-2xl shadow-2xl border border-gray-100
        `}
        >
          <div className="p-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-red-50 cursor-pointer list-none">
                        <span className="font-medium text-gray-900">
                          {item.label}
                        </span>
                        <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-red-50 text-gray-700 transition-colors"
                          >
                            <div className="w-2 h-2 bg-red-primary rounded-full"></div>
                            <span>{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center py-4 px-4 rounded-lg hover:bg-red-50 font-medium text-gray-900 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="pt-6 mt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl mb-4">
                <div className="p-2 bg-white rounded-lg">
                  <Phone className="w-5 h-5 text-red-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-600">Call us anytime</span>
                  <div className="font-semibold text-gray-900">
                    +234 906 732 2844
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 rounded-lg hover:bg-red-50 transition-colors">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Account</span>
                </button>

                <button className="flex-1 bg-red-primary text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Get Started
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>English</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
