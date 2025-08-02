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

  return (
    <footer className="absolute w-full h-[534px] top-[9717px] left-0 bg-transparent overflow-hidden bg-[linear-gradient(360deg,rgba(168,202,133,1)_34%,rgba(166,206,231,1)_58%,rgba(133,99,175,1)_100%)]">
      <div className="relative w-[1435px] h-[1308px] -top-px">
        <div className="w-[1435px] h-[1308px] border-t [border-top-style:solid] border-[#ecdffb1a] absolute top-0 left-0">
          <div className="absolute w-[1435px] h-[444px] top-20 left-0">
            <img
              className="absolute w-[538px] h-[352px] top-[92px] left-[897px] object-cover"
              alt="Building illustration"
              src="/images/building-1.png" // Gambar dari folder public/images
            />

            <img
              className="absolute w-[501px] h-[238px] top-[206px] left-[534px]"
              alt="Building illustration"
              src="/images/building-2.png" // Gambar dari folder public/images
            />

            <img
              className="absolute w-[596px] h-[395px] top-[49px] left-0 object-cover"
              alt="Plane illustration"
              src="/images/plane-1.png" // Gambar dari folder public/images
            />

            <div className="flex w-[1195px] h-[265px] items-start gap-[100px] absolute top-0 left-[120px]">
              <div className="flex flex-col w-[333px] items-start gap-6 relative">
                <img
                  className="relative w-[203px] h-[97px]"
                  alt="Intersummit logo"
                  src="/images/logo-intersummit-3.png" // Gambar dari folder public/images
                />

                <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim.
                </p>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Social media icons"
                  src="/images/frame-1216259460.svg" // Gambar dari folder public/images
                />
              </div>

              <nav
                className="flex flex-col w-[170px] items-start gap-4 relative"
                aria-label="Useful Links"
              >
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Rubik-Bold',Helvetica] font-bold text-purple-200 text-lg tracking-[-0.36px] leading-6">
                  Useful Links
                </h3>

                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="self-stretch [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] text-variable-collection-purple200-70 text-base leading-6 font-bold tracking-[0] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <nav
                className="flex flex-col w-[148px] items-start gap-4 relative"
                aria-label="Help"
              >
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Rubik-Bold',Helvetica] font-bold text-purple-200 text-lg tracking-[-0.36px] leading-6">
                  Help
                </h3>

                {helpLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`${
                      index === 1 ? "w-fit whitespace-nowrap" : "self-stretch"
                    } [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-variable-collection-purple200-70 text-base tracking-[0] leading-6 hover:text-white transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col w-[244px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-purple-200 text-lg tracking-[-0.36px] leading-6">
                  Connect With Us
                </h3>

                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`${
                      index === 1 ? "w-fit whitespace-nowrap" : "self-stretch"
                    } font-body-16 font-[number:var(--body-16-font-weight)] text-variable-collection-purple200-70 text-[length:var(--body-16-font-size)] tracking-[var(--body-16-letter-spacing)] leading-[var(--body-16-line-height)] [font-style:var(--body-16-font-style)]`}
                  >
                    {info.value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-[1195px] h-[68px] items-center justify-between px-2.5 py-[22px] absolute top-[1160px] left-[120px] border-t [border-top-style:solid] border-[#ecdffb1a]">
            <p className="relative w-fit mt-[-1.00px] font-body-16 font-[number:var(--body-16-font-weight)] text-variable-collection-purple200-70 text-[length:var(--body-16-font-size)] tracking-[var(--body-16-letter-spacing)] leading-[var(--body-16-line-height)] whitespace-nowrap [font-style:var(--body-16-font-style)]">
              Divisi IT Menolak Tidur. All right reserved. ©2025
            </p>

            <div className="relative w-fit mt-[-1.00px] font-body-16 font-[number:var(--body-16-font-weight)] text-purple-200 text-[length:var(--body-16-font-size)] tracking-[var(--body-16-letter-spacing)] leading-[var(--body-16-line-height)] whitespace-nowrap [font-style:var(--body-16-font-style)]">
              Dibuat dari rasa cinta
            </div>
          </div>
        </div>

        <img
          className="absolute w-[1435px] h-[5px] top-px left-0"
          alt="Decorative line"
          src="/images/line-5.svg" // Gambar dari folder public/images
        />
      </div>
    </footer>
  );
};
