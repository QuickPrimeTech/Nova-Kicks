// @/site-config.ts

import { MapPin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Contact } from "./types/common";

export const siteConfig = {
  name: "Nova Kicks",
  title: "Nova Kicks - Best Online Shoe Store in Nairobi",
  description:
    "We offer a wide selection of stylish and comfortable shoes for men, women, and children. Shop now and step up your shoe game with our trendy and affordable footwear collection.",
  phone: "",
  location: "",
  mapsLink:
    "https://www.google.com/maps/place/Shoeempire/@-1.282415,36.8203514,19.7z/data=!4m10!1m2!2m1!1sshoe+empire!3m6!1s0x182f10d4126dd1bf:0x3b5b7acba01d070e!8m2!3d-1.2822572!4d36.8210239!15sCgtzaG9lIGVtcGlyZVoNIgtzaG9lIGVtcGlyZZIBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11f3wly07y?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
  longitude: 36.82102119893441,
  latitude: -1.2822459265610915,

  contacts: [
    {
      label: "Phone",
      value: "+254 721 77 11 08",
      url: "tel:+254721771108",
      icon: PhoneCall,
      description: "Available Mon-Sat, 9am - 8pm",
      colorClass: "emerald", // Emerald for Phone
    },
    {
      label: "Location",
      value: "Kimathi Street, Nairobi.",
      subValue: "Opposite Jamia Total petrol station.",
      url: "https://www.google.com/maps/place/Shoeempire/@-1.282415,36.8203514,19z/data=!4m10!1m2!2m1!1sshoe+empire!3m6!1s0x182f10d4126dd1bf:0x3b5b7acba01d070e!8m2!3d-1.2822572!4d36.8210239!15sCgtzaG9lIGVtcGlyZVoNIgtzaG9lIGVtcGlyZZIBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11f3wly07y?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
      icon: MapPin,
      description: "Visit our flagship experience store",
      colorClass: "blue", // Blue for Location
    },
    {
      label: "Whatsapp Us",
      value: "+254 721 77 11 08",
      url: "https://wa.me/254721771108",
      icon: FaWhatsapp,
      description: "Instant chat support",
      colorClass: "green", // Green for WhatsApp
    },
  ] satisfies Contact[],
};
