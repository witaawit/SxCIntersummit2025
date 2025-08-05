import React from "react";

export const FooterSection = () => {
  const usefulLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Merch", href: "#merch" },
  ];

  const helpLinks = [
    { name: "Customer Support", href: "#support" },
    { name: "Terms & Policy", href: "#terms" },
    { name: "Contact Us", href: "#contact" },
  ];

  const contactInfo = [
    { label: "Lorem", value: "Lorem" },
    { label: "Phone", value: "+62" },
    { label: "Email", value: "lorem@mail.com" },
  ];

  if (["/login", "/register"].includes(location.pathname)) {
    return null;
  }

  return (
    <div
      style={{ backgroundImage: "url('./images/homepage/footerAssets.svg')" }}
      className="bg-cover bg-center w-full z-20"
    >
      <div
        className="relative min-h-[60vh] backdrop-blur-4xl px-6 py-8 max-w-full border-t-2 border-white"
        style={{
          background:
            "linear-gradient(to top, #A8CA85 10%, #A6CEE7 38%, #8563AF 100%)",
        }}
      >
        <img
          src="/images/homepage/footerAssets.svg"
          className="absolute  w-full bottom-0 left-0 object-cover "
          alt=""
        />
        <div className="max-w-7xl mx-auto mt-10">
          {/* Top Section with Logos and Info */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <img
                className="w-[203px] h-[97px] object-contain"
                alt="Intersummit logo"
                src="/images/logo-intersummit-3.png"
              />
              <p className="text-white text-base leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-6 mt-4">
                <img
                  className="w-8 h-8 cursor-pointer object-contain"
                  alt="Instagram"
                  src="/images/socialmedia/instagram.svg"
                />
                <img
                  className="w-8 h-8 object-contain"
                  alt="Twitter"
                  src="/images/socialmedia/new-twitter.svg"
                />
                <img
                  className="w-8 h-8 cursor-pointer object-contain"
                  alt="Twitter"
                  src="/images/socialmedia/linkedin.svg"
                />
                <img
                  className="w-8 h-8 cursor-pointer object-contain"
                  alt="Twitter"
                  src="/images/socialmedia/facebook.svg"
                />
              </div>
            </div>

            {/* Useful Links */}
            <nav className="flex flex-col gap-4 w-full lg:w-1/4">
              <h3 className="font-bold text-purple-300 text-lg">
                Useful Links
              </h3>
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white font-bold hover:text-purple-200 transition duration-200 cursor-pointer opacity-70"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Help Section */}
            <nav className="flex flex-col gap-4 w-full lg:w-1/4">
              <h3 className="font-bold text-purple-300 text-lg">Help</h3>
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${
                    index === 1 ? "w-fit whitespace-nowrap" : "self-stretch"
                  } font-bold text-white hover:text-purple-200 transition-colors duration-200 cursor-pointer opacity-70`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 w-full lg:w-1/4">
              <h3 className="font-medium text-purple-300 text-lg">
                Connect With Us
              </h3>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-white/80 text-sm cursor-pointer opacity-70"
                >
                  {info.label}: {info.value}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section with Footer Text */}
          <div className="flex justify-between items-center mt-8 border-t border-[#ecdffb1a] pt-6">
            <p className="text-white/80 text-sm">
              Divisi IT Menolak Tidur. All rights reserved. ©2025
            </p>
            <div className="text-white/80 text-sm">Dibuat dari rasa cinta</div>
          </div>
        </div>
      </div>
    </div>
  );
};
