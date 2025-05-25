import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  // Map footer links to their corresponding Apple URLs
  const footerLinkUrls = {
    "Privacy Policy": "https://www.apple.com/legal/privacy/",
    "Terms of Use":
      "https://www.apple.com/legal/internet-services/terms/site.html",
    "Sales Policy": "https://www.apple.com/legal/sales-support/",
    Legal: "https://www.apple.com/legal/",
    "Site Map": "https://www.apple.com/sitemap/",
  };

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <a
              href="https://www.apple.com/retail/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-300 hover:text-gray-200"
            >
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a
              href="https://www.apple.com/buy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-300 hover:text-gray-200"
            >
              other retailer
            </a>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <React.Fragment key={link}>
                <a
                  href={footerLinkUrls[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-400 hover:text-gray-200 text-xs mt-1"
                >
                  {link}{" "}
                </a>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
