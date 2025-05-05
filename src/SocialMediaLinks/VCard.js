// src/SocialMediaLinks/VCard.js
export const downloadVCard = (lang = "en") => {
  const vCardData = {
    en: {
      firstName: "Janindu",
      lastName: "Nimsara",
      org: "Manahara Book Shop",
      title: "Seller",
      phone: "+94768135736",
      email: "manaharabookshop.info@gmail.com",
      website: "https://web.facebook.com/profile.php?id=100070812983217",
    },
    si: {
      firstName: "ජනිඳු",
      lastName: "නිම්සර",
      org: "මනහර පොත්හල",
      title: "විකුණුම්කරු",
      phone: "+94768135736",
      email: "manaharabookshop.info@gmail.com",
      website: "https://web.facebook.com/profile.php?id=100070812983217",
    },
  };

  const info = vCardData[lang] || vCardData["en"];

  const escape = (str) => String(str).replace(/,/g, "\\,").replace(/;/g, "\\;");

  const vcf = `BEGIN:VCARD
VERSION:3.0
N:${escape(info.lastName)};${escape(info.firstName)}
FN:${escape(info.firstName)} ${escape(info.lastName)}
ORG:${escape(info.org)}
TITLE:${escape(info.title)}
TEL;TYPE=CELL:${info.phone}
EMAIL:${info.email}
URL:${info.website}
END:VCARD`;

  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${info.firstName}_${info.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }, 0);
};
