// @/sections/home/find-us
"use client";

import { MapPin, PhoneCall, ArrowUpRight } from "lucide-react";
import { MapCard } from "./map-card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa6";
import React from "react";

// Define a type that accepts both Lucide and React Icons
type Contact = {
  label: string;
  value: string;
  subValue?: string;
  url: string;
  icon: React.ElementType;
  description?: string;
  colorClass: string; // Tailored colors
};

const contacts: Contact[] = [
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
];

export const FindUs = () => {
  return (
    <section id="find-us" className="section py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-heading-2 md:text-heading-1 uppercase leading-[0.9]"
          >
            Connect with
            <br />
            <span className="text-muted-foreground">the empire.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <MapCard />
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {contacts.map((contact, i) => (
              <ContactCard key={contact.label} contact={contact} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ContactCard({ contact, index }: { contact: Contact; index: number }) {
  const Icon = contact.icon;

  // Map the colorClass to Tailwind classes
  const colorMap: Record<string, string> = {
    emerald:
      "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500",
    green:
      "text-green-500 bg-green-500/10 border-green-500/20 group-hover:bg-green-500",
  };

  const activeColor = colorMap[contact.colorClass] || colorMap.emerald;

  return (
    <motion.a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4 + index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative block w-full"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500",
          "hover:-translate-y-1",
          contact.colorClass === "emerald" && "hover:border-emerald-500/30",
          contact.colorClass === "blue" && "hover:border-blue-500/30",
          contact.colorClass === "green" && "hover:border-green-500/30",
        )}
      >
        {/* Background Ghost Icon */}
        <Icon
          className={cn(
            "absolute -right-4 -top-4 h-24 w-24 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12",
            contact.colorClass === "emerald" && "text-emerald-500",
            contact.colorClass === "blue" && "text-blue-500",
            contact.colorClass === "green" && "text-green-500",
          )}
        />

        <div className="relative flex items-start gap-5">
          {/* Dynamic Icon Container */}
          <div
            className={cn(
              "flex size-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white group-hover:shadow-lg",
              activeColor,
            )}
          >
            <Icon className="h-6 w-6" />
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {contact.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </div>

            <h4 className="font-display text-xl font-bold uppercase tracking-tight">
              {contact.value}
            </h4>

            {contact.subValue && (
              <p className="text-sm text-muted-foreground leading-snug">
                {contact.subValue}
              </p>
            )}

            <p className="pt-2 text-xs text-muted-foreground/60 font-medium italic">
              {contact.description}
            </p>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 h-0.5",
            contact.colorClass === "emerald" && "bg-emerald-500",
            contact.colorClass === "blue" && "bg-blue-500",
            contact.colorClass === "green" && "bg-green-500",
          )}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
        />
      </div>
    </motion.a>
  );
}
