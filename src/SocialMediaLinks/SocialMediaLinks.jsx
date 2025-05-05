// src/components/SocialMediaLinks.jsx
import React, { useState } from "react";
import "./SocialMediaLinks.css";

import logo from "../assets/images/logo.png";
import facebookIcon from "../assets/images/facebook.png";
// import instagramIcon from "../assets/images/instagram.png";
// import youtubeIcon from "../assets/images/youtube.png";
// import tiktokIcon from "../assets/images/tiktok.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import emailIcon from "../assets/images/email.png";
import starsBg from "../assets/images/bg.png";

import { downloadVCard } from "./VCard";

const translations = {
  en: {
    followMe: "Follow Me",
    servicesTitle: "MANAHARA BOOKSHOP & GIFT CENTER",
    servicesSub: "Books, Gifts & More All in One Place",
    downloadVCard: "📥 Download vCard",
    about:
      "We provide affordable and reliable bookshop services including stationery, gifts, toys, sewing materials, and more.",
  },
  si: {
    followMe: "මාව අනුගමනය කරන්න",
    servicesTitle: "මනහර පොත්හල සහ තෑගි මධ්‍යස්ථානය",
    servicesSub: "පොත්, තෑගි සහ තවත් දේ එකම තැනකින්",
    downloadVCard: "📥 වි-කාඩ් බාගන්න",
    about:
      "ලිපි ද්‍රව්‍ය, තෑගි, සෙල්ලම් බඩු, මහන ද්‍රව්‍ය සහ තවත් දේ ඇතුළුව දැරිය හැකි සහ විශ්වාසදායක පොත් සාප්පු සේවා අපි සපයන්නෙමු.",
  },
};

const SocialMediaLinks = () => {
  const [lang, setLang] = useState("en");

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div
      className="social-container"
      style={{
        backgroundImage: `url(${starsBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      {/* Language Selector */}
      <div className="lang-select" style={{ marginBottom: "1rem" }}>
        <select onChange={handleLanguageChange} value={lang}>
          <option value="en">English</option>
          <option value="si">සිංහල</option>
        </select>
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="LOGOZO Logo" className="logo-img" />
      </div>

      {/* Title */}
      <h2 className="follow-title">{translations[lang].followMe}</h2>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://web.facebook.com/profile.php?id=100070812983217" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        {/* <a href="https://www.instagram.com/_logozo_/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@Logozosri" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="https://www.tiktok.com/@logozosri" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a> */}
        <a
          href="https://wa.me/94768135736?text=Hello!%20I'm%20interested%20in%20your%20products%20at%20Manhara%20Book%20Shop.%20Could%20you%20please%20share%20more%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="mailto:manaharabookshop.info@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
      </div>

      {/* Service Info */}
      <div className="service-text" style={{ marginTop: "2rem" }}>
        <h3>{translations[lang].servicesTitle}</h3>
        <p>{translations[lang].servicesSub}</p>
      </div>

      {/* vCard Button */}
      <div className="download-vcard" style={{ marginTop: "1rem" }}>
        <button className="vcard-button" onClick={() => downloadVCard(lang)}>
          {translations[lang].downloadVCard}
        </button>
      </div>

      {/* About */}
      <div className="about-text" style={{ marginTop: "2rem", maxWidth: "600px", marginInline: "auto" }}>
        <p>{translations[lang].about}</p>
      </div>

      {/* Bottom Stamp */}
      <div className="bottom-stamp">
        Made by <a href="https://wa.me/94740429827?text=Hello!%20I'm%20interested%20in%20your%20graphic%20design%20services%20at%20LOGOZO.%20Could%20you%20please%20share%20more%20details%3F
" target="_blank" rel="noopener noreferrer">LOGOZO</a> © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
