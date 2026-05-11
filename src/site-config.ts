// @/site-config.ts

import { MapPin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Contact } from "./types/common";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

// Reusable formats
const phoneIntl = "+254717448835";
const phoneDisplay = "+254 717 44 88 35";
const whatsappMessage =
  "Hello QuickPrimetech, I'm intrested in having an online store for my products.";
const whatsappLink = `https://wa.me/${phoneIntl.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
const telLink = `tel:${phoneIntl}`;

export const siteConfig = {
  name: "Nova Kicks",
  title: "Nova Kicks - Best Online Shoe Store in Nairobi",
  description:
    "We offer a wide selection of stylish and comfortable shoes for men, women, and children. Shop now and step up your shoe game with our trendy and affordable footwear collection.",

  phone: phoneDisplay,

  location: "Kimathi Street, Nairobi.",

  mapsLink:
    "https://www.google.com/maps/place/Shoeempire/@-1.282415,36.8203514,19.7z/data=!4m10!1m2!2m1!1sshoe+empire!3m6!1s0x182f10d4126dd1bf:0x3b5b7acba01d070e!8m2!3d-1.2822572!4d36.8210239!15sCgtzaG9lIGVtcGlyZVoNIgtzaG9lIGVtcGlyZZIBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11f3wly07y?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",

  longitude: 36.82102119893441,
  latitude: -1.2822459265610915,

  contacts: [
    {
      label: "Phone",
      value: phoneDisplay,
      url: telLink,
      icon: PhoneCall,
      description: "Available Mon-Sat, 9am - 8pm",
      colorClass: "emerald",
    },
    {
      label: "Location",
      value: "Kimathi Street, Nairobi.",
      subValue: "Opposite Jamia Total petrol station.",
      url: "https://www.google.com/maps/place/Shoeempire/@-1.282415,36.8203514,19z/data=!4m10!1m2!2m1!1sshoe+empire!3m6!1s0x182f10d4126dd1bf:0x3b5b7acba01d070e!8m2!3d-1.2822572!4d36.8210239!15sCgtzaG9lIGVtcGlyZVoNIgtzaG9lIGVtcGlyZZIBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11f3wly07y?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
      icon: MapPin,
      description: "Visit our flagship experience store",
      colorClass: "blue",
    },
    {
      label: "Whatsapp Us",
      value: phoneDisplay,
      url: whatsappLink,
      icon: FaWhatsapp,
      description: "Instant chat support",
      colorClass: "green",
    },
  ] satisfies Contact[],

  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/quickprimetech/",
      icon: IoLogoInstagram,
    },
    {
      label: "Tiktok",
      url: "https://www.tiktok.com/@quickprimetech",
      icon: FaTiktok,
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61582841615260",
      icon: FaFacebook,
    },
  ],
};
