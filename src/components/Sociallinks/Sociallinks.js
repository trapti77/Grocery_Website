import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook style={{ fontSize: "24px", color: "#4267B2" }} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram style={{ fontSize: "24px", color: "#E4405F" }} />
      </a>
    </div>
  );
};

// Named exports for SocialLinks and the individual icons
export { SocialLinks, FaFacebook, FaInstagram };
